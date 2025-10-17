import React, { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  // ✅ Added “Experience” link here
  const links = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        <h1 className="text-xl md:text-2xl font-bold text-accent">
          Murali Basha
        </h1>

        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-accent transition"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={toggleTheme}
          className="border border-accent text-accent px-3 py-1 rounded-md hover:bg-accent hover:text-white transition"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
