import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import SkillBadge from "../components/SkillBadge";

const About: React.FC = () => {
  const skills = [
    {
      name: "React",
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    },
    {
      name: "TypeScript",
      color:
        "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
    },
    {
      name: "JavaScript",
      color:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    },
    {
      name: "Tailwind CSS",
      color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300",
    },
    {
      name: "Electron",
      color:
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    },
    {
      name: "SDLC",
      color:
        "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    },
    {
      name: "Next.js",
      color: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
    },
    {
      name: "Node.js",
      color:
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    },
    {
      name: "Express",
      color: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
    },
    {
      name: "MongoDB",
      color:
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    },
    {
      name: "API Integration",
      color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    },
    {
      name: "Performance Optimization",
      color:
        "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Get to know more about me and my technical expertise"
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Who I Am
            </h3>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300">
                I'm a passionate Frontend Developer specializing in creating
                intuitive and performant user interfaces. With a strong
                foundation in React and TypeScript, I focus on developing clean,
                maintainable code and reusable components that enhance both user
                experience and developer productivity.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                Currently working at Cloud Destinations, I've contributed to
                multiple projects where I've implemented SDLC methodologies,
                developed reusable components, and optimized application
                performance. I believe in continuous learning and challenging
                myself with new technologies and approaches.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                Beyond technical skills, I value collaboration and knowledge
                sharing. I actively participate in sprint planning, design
                discussions, and enjoy mentoring fellow developers to foster a
                productive team environment.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <SkillBadge skill={skill.name} colorClass={skill.color} />
                </motion.div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-6">
              What I'm Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              I dedicate 30 minutes daily to expand my skillset. Currently, I'm
              focusing on:
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span className="text-gray-600 dark:text-gray-300">
                  Next.js for building modern, server-rendered React
                  applications
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span className="text-gray-600 dark:text-gray-300">
                  Micro frontend architecture to improve scalability and
                  maintainability
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span className="text-gray-600 dark:text-gray-300">
                  Backend technologies to strengthen my full-stack capabilities
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
