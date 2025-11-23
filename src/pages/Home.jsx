import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const avatar = "https://i.ibb.co/bjHj8KjC/profile.jpg";

export default function Home() {
  const boxes = [
    { id: "projects", label: "Projects", to: "/projects" },
    { id: "skills", label: "Skills", to: "/skills" },
    { id: "contact", label: "Contact", to: "/contact" },
    { id: "certifications", label: "Certifications", to: "/certifications" },
    { id: "experience", label: "Experience", to: "/experience" },
    { id: "education", label: "Education", to: "/education" },
  ];

  return (
    <main className="min-h-screen pt-8 px-6 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold text-blue-400"
        >
          Lokesh Mayakuntla
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-3 text-lg text-slate-300 max-w-2xl mx-auto"
        >
          Full-Stack Developer • Software Engineer • Data Science • AI Tools
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}
          className="mt-10 border border-slate-800 rounded-3xl p-10 max-w-xl mx-auto bg-[#0a0f18] shadow-xl"
        >
          <img
            src={avatar}
            alt="Lokesh"
            className="w-32 h-32 rounded-full object-cover mx-auto border-2 border-blue-500 shadow-lg"
          />

          <div className="mt-6 flex items-center justify-center gap-6 text-sm text-slate-300 font-semibold">
            <a href="https://www.instagram.com/_lokesh_2904/?__pwa=1" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/lokeshmayakuntla/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/lokesh2904" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="https://drive.google.com/file/d/1gp4UdJfUfar0tRYSKQPoPxtVCwxIfX9O/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {boxes.map((b, i) => (
          <motion.div
            key={b.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 * i }}
            className="p-6"
          >
            <Link to={b.to} className="block">
              <div
                className="h-28 flex items-center justify-center rounded-2xl bg-[#0a0f18] border border-slate-800 shadow-lg hover:shadow-2xl transition-transform hover:scale-[1.03]"
              >
                <span className="text-xl font-bold">{b.label}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
