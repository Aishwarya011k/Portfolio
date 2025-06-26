import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Events", href: "#events" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 text-white">
        <div className="flex items-center gap-2">
           <img src={logo} alt="Logo" className="h-12 w-20 object-contain" />
           
         </div>


        {/* Desktop Links */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition ${
                link.name === "About"
                  ? "text-white hover:text-yellow-300"
                  : "text-blue-300 hover:text-yellow-300"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 py-4 bg-white/10 backdrop-blur-lg space-y-4 text-white">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block text-lg transition ${
                link.name === "About"
                  ? "text-white hover:text-yellow-300"
                  : "text-blue-300 hover:text-yellow-300"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;

