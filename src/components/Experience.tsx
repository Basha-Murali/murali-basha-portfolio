import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer",
    company: "TRC Companies",
    duration: "2022 – Present",
    details:
      "Developing enterprise-grade GIS dashboards and AngularJS modules with REST API integrations and complex UI-Grid forms.",
  },
  {
    role: "Full-Stack Developer",
    company: "Springboard",
    duration: "2021 – 2022",
    details:
      "Built and maintained MERN-based web apps with authentication, role management, and data visualization components using React & Node.",
  },
  {
    role: "Web Developer Intern",
    company: "AES Projects",
    duration: "2020 – 2021",
    details:
      "Assisted in building internal tools using React and Express.js; implemented REST endpoints and UI enhancements for data workflows.",
  },
];

const Experience = () => (
  <section id="experience" className="py-20 px-6 text-center">
    <motion.h3
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-3xl font-semibold mb-8"
    >
      Experience
    </motion.h3>

    <div className="max-w-4xl mx-auto flex flex-col gap-8 text-left">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900 border border-gray-800 rounded-lg p-6 shadow-md"
        >
          <h4 className="text-accent text-xl font-bold">{exp.role}</h4>
          <p className="text-gray-400 text-sm mb-2">
            {exp.company} • {exp.duration}
          </p>
          <p className="text-gray-300 text-sm">{exp.details}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Experience;
