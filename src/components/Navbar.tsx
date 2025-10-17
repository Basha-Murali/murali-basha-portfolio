import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  // ✅ Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150; // navbar offset
      for (const item of navItems) {
        const section = document.querySelector(item.href) as HTMLElement | null;
        if (
          section &&
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActiveSection(item.href);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const section = document.querySelector(href) as HTMLElement | null;
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70, // account for navbar height
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/90 backdrop-blur-md text-white z-50 shadow-md transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* ✅ Logo */}
        <motion.a
          href="#hero"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          // className="text-xl font-bold text-[#3C873A]"
          className="flex items-center space-x-2"
        >
          <span className="text-xl font-bold text-[#3C873A]">MB</span>
          <span className="text-sm text-gray-300 tracking-wide">Portfolio</span>
        </motion.a>

        {/* ✅ Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative transition duration-200 pb-1
                  ${
                    activeSection === item.href
                      ? "text-[#3C873A] font-semibold after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#3C873A] after:bottom-0 after:left-0 after:rounded-full after:transition-all"
                      : "hover:text-[#3C873A]"
                  }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ✅ Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* ✅ Mobile Dropdown */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-900/95 flex flex-col items-center gap-5 py-6 text-sm border-t border-gray-700"
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`transition duration-200 ${
                  activeSection === item.href
                    ? "text-[#3C873A] font-semibold"
                    : "hover:text-[#3C873A]"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
