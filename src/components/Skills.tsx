import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React.js", icon: "/icons/react.png" },
  { name: "Node.js", icon: "/icons/node.png" },
  { name: "Express.js", icon: "/icons/express.png" },
  { name: "MongoDB", icon: "/icons/mongodb.png" },
  { name: "JavaScript", icon: "/icons/javascript.png" },
  { name: "REST API", icon: "/icons/restapi.png" },
  { name: "GitHub", icon: "/icons/github.png" },
  //   { name: "Frontend", icon: "/icons/frontend.png" },
  //   { name: "Database", icon: "/icons/database.png" },
];

const Skills = () => (
  <section id="skills" className="py-20 px-6 text-center">
    <motion.h3
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-3xl font-semibold mb-8"
    >
      Tech Stack
    </motion.h3>

    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
      {skills.map((skill) => (
        <motion.div
          key={skill.name}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-2"
        >
          <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
          <p className="text-gray-300 text-sm">{skill.name}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
