//

// src/components/topButton/TopButton.js
import React, { useEffect, useCallback } from "react";
import "./TopButton.css";

export default function TopButton({ theme }) {
  const handleScroll = useCallback(() => {
    const btn = document.getElementById("topButton");
    if (!btn) return; // guard if not mounted yet
    const y =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    btn.style.display = y > 20 ? "block" : "none";
  }, []);

  useEffect(() => {
    // attach safely on mount, clean up on unmount
    window.addEventListener("scroll", handleScroll, { passive: true });
    // run once to set initial state
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      id="topButton"
      aria-label="Back to top"
      className="topButton"
      onClick={scrollToTop}
      // hidden until scrolled
      style={{ display: "none", backgroundColor: theme?.accentBright }}
    >
      ↑
    </button>
  );
}
