import React, { useEffect } from "react";
import "../components/cursor-effects.css"; // <-- correct path

export default function CursorEffects() {
  useEffect(() => {
    const blob = document.createElement("div");
    blob.id = "cursor-blob";
    document.body.appendChild(blob);

    const ripple = document.createElement("div");
    ripple.id = "cursor-ripple";
    document.body.appendChild(ripple);

    const trailContainer = document.createElement("div");
    trailContainer.id = "cursor-trail-container";
    document.body.appendChild(trailContainer);

    /* GLOW BLOB FOLLOW */
    window.addEventListener("mousemove", (e) => {
      blob.animate(
        { left: `${e.clientX}px`, top: `${e.clientY}px` },
        { duration: 650, fill: "forwards" }
      );
    });

    /* TRAIL PARTICLES */
    window.addEventListener("mousemove", (e) => {
      const dot = document.createElement("div");
      dot.className = "cursor-dot";
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
      trailContainer.appendChild(dot);

      setTimeout(() => dot.remove(), 450);
    });

    /* CLICK RIPPLE */
    window.addEventListener("click", (e) => {
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      ripple.classList.add("active");
      setTimeout(() => ripple.classList.remove("active"), 400);
    });

    /* MAGNETIC BUTTONS */
    const initMagnetic = () => {
      document.querySelectorAll("[data-magnetic]").forEach((el) => {
        const strength = 22;

        el.addEventListener("mousemove", (e) => {
          const rect = el.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;

          el.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
        });

        el.addEventListener("mouseleave", () => {
          el.style.transform = "translate(0px,0px)";
        });
      });
    };

    setTimeout(initMagnetic, 300);

    return () => {
      blob.remove();
      ripple.remove();
      trailContainer.remove();
    };
  }, []);

  return null;
}
