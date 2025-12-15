import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function DarkModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before rendering to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handler for toggle click
  const handleToggle = () => {
    const newTheme = theme === "dark" || resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  // Don't render anything until mounted to avoid hydration issues
  if (!mounted) {
    return (
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="w-5 h-5 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded"
      >
        <div className="w-5 h-5"></div>
      </button>
    );
  }

  const currentTheme = theme || resolvedTheme;
  const isDark = currentTheme === "dark";

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="w-5 h-5 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded hover:opacity-80 transition-opacity"
      onClick={handleToggle}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="w-5 h-5 text-yellow-500"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {isDark ? (
          // Sun icon for dark mode (clicking will switch to light)
          <>
            <circle cx="12" cy="12" r="4" fill="currentColor" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </>
        ) : (
          // Moon icon for light mode (clicking will switch to dark)
          <path
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
            fill="currentColor"
          />
        )}
      </svg>
    </button>
  );
}