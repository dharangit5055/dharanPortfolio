import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Initialize theme before rendering
const initializeTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  const htmlEl = document.documentElement;

  // Clear any existing theme classes
  htmlEl.classList.remove("light", "dark");

  // Apply appropriate theme class
  if (
    savedTheme === "dark" ||
    (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    htmlEl.classList.add("dark");
  } else {
    htmlEl.classList.add("light");
  }
};

// Run initialization
initializeTheme();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
