import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CursorEffects from "./components/CursorEffects";

/* PAGES */
import Home from "./pages/Home";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";

export default function App() {
  const [theme, setTheme] = React.useState("dark");
  const location = useLocation();

  /* -------------------------------
        DARK / LIGHT MODE
  --------------------------------*/
  useEffect(() => {
    const html = document.documentElement;

    if (theme === "dark") {
      html.classList.add("dark");
      document.body.style.background = "#0b0f19";
      document.body.style.color = "white";
    } else {
      html.classList.remove("dark");
      document.body.style.background = "#ffffff";
      document.body.style.color = "#111";
    }
  }, [theme]);

  /* -------------------------------
        PAGE TRANSITION ANIMATION
  --------------------------------*/
  useEffect(() => {
    const page = document.getElementById("page-transition");
    if (!page) return;

    page.style.opacity = 0;
    setTimeout(() => (page.style.opacity = 1), 80);
  }, [location.pathname]);

  return (
    <>
      {/* GLOBAL CURSOR EFFECTS */}
      <CursorEffects />

      {/* NAVIGATION BAR */}
      <Navbar theme={theme} setTheme={setTheme} />

      {/* MAIN PAGE CONTENT */}
      <main
        id="page-transition"
        className="
          transition-opacity duration-500 
          min-h-screen
          pt-[120px]       /* space below navbar */
          px-4 md:px-8     /* responsive page padding */
          max-w-[1400px] 
          mx-auto
        "
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
