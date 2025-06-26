import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-transparent text-white py-14 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6">
        {/* Social Icons */}
        <div className="flex gap-8">
          <a
            href="https://github.com/Aishwarya011k"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 text-2xl hover:scale-110 hover:text-yellow-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/aishwarya-d-963867341"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 text-2xl hover:scale-110 hover:text-yellow-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:aishwaryadshetty019@gmail.com"
            className="text-yellow-300 text-2xl hover:scale-110 hover:text-yellow-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Footer Text */}
        <div className="text-white text-base font-medium space-y-1 leading-relaxed">
          <p>© {new Date().getFullYear()} Aishwarya D</p>
          <p className="text-white/90">
            Designed with 💛 using <span className="text-yellow-300">React</span>,{" "}
            <span className="text-yellow-300">Tailwind</span>, and{" "}
            <span className="text-yellow-300">Framer Motion</span>
          </p>
          <p className="text-white/70 text-sm">Bengaluru, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
