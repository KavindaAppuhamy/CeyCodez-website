import React, { useRef } from "react";

const About = () => {
  const aboutRef = useRef(null);

  return (
    <section
      ref={aboutRef}
      className="min-h-screen py-16 sm:py-20 md:py-24 flex flex-col justify-center relative text-white from-gray-950 via-slate-900 to-gray-950 overflow-hidden px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(34,211,238,0.4)]">
            About Us
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light">
            Decoding the Future of Technology, Together.
          </p>
        </div>

        {/* Mission + Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mb-20">
          {/* Our Mission */}
          <div className="relative bg-gray-900/60 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]">
            <div className="flex items-start space-x-4 sm:space-x-5">
              <div className="p-3 sm:p-4 border-2 border-cyan-400 bg-cyan-400/10 rounded-xl flex-shrink-0">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-cyan-400">
                  OUR MISSION
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  At{" "}
                  <span className="text-cyan-400 font-semibold">CeyCodez</span>,
                  our mission is to empower students and startups by providing
                  them with the tools, systems, and guidance to bring their ideas
                  to life — from concept to execution.
                </p>
              </div>
            </div>
          </div>

          {/* Our Vision */}
          <div className="relative bg-gray-900/60 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]">
            <div className="flex items-start space-x-4 sm:space-x-5">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-cyan-400">
                  OUR VISION
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  We envision a future where creativity and technology seamlessly
                  connect — enabling young innovators to transform academic and
                  entrepreneurial ideas into impactful real-world solutions.
                </p>
              </div>
              <div className="p-3 sm:p-4 border-2 border-cyan-400 bg-cyan-400/10 rounded-xl flex-shrink-0">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Meet Our Team */}
        <div className="relative bg-gray-900/60 backdrop-blur-md border border-cyan-500/30 rounded-2xl py-12 sm:py-16 px-4 sm:px-8 transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] text-center">
          <h3 className="text-3xl sm:text-4xl font-bold mb-10 text-cyan-400 tracking-tight">
            MEET OUR TEAM
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
            {[
              {
                name: "Kavinda Appuhamy",
                role: "Founder & Fullstack Software Engineer",
                image: "/Kavinda.png", // 👈 your image path
              },
              {
                name: "Dhananjaya Perera",
                role: "Fullstack Software Engineer",
                image: "/Dhana.png",
              },
              {
                name: "Thamalu Amarasinhe",
                role: "Fullstack Software Engineer",
                image: "/Thamalu.png",
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="group text-center transition-all duration-300 hover:scale-105"
              >
                <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-5 rounded-full border-4 border-cyan-400 overflow-hidden shadow-[0_0_20px_rgba(34,211,238,0.2)] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h4 className="font-semibold text-base sm:text-lg mb-1 text-white">
                  {member.name}
                </h4>
                <p className="text-xs sm:text-sm text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
