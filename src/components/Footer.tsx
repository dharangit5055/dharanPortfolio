import React from "react";
import { EmailIcon, GitHubIcon, LinkedInIcon } from "../assets/icons/icons";
import { SOCIAL_LINKS } from "../constants/constants";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 shadow-inner transition-colors duration-300">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-700 dark:text-gray-300">
              © {new Date().getFullYear()} | Designed & Built with ❤️
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-300"
            >
              <span className="sr-only">GitHub</span>
              <GitHubIcon className="w-6.5" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-300"
            >
              <span className="sr-only">LinkedIn</span>
              <LinkedInIcon className="w-5" />
            </a>
            <a
              href={SOCIAL_LINKS.email}
              target="_blank"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-300"
            >
              <span className="sr-only">Email</span>
              <EmailIcon className="w-7" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
