import React from "react";
import { motion } from "framer-motion";

const myWork = [
  {
    title: "Springboard",
    company: "TRC Companies, Inc.",
    role: "Software Engineer (MERN Stack Developer)",
    duration: "Dec 2024 – Present",
    description:
      "Data management platform for spatial and nonspatial datasets. Built scalable REST APIs using Node.js and MongoDB, implemented QA/QC workflows via OpenRules, and developed data dashboards in React.js.",
    tech: ["React.js", "Node.js", "MongoDB", "OpenRules"],
    image: "public/work/springboard.png",
  },
  {
    title: "AG&P Gas Project",
    company: "TRC Companies, Inc.",
    role: "Associate Software Engineer (Backend Developer)",
    duration: "May 2022 – Dec 2024",
    description:
      "Developed RESTful API services using Node.js and MongoDB for LNG infrastructure workflows. Improved query performance, reduced latency by 20%, and collaborated with frontend teams for smooth integration.",
    tech: ["Node.js", "Express", "MongoDB"],
    image: "/work/agp.png",
  },
  {
    title: "FieldOn",
    company: "TRC Companies, Inc.",
    role: "Software Engineer Trainee (Backend Developer Trainee)",
    duration: "Dec 2021 – May 2022",
    description:
      "Built an admin web portal for ticket management with multi-tenant support. Created robust REST APIs, improved backend efficiency, and reduced production issues by 40% through QA automation.",
    tech: ["Javascript", "Node.js", "REST API"],
    image: "public/work/fieldon.png",
  },
  {
    title: "DevTinder",
    // company: "Personal Project",
    // role: "MERN Stack Developer",
    // duration: "2023 – Present",
    description:
      "A social matching web application built with the MERN stack. Includes JWT authentication, real-time friend requests, and dynamic UI components with React & Tailwind CSS.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "JWT"],
    // image: "public/work/devtinder.png",
    // codeLink: "https://github.com/iamroh192/dev_tinder", // 👈 your GitHub repo here
  },
];

const MyWork = () => (
  <section id="projects" className="py-20 px-6 text-center">
    <motion.h3
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-3xl font-semibold mb-8"
    >
      Projects
    </motion.h3>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
      {myWork.map((work, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          whileHover={{
            scale: 1.03,
            boxShadow: "0px 0px 20px rgba(60, 135, 58, 0.5)",
          }}
          transition={{ duration: 0.3 }}
          className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-md transition transform hover:-translate-y-1"
        >
          {/* Project Details */}
          <div className="p-5 text-left">
            <h4 className="text-accent text-xl font-bold mb-1">{work.title}</h4>

            {/* Role + Duration Line (clean inline layout, never breaks weirdly) */}
            {(work.role || work.duration) && (
              <p className="text-gray-400 text-sm mb-1 flex flex-wrap items-center gap-x-2">
                {work.role && (
                  <span className="whitespace-normal break-words">
                    {work.role}
                  </span>
                )}
                {work.role && work.duration && (
                  <span className="inline-block text-gray-500"></span>
                )}
                {work.duration && (
                  <span className="whitespace-nowrap">{work.duration}</span>
                )}
              </p>
            )}

            <p className="text-gray-300 text-sm mb-3 leading-relaxed">
              {work.description}
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {work.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* ✅ View Code Button (if available) */}
            {/* {work.codeLink && (
    <a
      href={work.codeLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-4 text-accent underline text-sm hover:text-green-400 transition"
    >
      View Code →
    </a>
  )} */}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default MyWork;
