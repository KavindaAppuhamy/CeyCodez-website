import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ isScrolled, activeSection, smoothScrollTo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "HOME", id: "hero" },
    { name: "ABOUT", id: "about" },
    { name: "SERVICES", id: "services" },
    { name: "PACKAGES", id: "packages" },
    { name: "PORTFOLIO", id: "portfolio" },
    { name: "CONTACT", id: "contact" },
    { name: "FAQs", id: "faqs" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/60 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img src="/CeyCodez_Logo.png" alt="Logo" className="w-12 h-12" />
          <img src="/CeyCodez_name.png" alt="Name" className="w-40" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => smoothScrollTo(item.id)}
              className={`font-semibold tracking-wide relative pb-2 transition-colors duration-300 ${
                activeSection === item.id
                  ? "text-cyan-400"
                  : "text-white hover:text-cyan-400"
              }`}
            >
              {item.name}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-400 rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-black/40 backdrop-blur-md rounded-b-xl">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                smoothScrollTo(item.id);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left py-2 font-semibold transition-colors duration-300 ${
                activeSection === item.id
                  ? "text-cyan-400"
                  : "text-white hover:text-cyan-400"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
