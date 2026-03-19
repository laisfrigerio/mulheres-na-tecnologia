"use client";

import { useState, useEffect } from "react";
import { handleBackToTopVisibility, scrollToTop } from "@/utils/scroll";

export const BackToTop = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const button = document.getElementById("back-to-top") as HTMLElement;
    if (!button) return;

    const handleScroll = () => {
      handleBackToTopVisibility(button);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <button
      id="back-to-top"
      className="back-to-top"
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
    >
      ↑
    </button>
  );
};
