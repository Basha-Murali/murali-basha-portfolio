import React from "react";
import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="py-20 px-6 text-center">
    {/* Section Heading */}
    <motion.h3
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-3xl font-semibold mb-8"
    >
      About Me
    </motion.h3>

    {/* Content Container (same animation style as project cards) */}
    <motion.p
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 0px 20px rgba(60, 135, 58, 0.5)",
      }}
      className="max-w-3xl mx-auto bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-md hover:shadow-accent/30 transition"
    >
      <p className="text-gray-300 text-lg leading-relaxed">
        I’m a full-stack JavaScript developer specializing in building
        responsive, high-performance web applications. Strong specialization in
        backend development using{" "}
        <span className="text-accent font-medium">Node.js</span>,{" "}
        <span className="text-accent font-medium">Express</span>, and{" "}
        <span className="text-accent font-medium">MongoDB</span>, with hands-on
        experience in <span className="text-accent font-medium">React.js</span>.
        I love crafting efficient APIs, reusable components, and seamless user
        experiences with modern frameworks and tools.
      </p>
    </motion.p>
  </section>
);

export default About;
