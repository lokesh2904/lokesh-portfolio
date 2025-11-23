import React from "react";
import { motion } from "framer-motion";

const exp1 = "https://i.ibb.co/JRND2SCx/ds-intern.jpg";
const exp2 = "https://i.ibb.co/WvsYqbY3/webdev-intern.jpg";

export default function Experience() {
  const experience = [
    {
      role: "Data Science Intern",
      company: "Indo Euro Synchronisation",
      period: "Feb 2024 – May 2024 (3 Months)",
      description:
        "Worked on data cleaning, analysis, dashboards, ETL workflows, and delivering insights using Power BI, NumPy, and Pandas.",
      img: exp1,
    },
    {
      role: "Web Development Intern",
      company: "Bharat Intern",
      period: "Aug 2024 – Sep 2024 (1 Month)",
      description:
        "Developed modern responsive front-ends using React and Tailwind; worked on deployment workflows and UI optimization.",
      img: exp2,
    },
  ];

  return (
    <div className="min-h-screen pt-32 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-4xl md:text-5xl font-extrabold text-blue-400"
        >
          Experience
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.12 }}
          className="mt-3 text-lg text-slate-300 max-w-2xl"
        >
          Timeline of internships & training (showing key roles).
        </motion.p>

        <div className="mt-12 space-y-14">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 * i }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* IMAGE */}
              <div className="w-full md:w-1/3">
                <img
                  src={exp.img}
                  alt={exp.role}
                  className="w-full h-56 object-cover rounded-2xl border border-slate-800 shadow-lg"
                />
              </div>

              {/* DETAILS */}
              <div className="w-full md:w-2/3 bg-[#0f1724] border border-slate-800 rounded-3xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                <p className="text-blue-400 font-semibold mt-1">{exp.company}</p>
                <p className="text-slate-400 mt-2">{exp.period}</p>
                <p className="text-slate-300 mt-4 leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
