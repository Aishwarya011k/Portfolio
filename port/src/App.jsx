import React from "react";
import { useState } from "react";
import Preloader from "./components/Preloader";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ProjectSection from "./components/ProjectSection";
import EventSection from "./components/EventSection";
import ContactSection from "./components/ContactSection";

const App = () => {
   const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Preloader onFinish={() => setLoading(false)} />
      ) :
  (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-purple-800 via-pink-600 to-orange-500">
      {/* Optional Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob top-0 left-0" />
        <div className="absolute w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 top-32 left-1/2" />
        <div className="absolute w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 top-64 right-0" />
      </div>

      {/* Sections */}
      <Navbar />
      <Hero />
      <About />
      <ProjectSection />
      <EventSection />
      <ContactSection />
    
      {/* Footer */}
    </div>
   )}
    </>
  );
;}
export default App;