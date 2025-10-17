import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [navHeight, setNavHeight] = useState(0);

  // ✅ Detect and store navbar height dynamically
  useEffect(() => {
    const navbar = document.querySelector("nav");
    if (navbar) {
      const height = navbar.getBoundingClientRect().height;
      setNavHeight(height);
    }

    const handleResize = () => {
      const navbar = document.querySelector("nav");
      if (navbar) {
        const height = navbar.getBoundingClientRect().height;
        setNavHeight(height);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="home"
      style={{ paddingTop: `${navHeight + 40}px` }} // ✅ Auto-adjusts spacing (navbar height + 40px extra)
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 transition-all duration-300"
    >
      {/* 👇 Profile Image with hover spin animation */}
      <motion.img
        src="/icons/profile.jpg"
        alt="Murali Basha"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-accent object-cover mb-6 shadow-[0_0_15px_#3C873A] cursor-pointer"
      />

      <motion.h2
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-bold"
      >
        Hi, I’m <span className="text-accent">Murali Basha</span>
      </motion.h2>

      <motion.p
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="mt-4 text-lg md:text-xl max-w-xl text-gray-300"
      >
        A passionate <span className="text-accent">MERN Stack Developer</span>{" "}
        specialized in backend architecture with strong hands-on experience in
        modern frontend frameworks.
      </motion.p>

      <motion.a
        href="#projects"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="mt-6 bg-accent hover:bg-green-600 px-6 py-3 rounded-md text-white font-medium transition"
      >
        View My Work
      </motion.a>
    </section>
  );
};

export default Hero;
