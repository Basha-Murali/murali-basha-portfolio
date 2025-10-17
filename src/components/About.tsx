import React from "react";
import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="py-20 px-6 text-center">
    <motion.h3
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-3xl font-semibold mb-8"
    >
      About Me
    </motion.h3>

    <motion.p
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="max-w-3xl mx-auto text-gray-300"
    >
      I’m a full-stack JavaScript developer specializing in building responsive,
      high-performance web applications using React, Node.js, Express, and
      MongoDB. I love crafting efficient APIs, reusable components, and seamless
      UX with modern frameworks and tools.
    </motion.p>
  </section>
);

export default About;
