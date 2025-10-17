import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("+918309014761");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="contact" className="py-20 px-6 text-center">
      {/* ✅ Title */}
      <motion.h3
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold mb-6"
      >
        Get In Touch
      </motion.h3>

      {/* ✅ Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-gray-300 max-w-xl mx-auto mb-10 leading-relaxed"
      >
        Follow me on social media or reach out directly. I'm always excited to
        discuss new opportunities, collaborations, and creative ideas.
      </motion.p>

      {/* ✅ Social Icons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex justify-center gap-6 text-3xl"
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

      {/* ✅ Divider line with white or gray accent */}
      <div className="w-24 h-[2px] bg-gray-500 dark:bg-gray-300 mx-auto my-10 rounded-full" />
      {/* ✅ Quick Info + Quick Connect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-10 text-sm text-gray-300 space-y-3"
      >
        {/* Location */}
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
            </span>
            , India
          </span>
        </p>

        {/* Role */}
        <p>
          💻{" "}
          <span className="font-medium text-white">
            Ready to contribute to high-growth tech teams
          </span>
        </p>

        {/* Quick Connect */}
        <p className="flex items-center justify-center gap-4 flex-wrap relative">
          ⚡ <span className="font-medium text-white">Quick Connect:</span>{" "}
          <a
            href="tel:+918309014761"
            className="text-accent hover:text-[#3C873A] flex items-center gap-1"
          >
            📞 Call
          </a>
          <span className="text-gray-400">|</span>
          {/* Copyable Number */}
          <button
            onClick={handleCopy}
            className="text-white font-medium select-text hover:text-[#3C873A] transition"
          >
            +91&nbsp;83090&nbsp;14761
          </button>
          {/* Copy Feedback */}
          {copied && (
            <motion.span
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: -10 }}
              exit={{ opacity: 0 }}
              className="absolute -top-6 right-0 text-xs text-[#3C873A] font-medium"
            >
              Copied!
            </motion.span>
          )}
          <span className="text-gray-400">|</span>
          <a
            href="https://wa.me/918309014761"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-[#3C873A] flex items-center gap-1"
          >
            💬 WhatsApp
          </a>
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
