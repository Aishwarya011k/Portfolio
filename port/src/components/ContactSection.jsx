import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-transparent text-white">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-yellow-300 mb-4"
      >
        🤝 Let's Connect
      </motion.h2>

      <p className="text-center max-w-2xl mx-auto text-white/80 mb-12">
        Whether you have a question, want to collaborate, or just want to say hi —
        my inbox is always open. Fill out the form below and I’ll get back to you!
      </p>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto">
        <form className="space-y-6">
          <div>
            <label className="block text-sm text-white/70 mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm text-white/70 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm text-white/70 mb-1">Message</label>
            <textarea
              rows="5"
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button
  type="submit"
  className="bg-yellow-300 text-black px-6 py-2 rounded-full hover:bg-yellow-400 transition font-semibold"
>
  Send Message
</button>

        </form>
      </div>
    </section>
  );
};

export default ContactSection;
