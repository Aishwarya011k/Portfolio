import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaQuoteLeft } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactSection = () => {
  const formRef = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
     .sendForm(
        "service_mdc4f38",     // 🔁 Replace with your EmailJS service ID
        "template_5a1yu0b",    // 🔁 Replace with your EmailJS template ID
        formRef.current,
        "zSMQbdDSAnIxY3lWn"      // 🔁 Replace with your EmailJS public key
      )
      .then(
        () => {
          setIsSubmitted(true);
          formRef.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-6 bg-transparent text-white">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-yellow-300 mb-8"
      >
        🤝 Let's Connect
      </motion.h2>

      <p className="text-center max-w-2xl mx-auto text-white/80 mb-12">
        Whether you have a question, want to collaborate, or just want to say hi —
        my inbox is always open.
      </p>

      {/* Form or Thank You */}
      <div className="max-w-2xl mx-auto">
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 bg-white/5 p-8 rounded-2xl shadow-xl border border-white/10"
          >
            <h3 className="text-2xl font-bold text-yellow-300">Thank you! 🎉</h3>
            <p className="text-white/80">
              Your message has been sent successfully. I'll get back to you soon via email!
            </p>
          </motion.div>
        ) : (
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block text-sm text-white/70 mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm text-white/70 mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm text-white/70 mb-1">Message</label>
              <textarea
                name="message"
                rows="5"
                required
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
        )}
      </div>

      {/* Contact Info */}
      <div className="mt-16 space-y-6 max-w-xl mx-auto">
        <div className="flex items-center gap-4 justify-center">
          <FaEnvelope className="text-yellow-300 text-xl" />
          <a href="mailto:aishwaryadshetty019@gmail.com" className="text-white/90">
            aishwaryadshetty019@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-4 justify-center">
          <FaLinkedin className="text-yellow-300 text-xl" />
          <a
            href="https://www.linkedin.com/in/aishwarya-d-963867341"
            target="_blank"
            rel="noreferrer"
            className="text-white/90"
          >
            LinkedIn
          </a>
        </div>
        <div className="flex items-center gap-4 justify-center">
          <FaGithub className="text-yellow-300 text-xl" />
          <a
            href="https://github.com/Aishwarya011k"
            target="_blank"
            rel="noreferrer"
            className="text-white/90"
          >
            GitHub
          </a>
        </div>
        <div className="flex items-center gap-4 justify-center">
          <FaXTwitter className="text-yellow-300 text-xl" />
          <a
            href="https://x.com/AishwaryaD3164"
            target="_blank"
            rel="noreferrer"
            className="text-white/90"
          >
            X (Twitter)
          </a>
        </div>
      </div>

      {/* Footer With Quote */}
      <footer className="mt-20 pt-10 border-t border-white/10 text-center space-y-6 text-white">
        <div className="text-yellow-300 text-xl flex justify-center items-center gap-2 font-medium italic">
          <FaQuoteLeft />
          <span>“Build beautifully. Think boldly. Learn endlessly.”</span>
        </div>

        <div className="flex justify-center gap-6 pt-4">
          <a
            href="https://github.com/Aishwarya011k"
            target="_blank"
            rel="noreferrer"
            className="text-yellow-300 text-xl hover:text-yellow-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/aishwarya-d-963867341"
            target="_blank"
            rel="noreferrer"
            className="text-yellow-300 text-xl hover:text-yellow-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:aishwaryadshetty019@gmail.com"
            className="text-yellow-300 text-xl hover:text-yellow-400 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://x.com/AishwaryaD3164"
            target="_blank"
            rel="noreferrer"
            className="text-yellow-300 text-xl hover:text-yellow-400 transition"
          >
            <FaXTwitter />
          </a>
        </div>

        <p className="text-yellow-300 font-semibold text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="underline underline-offset-4">Designed by Aishwarya D</span> · Built with 💛 using React, Tailwind & AI
        </p>
      </footer>
    </section>
  );
};

export default ContactSection;
