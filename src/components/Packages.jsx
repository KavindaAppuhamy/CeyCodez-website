import React, { useRef } from "react";

const Packages = () => {
  const packagesRef = useRef(null);

  return (
    <section 
      ref={packagesRef}
      className="min-h-screen py-20 sm:py-20 flex flex-col justify-center relative text-white  from-gray-950 via-slate-900 to-gray-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]">
            Full-Stack Development
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-gray-400 font-semibold">
            Packages & Pricing
          </h3>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {/* ===== Basic Package ===== */}
          <div className="relative group bg-gray-900/60 backdrop-blur-md border border-cyan-500/30 rounded-2xl overflow-hidden transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:-translate-y-2">
            <div className="p-8 sm:p-10">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-cyan-400">
                BASIC PACKAGE
              </h3>
              <p className="text-sm text-gray-400 mb-6">STARTER WEBSITE</p>
              <div className="mb-8">
                <span className="text-5xl sm:text-6xl font-bold text-cyan-400">
                  $100
                </span>
                {/* <span className="text-gray-400 text-lg">/month</span> */}
              </div>
              <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
                <li>✓ 1–5 static or dynamic pages</li>
                <li>✓ Responsive UI (React + Tailwind)</li>
                <li>✓ Basic backend (Node.js)</li>
                <li>✓ MongoDB/MySQL integration</li>
                <li>✓ Contact form</li>
                <li>✓ Deployment on low-cost hosting</li>
              </ul>
            </div>
          </div>

          {/* ===== Standard Package ===== */}
          <div className="relative group bg-gray-900/60 backdrop-blur-md border border-cyan-500/30 rounded-2xl overflow-hidden transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:-translate-y-2">
            <div className="p-8 sm:p-10">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-cyan-400">
                STANDARD PACKAGE
              </h3>
              <p className="text-sm text-gray-400 mb-6">BUSINESS WEB APP</p>
              <div className="mb-8">
                <span className="text-5xl sm:text-6xl font-bold text-cyan-400">
                  $295
                </span>
                {/* <span className="text-gray-400 text-lg">/month</span> */}
              </div>
              <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
                <li>✓ Up to 10–12 pages/modules</li>
                <li>✓ Full CRUD operations</li>
                <li>✓ Secure authentication (JWT)</li>
                <li>✓ API integration</li>
                <li>✓ Database design & optimization</li>
                <li>✓ Deployment with domain & SSL</li>
                <li>✓ 1-month free maintenance</li>
              </ul>
            </div>
          </div>

          {/* ===== Premium Package ===== */}
          <div className="relative group bg-gray-900/60 backdrop-blur-md border border-cyan-400 rounded-2xl .overflow-visible transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]">
            <div className="absolute -top-4 right-6 bg-cyan-400 text-black px-5 py-1.5 font-bold text-sm rounded shadow-md">
              PREMIUM
            </div>
            <div className="p-8 sm:p-10">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-cyan-400">
                PREMIUM PACKAGE
              </h3>
              <p className="text-sm text-gray-400 mb-6">
                ADVANCED PROJECT SUITE
              </p>
              <div className="mb-8">
                <span className="text-5xl sm:text-6xl font-bold text-cyan-400">
                  $522
                </span>
                {/* <span className="text-gray-400 text-lg">/month</span> */}
              </div>
              <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
                <li>✓ Scalable architecture (MERN)</li>
                <li>✓ Admin panel with analytics</li>
                <li>✓ Advanced file uploads & backend updates</li>
                <li>✓ 3-month maintenance (Cloud/DigitalOcean)</li>
                <li>✓ Full documentation & code handover</li>
                <li>✓ Priority technical support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
