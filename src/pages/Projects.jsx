import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      id: "pulse-search",
      title: "Pulse Search",
      description: "A fast, relevance-first search tool for developer docs and code snippets.",
      img: "https://i.ibb.co/RpWMkGXW/pulse.jpg",
      link: "https://gemini-clone-bezf-5rbs16o6a-lokeshs-projects-d6d4915d.vercel.app/",
      tech: ["React", "Tailwind", "Node.js", "Elasticsearch"],
    },
    {
      id: "crypto-place",
      title: "Crypto Place",
      description: "Real-time crypto dashboard that tracks prices, portfolio value, and market news.",
      img: "https://i.ibb.co/LDMYTZF7/crypto.jpg",
      link: "https://lokesh2904.github.io/",
      tech: ["React", "Chart.js", "CoinGecko API"],
    },
    {
      id: "game-match",
      title: "Game Match",
      description: "Multiplayer matchmaking prototype focusing on fair matching and lightweight realtime sync.",
      img: "https://i.ibb.co/N6X99LgS/gamematch.jpg",
      link: "https://nexus-final-tau.vercel.app/",
      tech: ["React", "WebSockets", "Node.js"],
    },
    {
      id: "quick-cart",
      title: "Quick Cart",
      description: "E-commerce prototype with smooth UI, cart syncing, and checkout flows.",
      img: "https://i.ibb.co/qMLQSzJD/quickcart.jpg",
      link: "https://quick-cart-nine-olive.vercel.app/",
      tech: ["React", "Tailwind", "Local Storage"],
    },
    {
      id: "selenium",
      title: "Selenium Automation",
      description: "Automated E2E testing suite built with Selenium (Java) for form automation.",
      img: "https://i.ibb.co/zT3jBn9t/selenium.jpg",
      link: "#",
      tech: ["Selenium", "Java"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-32 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="text-5xl font-extrabold text-blue-400 text-center"
      >
        Projects
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="text-gray-300 dark:text-gray-400 mt-4 text-lg max-w-2xl text-center"
      >
        Selected work — click any card to open the live project.
      </motion.p>

      <div className="mt-14 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 }}
            className="bg-[#0f1724] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl"
            data-tilt
          >
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="block w-full h-64 overflow-hidden"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </a>

            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                  <p className="text-gray-400 mt-2">{p.description}</p>
                </div>

                <div className="flex flex-col items-end gap-3">
                  <div className="text-sm text-slate-400">{/* role/label placeholder */}</div>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                    data-magnetic
                  >
                    View
                  </a>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
