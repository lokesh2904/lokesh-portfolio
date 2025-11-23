import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

export default function Navbar({ theme, setTheme }) {
  const loc = useLocation();
  const nav = [
    ["Home", "/"],
    ["Education", "/education"],
    ["Projects", "/projects"],
    ["Skills", "/skills"],
    ["Experience", "/experience"],
    ["Certifications", "/certifications"],
    ["Contact", "/contact"],
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-lg border-b border-slate-800 h-[90px] flex items-center">
      <div className="max-w-7xl mx-auto px-8 w-full flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide text-white"
        >
          Lokesh M
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-10 items-center">
          {nav.map(([label, to]) => (
            <Link
              key={to}
              to={to}
              className={`text-lg font-bold transition ${
                loc.pathname === to
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition"
          >
            {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-3 rounded-full bg-slate-800"
          >
            {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
