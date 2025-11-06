import React, { useState, useRef, useEffect } from "react";
import { ExternalLink, Github, X } from "lucide-react";

// ✅ Portfolio Data
const projects = [
  {
    title: "LCCG Official Website",
    subtitle: "The Official Website of Leo Club of Cinnamon Gardens Colombo.",
    category: "Web Development",
    desc: "Developed a dynamic and responsive website for the Leo Club of Cinnamon Gardens Colombo (LCCG) using the MERN stack. The platform showcases the club's activities, events, and community services while enabling members and visitors to engage with the club more effectively.",
    tech: "MERN Stack (MongoDB, Express.js, React.js, Node.js)",
    status: "Deployed",
    // frontend: "https://github.com/KavindaAppuhamy/Project-LCCG-Frontend",
    // backend: "https://github.com/KavindaAppuhamy/Project-LCCG-Backend",
    demo: "https://cinnamonleos.org",
    gradient: "from-cyan-400 via-blue-500 to-cyan-600",
    image: "/Project_Images/LCCG.png",
  },
];

// ✅ Categories
const categories = ["All", "Enterprise", "Web Development", "Desktop App", "Mobile App"];

// ✅ Intersection Animation Hook
const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setIsVisible(true);
        setHasAnimated(true);
      }
    }, { threshold: 0.1, rootMargin: "-50px 0px", ...options });

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => currentRef && observer.unobserve(currentRef);
  }, [hasAnimated, options]);

  return [ref, isVisible];
};

const AnimatedItem = ({ children, delay = 0, className = "" }) => {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
};

// ✅ Project Detail Modal (kept same, with cyan tweaks)
const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative bg-gray-900/90 rounded-2xl max-w-4xl mx-4 max-h-[90vh] overflow-y-auto border border-cyan-500/40 shadow-[0_0_25px_rgba(34,211,238,0.3)]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-gray-800 hover:bg-gray-700 text-cyan-400 hover:text-white rounded-full transition-colors duration-300"
        >
          <X size={20} />
        </button>

        <div className="aspect-[2/1] overflow-hidden rounded-t-2xl">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>

        <div className="p-8">
          <h2 className="text-3xl font-bold text-cyan-400 mb-2">{project.title}</h2>
          <p className="text-lg text-gray-300 mb-4">{project.subtitle}</p>

          <h3 className="text-cyan-400 font-semibold mb-2">Technology Stack</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.split(",").map((t, i) => (
              <span key={i} className="px-3 py-1.5 bg-gray-800 text-cyan-300 rounded-lg text-sm">
                {t.trim()}
              </span>
            ))}
          </div>

          <p className="text-gray-300 mb-6 leading-relaxed">{project.desc}</p>

          <div className="flex flex-wrap gap-4">
            {project.frontend && (
              <a
                href={project.frontend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-cyan-400 text-white hover:text-black rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                <Github size={18} />
                Frontend Code
              </a>
            )}
            {project.backend && (
              <a
                href={project.backend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-cyan-400 text-white hover:text-black rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                <Github size={18} />
                Backend Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ Main Portfolio Section — Now with PACKAGES THEME
const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      className="min-h-screen py-20 sm:py-24  from-gray-950 via-slate-900 to-gray-950 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-3 bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]">
            Portfolio
          </h2>
          <p className="text-xl text-gray-400">Explore Our Featured Projects</p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 border-2 ${
                activeCategory === cat
                  ? "bg-cyan-400 text-black border-cyan-400 shadow-lg shadow-cyan-400/40"
                  : "border-cyan-500/30 text-gray-300 hover:border-cyan-400 hover:text-cyan-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredProjects.map((project, index) => (
            <AnimatedItem key={index} delay={index * 100}>
              <div
                className="group bg-gray-900/60 backdrop-blur-md border border-cyan-500/30 rounded-2xl overflow-hidden transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:-translate-y-2"
                onClick={() => {
                  setSelectedProject(project);
                  setIsModalOpen(true);
                }}
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{project.subtitle}</p>
                  <p className="text-gray-300 text-sm mb-6 line-clamp-2">
                    {project.desc}
                  </p>
                  <div className="text-cyan-400 text-sm font-medium">
                    {project.tech}
                  </div>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Portfolio;