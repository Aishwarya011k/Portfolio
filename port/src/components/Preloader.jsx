import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png"; // Replace with your actual logo

const Preloader = ({ onFinish }) => {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExit(true);
      setTimeout(onFinish, 1000); // Wait for animation to finish
    }, 2000); // Duration before transition
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!exit && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-purple-800 via-pink-600 to-orange-500"
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 3, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={logo}
            alt="Logo"
            className="w-32 h-32 object-contain"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
