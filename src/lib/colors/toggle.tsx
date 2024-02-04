import React, { useEffect } from "react";

const DarkModeToggle = () => {
  useEffect(() => {
    const setClass = (isDark: any) => {
      document.documentElement.classList.toggle("dark", isDark);
    };

    const scheme = localStorage.getItem("ⲍ 🎨");

    if (!scheme) {
      const mql = window.matchMedia("(prefers-color-scheme: dark)");
      setClass(mql.matches);
      mql.addEventListener("change", (e) => setClass(e.matches));
      window.ⲍ_schemeMql = mql;
    } else {
      setClass(scheme === "dark");
    }

    return () => {
      if (window.ⲍ_schemeMql) {
        window.ⲍ_schemeMql.removeEventListener("change", (e) =>
          setClass(e.matches)
        );
      }
    };
  }, []);

  return null;
};

export default DarkModeToggle;
