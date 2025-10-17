import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/Project";

const Projects = () => (
  <section id="projects" className="py-20 px-6 text-center">
    <motion.h3
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-3xl font-semibold mb-8"
    >
      Projects
    </motion.h3>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {projects.map((p) => (
        <motion.div
          key={p.title}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900 rounded-lg p-4 border border-gray-800 hover:scale-105 transition-transform"
        >
          <img
            src={p.image}
            alt={p.title}
            className="rounded-lg mb-4 w-full h-40 object-contain bg-gray-800"
          />
          <h4 className="text-xl font-bold mb-2 text-accent">{p.title}</h4>
          <p className="text-gray-400 text-sm mb-4">{p.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;
