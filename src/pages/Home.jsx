import React, { useState, useEffect } from "react";
import AnimatedBackground from "../components/AnimatedBackground";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Services from "../components/Services";
import Packages from "../components/Packages";
import Portfolio from "../components/PortfolioSection"; // ✅ Add this import
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Hero from "../components/HeroSection";

const Home = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollUp, setShowScrollUp] = useState(false);

  // Smooth scroll to section
  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Adjust for navbar height
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  // Specific function to scroll to packages
  const scrollToPackages = () => {
    smoothScrollTo("packages");
  };

  // Scroll effect for navbar and section tracking
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 100);

          const sections = document.querySelectorAll("section[id]");
          let current = "hero";

          sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              current = section.id;
            }
          });

          setActiveSection(current);

          const aboutSection = document.getElementById("about");
          if (aboutSection) {
            setShowScrollUp(window.scrollY > aboutSection.offsetTop);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    document.documentElement.style.scrollBehavior = "smooth";
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-white relative overflow-x-hidden">
      <AnimatedBackground />

      {/* Navbar */}
      <Navbar
        isScrolled={isScrolled}
        activeSection={activeSection}
        smoothScrollTo={smoothScrollTo}
      />

      {/* Page Sections */}
      <section id="hero" className="scroll-mt-20">
        <Hero scrollToPackages={scrollToPackages} />
      </section>

      <section id="about" className="scroll-mt-20">
        <About />
      </section>

      <section id="services" className="scroll-mt-20">
        <Services />
      </section>

      {/* ✅ Add Portfolio Section */}
      <section id="portfolio" className="scroll-mt-20">
        <Portfolio />
      </section>

      <section id="packages" className="scroll-mt-20">
        <Packages />
      </section>

      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>

      <section id="faqs" className="scroll-mt-20">
        <FAQs />
      </section>

      <Footer />

      {/* Scroll-Up Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center 
        rounded-full bg-cyan-400 text-black text-xl font-bold shadow-lg 
        transition-all duration-500 z-[9999] 
        ${showScrollUp
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        ↑
      </button>

      {/* Custom Scrollbar Styling */}
      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #00ffff80, #00bcd480);
          border-radius: 10px;
        }
        ::-webkit-scrollbar-track {
          background: #0f172a;
        }
      `}</style>
    </div>
  );
};

export default Home;