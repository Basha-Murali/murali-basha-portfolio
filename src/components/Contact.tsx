// import React from "react";
// import { motion } from "framer-motion";
// import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"; // ✅ uses react-icons

// const Contact = () => (
//   <section id="contact" className="py-20 px-6 text-center">
//     <motion.h3
//       initial={{ scale: 0.8, opacity: 0 }}
//       whileInView={{ scale: 1, opacity: 1 }}
//       transition={{ duration: 0.6 }}
//       className="text-3xl font-semibold mb-8"
//     >
//       Get In Touch
//     </motion.h3>

//     <motion.p
//       initial={{ scale: 0.8, opacity: 0 }}
//       whileInView={{ scale: 1, opacity: 1 }}
//       transition={{ delay: 0.3, duration: 0.6 }}
//       className="text-gray-400 mb-6"
//     >
//       Let’s connect and build something amazing together 🚀
//     </motion.p>

//     {/* ✅ Contact Buttons */}
//     <div className="flex justify-center gap-6 mb-8">
//       <motion.a
//         href="https://github.com/Basha-Murali"
//         target="_blank"
//         rel="noopener noreferrer"
//         whileHover={{ scale: 1.2 }}
//         className="text-accent hover:text-white text-3xl transition"
//       >
//         <FaGithub />
//       </motion.a>

//       <motion.a
//         href="https://www.linkedin.com/in/murali-basha-5b5586225/"
//         target="_blank"
//         rel="noopener noreferrer"
//         whileHover={{ scale: 1.2 }}
//         className="text-accent hover:text-white text-3xl transition"
//       >
//         <FaLinkedin />
//       </motion.a>

//       <motion.a
//         href="https://x.com/MuraliBasha" // replace with your handle
//         target="_blank"
//         rel="noopener noreferrer"
//         whileHover={{ scale: 1.2 }}
//         className="text-accent hover:text-white text-3xl transition"
//       >
//         <FaXTwitter />
//       </motion.a>
//     </div>

//     {/* ✅ Email Button */}
//     <motion.a
//       href="mailto:muralibasha33@gmail.com"
//       initial={{ scale: 0.8, opacity: 0 }}
//       whileInView={{ scale: 1, opacity: 1 }}
//       transition={{ delay: 0.6, duration: 0.6 }}
//       className="bg-accent hover:bg-green-600 px-6 py-3 rounded-md text-white transition"
//     >
//       Say Hello
//     </motion.a>
//   </section>
// );

// export default Contact;
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
      className="flex justify-center gap-6 text-3xl"
    >
      <a
        href="https://github.com/iamroh192"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/muralibasha33"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://x.com/muralibasha33"
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
  </section>
);

export default Contact;
