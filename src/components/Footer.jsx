import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="mt-32 pb-10 pt-16 border-t border-slate-800 bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-6 text-center"
      >
        {/* Name */}
        <h2 className="text-2xl font-bold text-blue-400">
          Lokesh Mayakuntla
        </h2>

        {/* Social Links */}
        <div className="flex justify-center gap-10 mt-6 text-lg">
          <a
            href="https://www.instagram.com/_lokesh_2904/?__pwa=1"
            target="_blank"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            Instagram
          </a>

          <a
            href="https://www.linkedin.com/in/lokeshmayakuntla/"
            target="_blank"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/lokesh2904"
            target="_blank"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://lokesh2904.github.io/"
            target="_blank"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            Portfolio
          </a>
        </div>

        {/* Divider */}
        <div className="max-w-xs mx-auto mt-8 h-[1px] bg-slate-700 rounded-full" />

        {/* Bottom Text */}
        <p className="text-sm text-gray-500 mt-6">
          © {new Date().getFullYear()} Lokesh M • All Rights Reserved
        </p>

        <p className="text-xs text-gray-600 mt-2">
          Built with React, TailwindCSS, Framer Motion & Love ❤️
        </p>
      </motion.div>
    </footer>
  );
}
