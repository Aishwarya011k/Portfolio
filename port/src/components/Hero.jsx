import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { photo } from "../assets";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen w-screen px-4 py-20">
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob top-10 left-10"
        animate={{ x: 30, y: 20 }}
        transition={{ repeat: Infinity, duration: 6, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob top-20 right-10"
        animate={{ x: -20, y: 30 }}
        transition={{ repeat: Infinity, duration: 8, repeatType: "reverse" }}
      />

      {/* Hero Card */}
      <div className="relative z-10 w-full max-w-7xl bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-6 sm:p-10 md:p-16 flex flex-col md:flex-row items-center gap-10 transition-all duration-500 hover:ring-2 hover:ring-yellow-300 hover:bg-white/5 hover:opacity-90">
        {/* Profile Image */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-105 hover:shadow-yellow-300/30 transition-all duration-500"
        >
          <img
            src={photo}
            alt="Aishwarya D"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <div className="text-center md:text-left flex-1 text-white space-y-5">
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
          >
            Hello, I’m <span className="text-yellow-300">Aishwarya D</span>
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white/90 text-base sm:text-lg md:text-xl"
          >
            A frontend enthusiast pushing boundaries where <br /> sleek React experiences meet the power of AI.
            Currently diving deep into machine <br /> learning and backend development to build the future of smart,<br /> responsive web apps.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-sm text-white/60 italic"
          >
            “Crafting Interfaces. Infusing Intelligence.”
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-wrap justify-center md:justify-start gap-4 pt-2"
          >
            <a
              href="/Aishwarya_Resume.pdf"
              download
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-yellow-300 to-yellow-400 text-black font-semibold rounded-full shadow-md hover:shadow-yellow-400/50 transition-all duration-300 hover:-translate-y-1"
            >
              Download CV
            </a>

            <a
              href="/Aishwarya_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-700 hover:-translate-y-1 transition-all duration-300"
            >
              View Online
            </a>

            <a
              href="#contact"
              className="px-5 py-2.5 border border-yellow-300 text-yellow-300 font-semibold rounded-full hover:bg-yellow-300 hover:text-black hover:-translate-y-1 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="flex gap-6 pt-6 justify-center md:justify-start"
          >
            <a href="https://github.com/Aishwarya011k" target="_blank" rel="noreferrer">
              <Github className="w-6 h-6 transition-transform duration-300 hover:text-yellow-300 hover:scale-125" />
            </a>
            <a href="https://linkedin.com/in/aishwarya-d-963867341" target="_blank" rel="noreferrer">
              <Linkedin className="w-6 h-6 transition-transform duration-300 hover:text-yellow-300 hover:scale-125" />
            </a>
            <a href="mailto:aishwaryadshetty019@gmail.com">
              <Mail className="w-6 h-6 transition-transform duration-300 hover:text-yellow-300 hover:scale-125" />
            </a>
            <a href="https://x.com/AishwaryaD3164?t=RXjwr2EURgB2w1BWGPusKw" target="_blank" rel="noreferrer">
              <FaXTwitter className="w-6 h-6 transition-transform duration-300 hover:text-yellow-300 hover:scale-125" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
