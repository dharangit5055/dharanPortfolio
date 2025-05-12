import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import SkillBadge from "../components/SkillBadge";

interface TimelineItemProps {
  date: string;
  title: string;
  company: string;
  description: string;
  skills: string[];
  achievements: string[];
  isLeft?: boolean;
  delay?: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  company,
  description,
  skills,
  achievements,
  isLeft = false,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`flex flex-col md:flex-row gap-8 mb-12`}
    >
      <div className={`md:w-1/3 ${isLeft ? "md:order-1" : "md:order-1"}`}>
        <div className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-md transition-colors duration-300 h-full">
          <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
            {date}
          </p>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-1">{company}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.slice(0, 3).map((skill, index) => (
              <SkillBadge key={index} skill={skill} />
            ))}
            {skills.length > 3 && (
              <span className="text-sm text-gray-500 dark:text-gray-400 self-center">
                +{skills.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="hidden md:flex flex-col items-center w-10">
        <div className="w-1 bg-blue-500 dark:bg-blue-400 h-full rounded-full"></div>
        <div className="w-6 h-6 bg-blue-600 dark:bg-blue-500 rounded-full mt-1 shadow-md"></div>
      </div>

      <div className={`md:w-2/3 ${isLeft ? "md:order-2" : "md:order-3"}`}>
        <div className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-md transition-colors duration-300">
          <p className="text-gray-700 dark:text-gray-300">{description}</p>
          <h4 className="font-semibold text-gray-900 dark:text-white mt-4 mb-2">
            Key Achievements:
          </h4>
          <ul className="space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span className="text-gray-700 dark:text-gray-300">
                  {achievement}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  const experiences = [
    {
      date: "2023 - Present",
      title: "Frontend Developer",
      company: "Cloud Destinations",
      description:
        "Working on the Product Engineering Team, contributing to multiple projects including Chroniva (Calendar Management System) and AAON - Stratus. Focus on implementing SDLC methodologies for efficient delivery.",
      skills: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Electron",
        "SDLC",
        "Performance Optimization",
        "API Integration",
      ],
      achievements: [
        "Developed reusable components including Profile Avatar, Confirmation Popup, and Accordion Items that were later adopted in other projects",
        "Implemented SDLC methodology to streamline development workflows and accelerate feature delivery",
        "Optimized application performance by identifying and fixing memory leaks and improving rendering logic",
        "Collaborated with design teams to ensure UI designs were user-friendly and development-ready",
      ],
    },
    {
      date: "2022 - 2023",
      title: "Frontend Development Intern",
      company: "Vites Technologies",
      description:
        "Contributed to multiple projects including e-commerce websites and web applications. Gained practical experience in both frontend and backend development.",
      skills: [
        "React",
        "JavaScript",
        "Express",
        "MongoDB",
        "API Integration",
        "Zoho Catalyst",
      ],
      achievements: [
        "Developed 'Neesh Design' - a clothing store e-commerce website using the MERN stack",
        "Created an Image Generator App leveraging the Unsplash API for image display and downloads",
        "Built a Live News App using React and JavaScript with real-time updates through news APIs",
        "Deployed applications using Zoho Catalyst, improving the efficiency of deployment workflows",
      ],
      isLeft: true,
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey and career highlights"
        />

        <div className="mt-16">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              date={exp.date}
              title={exp.title}
              company={exp.company}
              description={exp.description}
              skills={exp.skills}
              achievements={exp.achievements}
              isLeft={exp.isLeft}
              delay={0.2 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
