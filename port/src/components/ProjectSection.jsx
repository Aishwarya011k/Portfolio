import React from "react";
import { motion } from "framer-motion";
import { project } from "../data/project";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-transparent">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-yellow-300 mb-16"
      >
        My Projects 💡
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {project.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6 shadow-2xl space-y-4 hover:shadow-yellow-300/20 transition-all"
          >
            {/* Project Title */}
            <div className="text-xl font-semibold text-yellow-200">
              {project.title}
            </div>

            {/* Description */}
            <p className="text-white/80 text-sm">{project.description}</p>

            {/* Optional bullet details */}
            {project.details && (
              <ul className="text-white/70 text-sm list-disc list-inside space-y-1">
                {project.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-yellow-400/20 text-yellow-100 px-3 py-1 rounded-full text-xs tracking-wide"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 pt-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm px-4 py-2 border border-white/30 rounded-full text-white hover:bg-white/10 transition"
                >
                  <FaGithub /> Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm px-4 py-2 bg-yellow-300 text-black rounded-full hover:bg-yellow-400 transition"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
