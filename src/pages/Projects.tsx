import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import SkillBadge from "../components/SkillBadge";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoLink?: string;
  githubLink?: string;
  category: "professional" | "personal";
  highlights: string[];
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "professional" | "personal">(
    "all"
  );

  const projects: Project[] = [
    {
      id: 1,
      title: "Chroniva - Calendar Management System",
      description:
        "A comprehensive calendar management system with features for synchronizing Google and Outlook calendars, scheduling meetings, and managing events.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Graph API"],
      image: "/api/placeholder/600/400",
      category: "professional",
      highlights: [
        "Implemented SDLC methodology for systematic planning and development",
        "Created reusable components for the Profile Avatar, Confirmation Popup, and Accordion Items",
        "Designed Meeting Type, List Meeting, and Summary View sections",
        "Applied global styling approach for consistent UI implementation",
      ],
    },
    {
      id: 2,
      title: "AAON - Stratus",
      description:
        "Desktop application for temperature control systems with advanced monitoring capabilities and user interface.",
      technologies: [
        "React",
        "TypeScript",
        "Electron",
        "Performance Optimization",
      ],
      image: "/api/placeholder/600/400",
      category: "professional",
      highlights: [
        "Contributed to the Temperature Adjuster component development",
        "Conducted performance testing and optimization to reduce memory leaks",
        "Improved rendering logic using useEffect and useMemo for better performance",
        "Collaborated with Software Engineering team to meet critical deadlines",
      ],
    },
    {
      id: 3,
      title: "Neesh Design - E-Commerce Website",
      description:
        "A fully functional e-commerce platform for a clothing store with product catalog, shopping cart, and checkout functionality.",
      technologies: ["React", "JavaScript", "Express", "MongoDB"],
      image: "/api/placeholder/600/400",
      demoLink: "https://example.com",
      githubLink: "https://github.com/yourusername/neesh-design",
      category: "personal",
      highlights: [
        "Developed using the MERN stack (MongoDB, Express, React, Node.js)",
        "Implemented responsive design for all device sizes",
        "Created user authentication and product management features",
        "Built RESTful APIs for product and order management",
      ],
    },
    {
      id: 4,
      title: "Image Generator App",
      description:
        "Web application that allows users to search and download high-quality images from Unsplash.",
      technologies: ["React", "JavaScript", "Unsplash API", "Zoho Catalyst"],
      image: "/api/placeholder/600/400",
      demoLink: "https://example.com",
      githubLink: "https://github.com/yourusername/image-generator",
      category: "personal",
      highlights: [
        "Integrated with the Unsplash API for image search and display",
        "Implemented image download functionality",
        "Created responsive gallery layout",
        "Deployed using Zoho Catalyst platform",
      ],
    },
    {
      id: 5,
      title: "Live News App",
      description:
        "Real-time news application that aggregates news from multiple sources with categorization and search capabilities.",
      technologies: ["React", "JavaScript", "News API", "Zoho Catalyst"],
      image: "/api/placeholder/600/400",
      demoLink: "https://example.com",
      githubLink: "https://github.com/yourusername/live-news-app",
      category: "personal",
      highlights: [
        "Integrated with multiple news APIs for comprehensive coverage",
        "Implemented category filtering and search functionality",
        "Created responsive design with card-based news layout",
        "Deployed using Zoho Catalyst platform",
      ],
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Projects"
          subtitle="A showcase of my work and technical capabilities"
        />

        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-2xl bg-gray-100 dark:bg-gray-700 p-1 transition-colors duration-300">
            <button
              className={`px-4 py-2 rounded-2xl text-sm font-medium transition-colors duration-300 ${
                filter === "all"
                  ? "bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
              onClick={() => setFilter("all")}
            >
              All Projects
            </button>
            <button
              className={`px-4 py-2 rounded-2xl text-sm font-medium transition-colors duration-300 ${
                filter === "professional"
                  ? "bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
              onClick={() => setFilter("professional")}
            >
              Professional
            </button>
            <button
              className={`px-4 py-2 rounded-2xl text-sm font-medium transition-colors duration-300 ${
                filter === "personal"
                  ? "bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
              onClick={() => setFilter("personal")}
            >
              Personal
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white dark:bg-gray-700 rounded-2xl shadow-md overflow-hidden transition-colors duration-300 hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-2 right-2">
                  <span
                    className={`px-3 py-1 rounded-2xl text-xs font-medium ${
                      project.category === "professional"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                        : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                    }`}
                  >
                    {project.category === "professional"
                      ? "Professional"
                      : "Personal"}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <SkillBadge key={i} skill={tech} />
                  ))}
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Highlights:
                  </h4>
                  <ul className="space-y-1">
                    {project.highlights.slice(0, 2).map((highlight, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <span className="text-blue-600 dark:text-blue-400 mr-2">
                          •
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex space-x-4">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-2xl shadow transition-colors duration-300 text-sm"
                    >
                      Live Demo
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        ></path>
                      </svg>
                    </a>
                  )}

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 text-gray-800 dark:text-white font-medium rounded-2xl shadow transition-colors duration-300 text-sm"
                    >
                      Code
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
