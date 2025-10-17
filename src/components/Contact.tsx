import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";

const Contact = () => (
  <section id="contact" className="py-20 px-6 text-center">
    {/* Title */}
    <motion.h3
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-3xl font-semibold mb-6"
    >
      Get In Touch
    </motion.h3>

    {/* Subtext */}
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.7 }}
      className="text-gray-300 max-w-xl mx-auto mb-10 leading-relaxed"
    >
      Follow me on social media or reach out directly. I'm always excited to
      discuss new opportunities, collaborations, and creative ideas.
    </motion.p>

    {/* Social Icons */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="flex justify-center gap-6 text-3xl mb-10" // ✅ added margin bottom
    >
      <a
        href="https://github.com/Basha-Murali"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/murali-basha-5b5586225/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://x.com/MuraliBasha"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition"
      >
        <FaXTwitter />
      </a>

      <a
        href="mailto:muralibasha33@gmail.com"
        className="hover:text-accent transition"
      >
        <FaEnvelope />
      </a>
    </motion.div>

    {/* Divider line with green accent */}
    <div className="w-24 h-[2px] bg-white/50 mx-auto mb-8" />

    {/* Quick Info */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-10 text-sm text-gray-300 space-y-3"
    >
      <p>
        📍{" "}
        <span className="font-medium text-white">
          Based in{" "}
          <span className="text-accent font-medium">
            <a
              href="https://www.google.com/maps/place/Hyderabad,+Telangana,+India"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hyderabad
            </a>
          </span>{" "}
          , India
        </span>
      </p>
      <p>
        💻{" "}
        <span className="font-medium text-white">
          Ready to contribute to high-growth tech teams
        </span>
      </p>
      <p>
        ⚡ <span className="font-medium text-white">Response time:</span>{" "}
        typically within 24–48 hours
      </p>
    </motion.div>
  </section>
);

export default Contact;
