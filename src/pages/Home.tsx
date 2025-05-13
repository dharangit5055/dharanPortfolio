import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import { DharanImg } from "../assets/images/images";
import { LinkedInIcon, GitHubIcon } from "../assets/icons/icons";
import { SOCIAL_LINKS } from "../constants/constants";

const Home: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    console.log(theme);
  });

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-800 flex items-center transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Hello, I'm{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Dharaneesh
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
              MERN Stack Web Developer with hands-on experience in building
              scalable, maintainable, and high-performance web applications
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-2xl shadow transition-colors duration-300"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-600 font-medium rounded-2xl shadow border border-gray-200 dark:border-gray-600 transition-colors duration-300"
              >
                Contact Me
              </Link>
            </div>
            <div className="mt-8 flex items-center space-x-4">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <GitHubIcon className="h-7 w-7" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <LinkedInIcon className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
              <img
                src={DharanImg}
                alt="Dharaneesh"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
