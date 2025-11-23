import React from "react";
import { motion } from "framer-motion";

export default function Education() {
  const edu = [
    {
      title: "B.Tech — Computer Science Engineering",
      college: "Vellore Institute of Technology(Amaravati)",
      year: "2022 – 2026",
      details: "Focused on full-stack development, data science, algorithms, and modern software engineering.",
    },
    {
      title: "Intermediate — MPC",
      college: "Space Junior College",
      year: "2020 – 2022 -- (98.1%)",
      details: "Mathematics, Physics, and Chemistry track with strong academic foundation.",
    },
    {
      title: "10th Standard",
      college: "Harish EM School",
      year: "2019 – 2020 -- (93%)",
      details: "Completed schooling with distinction.",
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
        Education
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-300 dark:text-gray-400 mt-4 text-lg max-w-2xl text-center"
      >
        My academic background and learning journey
      </motion.p>

      {/* Timeline */}
      <div className="mt-14 w-full max-w-4xl space-y-10">
        {edu.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 * i }}
            className="
              bg-[#10141f] dark:bg-[#10141f]
              border border-slate-800
              rounded-3xl p-8 shadow-xl
            "
          >
            <h2 className="text-2xl font-bold text-white">{item.title}</h2>
            <p className="text-blue-400 mt-1 font-semibold">{item.college}</p>
            <p className="text-gray-400 mt-1">{item.year}</p>
            <p className="text-gray-300 dark:text-gray-400 mt-4 leading-relaxed">
              {item.details}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
