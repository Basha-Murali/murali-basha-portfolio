import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer",
    company: "TRC Companies, Inc.",
    duration: "Dec 2022 – Present",
    summary:
      "Working as a MERN Stack Developer on multiple enterprise-level projects involving React.js, Node.js, and MongoDB. Focused on building scalable REST APIs, data-driven dashboards, and automation modules.",
    projects: [
      {
        name: "Springboard",
        description:
          "Data management platform consolidating spatial and nonspatial datasets for QA/QC analytics. Built rule-based workflows using OpenRules, developed dynamic React.js dashboards, and ensured data compliance with QA teams.",
      },
      {
        name: "AG&P Gas Project",
        description:
          "Designed REST APIs using Node.js and MongoDB, improving response time by 20%. Executed DB migration scripts and API integrations for scalable and consistent backend operations.",
      },
      {
        name: "FieldOn",
        description:
          "Admin web portal for ticket management with multi-tenant support. Built robust REST APIs, fixed critical bugs improving stability by 30%, and enhanced testing workflows with QA collaboration.",
      },
    ],
  },
  {
    role: "Backend Developer Intern",
    company: "Magik Minds",
    duration: "2021 – 2022",
    summary:
      "Gained hands-on experience with HTML, CSS, JavaScript, and Node.js. Assisted in backend development and UI improvements for internal web tools.",
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

    <div className="max-w-5xl mx-auto flex flex-col gap-10 text-left">
      {experiences.map((exp, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900 border border-gray-800 rounded-lg p-6 shadow-md"
        >
          <h4 className="text-accent text-xl font-bold">{exp.role}</h4>
          <p className="text-gray-400 text-sm mb-2">
            {exp.company} • {exp.duration}
          </p>
          <p className="text-gray-300 text-sm mb-4">{exp.summary}</p>

          {exp.projects && (
            <ul className="list-disc list-inside text-gray-400 pl-3">
              {exp.projects.map((proj, j) => (
                <li key={j} className="mb-2">
                  <span className="font-semibold text-accent">
                    {proj.name}:
                  </span>{" "}
                  {proj.description}
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      ))}
    </div>
  </section>
);

export default Experience;
