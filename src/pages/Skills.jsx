import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "Python", "SQL"],
    },
    {
      title: "Web Development",
      skills: ["React", "Node.js", "HTML", "CSS", "Tailwind CSS", "Express.js"],
    },
    {
      title: "Data Science",
      skills: ["NumPy", "Pandas", "Power BI", "Tableau"],
    },
    {
      title: "Tools",
      skills: ["Git", "VS Code", "Postman", "Figma", "Excel", "Jupyter Notebook"],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "NoSQL"],
    },
    {
      title: "DSA Concepts",
      skills: ["Arrays", "Linked Lists", "Stacks", "Queues", "Trees", "Graphs"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-32 px-6">
      
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-extrabold text-blue-400 text-center"
      >
        Technical Skills
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-300 dark:text-gray-400 mt-4 text-lg max-w-2xl text-center"
      >
        A breakdown of my core technical expertise.
      </motion.p>

      {/* Skills Grid */}
      <div className="mt-16 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="
              bg-[#10141f] dark:bg-[#10141f]
              border border-slate-800
              rounded-3xl p-8 shadow-xl
            "
          >
            <h2 className="text-2xl font-bold text-white">{cat.title}</h2>

            <div className="flex flex-wrap gap-3 mt-5">
              {cat.skills.map((skill, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ scale: 1.08 }}
                  className="
                    px-5 py-2 
                    rounded-full 
                    bg-blue-500/20 text-blue-300 
                    border border-blue-500/30
                    text-sm font-medium
                    transition
                  "
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
