import React from "react";

interface SkillBadgeProps {
  skill: string;
  colorClass?: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({
  skill,
  colorClass = "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
}) => {
  return (
    <span className={`px-3 py-1 rounded-2xl text-sm font-medium ${colorClass}`}>
      {skill}
    </span>
  );
};

export default SkillBadge;
