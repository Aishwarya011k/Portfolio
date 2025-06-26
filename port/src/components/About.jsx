import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGithub,
  FaCss3Alt,
  FaHtml5,
  FaJs,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiOpenai } from "react-icons/si";

const majorSkills = [
  { name: "React.js", level: 90, icon: <FaReact /> },
  { name: "Node.js / Express", level: 70, icon: <FaNodeJs /> },
  { name: "MongoDB", level: 60, icon: <SiMongodb /> },
  { name: "Python / ML", level: 55, icon: <FaPython /> },
  { name: "OpenAI / APIs", level: 60, icon: <SiOpenai /> },
];

const About = () => {
  return (
    <section id="about" className="relative px-6 py-24 text-white">
      <div className="max-w-5xl mx-auto space-y-14">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-yellow-300 mb-2">
            💼 About Me
          </h2>
          <p className="text-white/70 text-lg">Crafting Interfaces. Infusing Intelligence.</p>
        </motion.div>

        {/* Main Bio Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-lg space-y-6 text-base sm:text-lg leading-relaxed text-white/90 hover:shadow-yellow-300/20 transition-all"
        >
          <p>
            Hello, I'm <span className="text-yellow-300 font-semibold">Aishwarya D</span>, a passionate frontend developer exploring the full-stack ecosystem and artificial intelligence.
          </p>

          <p>
            With a strong foundation in React.js and modern frontend tools, I focus on crafting seamless user experiences that are clean, interactive, and high-performing. My development journey has always revolved around using design and logic to solve real-world problems through thoughtful, responsive interfaces.
          </p>

          <p>
            As I grow, I’ve become fascinated by the intersection of frontend development and AI — where interfaces don’t just display information, but intelligently respond to users. I’m actively learning machine learning, natural language processing, and backend systems to build smarter, adaptive web apps.
          </p>

          <p>
            I’m a project-first learner: every new concept I pick up gets turned into a prototype, experiment, or app. Whether it’s a dashboard that understands your needs or a full-stack tool powered by an AI model, I love building things that matter.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-bold text-yellow-300 text-center">🛠️ Core Stack</h3>

          <div className="grid sm:grid-cols-2 gap-6">
            {majorSkills.map((skill, i) => (
              <div
                key={i}
                className="space-y-1 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex justify-between items-center text-sm text-white/80">
                  <span className="flex items-center gap-2">
                    <span className="text-yellow-300 text-lg">{skill.icon}</span>
                    {skill.name}
                  </span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full">
                  <div
                    className="h-2 rounded-full bg-yellow-300"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
