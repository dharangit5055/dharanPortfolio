import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { DharanCv } from "../assets/docs/docs";

const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "education" | "experience" | "skills"
  >("experience");

  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "University Name",
      year: "2018 - 2022",
      details:
        "Specialized in web development and software engineering. Graduated with honors. Participated in various hackathons and coding competitions.",
    },
  ];

  const experienceData = [
    {
      position: "Frontend Developer",
      company: "Cloud Destinations",
      period: "2023 - Present",
      responsibilities: [
        "Developed and maintained web applications using React, TypeScript, and Tailwind CSS",
        "Implemented SDLC methodology for project delivery",
        "Created reusable components to improve development efficiency",
        "Optimized application performance and conducted memory leak analysis",
        "Collaborated with design and QA teams to ensure high-quality deliverables",
      ],
    },
    {
      position: "Frontend Development Intern",
      company: "Vites Technologies",
      period: "2022 - 2023",
      responsibilities: [
        "Built e-commerce website using MERN stack (MongoDB, Express, React, Node.js)",
        "Developed image generator and news applications using React and JavaScript",
        "Integrated external APIs for image and news content",
        "Deployed applications using Zoho Catalyst platform",
        "Participated in team code reviews and agile development processes",
      ],
    },
  ];

  const skillsData = {
    frontend: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Framer Motion",
      "Redux",
    ],
    backend: [
      "Node.js",
      "Express",
      "MongoDB",
      "RESTful APIs",
      "GraphQL (basic)",
    ],
    tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Azure DevOps",
      "Figma",
      "Zoho Catalyst",
    ],
    methodologies: [
      "Agile/Scrum",
      "SDLC",
      "Test-Driven Development",
      "Responsive Design",
    ],
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Resume"
          subtitle="My professional background and qualifications"
        />

        <div className="mt-10 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-5xl bg-white dark:bg-gray-700 rounded-2xl shadow-md overflow-hidden transition-colors duration-300"
          >
            <div className="p-6">
              <div className="mb-8 flex flex-col sm:flex-row justify-between items-center">
                <div className="space-y-2 text-center sm:text-left mb-4 sm:mb-0">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Your Name
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Frontend Developer
                  </p>
                </div>
                <div className="flex space-x-4">
                  <a
                    href={DharanCv}
                    download
                    className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-2xl shadow transition-colors duration-300"
                  >
                    Download CV
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 10v6m0 0l-3-3m3 3l3-3m-9 8h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-600">
                <nav className="flex flex-wrap -mb-px">
                  <button
                    className={`mr-4 py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-300 ${
                      activeTab === "experience"
                        ? "border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400"
                        : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                    }`}
                    onClick={() => setActiveTab("experience")}
                  >
                    Experience
                  </button>
                  <button
                    className={`mr-4 py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-300 ${
                      activeTab === "education"
                        ? "border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400"
                        : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                    }`}
                    onClick={() => setActiveTab("education")}
                  >
                    Education
                  </button>
                  <button
                    className={`mr-4 py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-300 ${
                      activeTab === "skills"
                        ? "border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400"
                        : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                    }`}
                    onClick={() => setActiveTab("skills")}
                  >
                    Skills
                  </button>
                </nav>
              </div>

              <div className="mt-8">
                {activeTab === "experience" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-10"
                  >
                    {experienceData.map((job, index) => (
                      <div
                        key={index}
                        className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-600"
                      >
                        <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400"></div>
                        <div className="mb-2">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {job.position}
                          </h3>
                          <div className="flex flex-col sm:flex-row sm:justify-between">
                            <p className="text-md font-medium text-blue-600 dark:text-blue-400">
                              {job.company}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {job.period}
                            </p>
                          </div>
                        </div>
                        <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                          {job.responsibilities.map((item, idx) => (
                            <li key={idx} className="text-sm">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === "education" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                  >
                    {educationData.map((edu, index) => (
                      <div
                        key={index}
                        className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-600"
                      >
                        <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400"></div>
                        <div className="mb-2">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {edu.degree}
                          </h3>
                          <div className="flex flex-col sm:flex-row sm:justify-between">
                            <p className="text-md font-medium text-blue-600 dark:text-blue-400">
                              {edu.institution}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {edu.year}
                            </p>
                          </div>
                        </div>
                        <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
                          {edu.details}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === "skills" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  >
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                        Frontend
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skillsData.frontend.map((skill, index) => (
                          <span
                            key={index}
                            className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-medium px-3 py-1.5 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                        Backend
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skillsData.backend.map((skill, index) => (
                          <span
                            key={index}
                            className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs font-medium px-3 py-1.5 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                        Tools
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skillsData.tools.map((skill, index) => (
                          <span
                            key={index}
                            className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 text-xs font-medium px-3 py-1.5 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                        Methodologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skillsData.methodologies.map((skill, index) => (
                          <span
                            key={index}
                            className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 text-xs font-medium px-3 py-1.5 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
