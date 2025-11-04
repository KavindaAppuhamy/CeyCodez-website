import React from "react";
import { Code, Server, CloudUpload, Palette, Database, Layers } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code size={42} />,
      title: "Front-End Development",
      desc: "User-friendly and visually appealing web interfaces using React and Tailwind Css",
    },
    {
      icon: <Server size={42} />,
      title: "Back-End Development",
      desc: "Robust and secure server-side systems built for scalability, APIs, and database integration.",
    },
    {
      icon: <Database size={42} />,
      title: "Database Management",
      desc: "Creating and managing efficient and secure database management systems for storing and retrieving data efficiently.",
    },
    {
      icon: <CloudUpload size={42} />,
      title: "Cloud Deployment",
      desc: "Deploying and maintaining applications on cloud platforms for optimal performance and scalability.",
    },
    {
      icon: <Palette size={42} />,
      title: "UI/UX Design",
      desc: "Beautiful, intuitive interfaces that deliver a premium user experience across all devices.",
    },
    {
      icon: <Layers size={42} />,
      title: "Multimedia Projects",
      desc: "Creative digital branding, video editing, and visual storytelling for your brand identity.",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 py-16 sm:py-20 from-gray-950 via-slate-900 to-gray-950 text-white overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(34,211,238,0.4)]">
          Our Services
        </h2>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl font-light max-w-3xl mx-auto">
          We combine creativity and technology to deliver smart, future-ready digital solutions.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative bg-gray-900/60 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 sm:p-10 text-center transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] hover:-translate-y-2"
          >
            {/* Icon Container */}
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full border-2 border-cyan-400 bg-cyan-400/10 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]">
                <div className="text-cyan-400">{service.icon}</div>
              </div>
            </div>

            {/* Title & Description */}
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-cyan-400 tracking-wide">
              {service.title}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {service.desc}
            </p>

            {/* Glow Accent */}
            <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-cyan-400/50 transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
