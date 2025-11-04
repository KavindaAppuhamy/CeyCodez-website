import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What services do you offer?",
    a: "We provide full-stack web and mobile app development, UI/UX design, and multimedia solutions.",
  },
  {
    q: "Can you help with university projects?",
    a: "Yes! We specialize in helping students with assignments, final-year projects, and research systems.",
  },
  {
    q: "Do you provide ongoing maintenance?",
    a: "Absolutely — we offer support and updates for all completed projects.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 text-white relative overflow-hidden">
      {/* Title */}
      <div className="text-center mb-14">
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          FAQs
        </h2>
        <p className="text-cyan-400/80 text-lg md:text-xl mt-3">
          Everything you need to know about our services
        </p>
      </div>

      {/* FAQ Container */}
      <div className="max-w-3xl w-full space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`group border border-cyan-400/30 bg-gray-900/70 backdrop-blur-md rounded-2xl transition-all duration-300 shadow-[0_0_20px_-8px_#06b6d4] hover:shadow-[0_0_25px_-5px_#06b6d4] ${
              openIndex === index ? "border-cyan-400" : "hover:border-cyan-400"
            }`}
          >
            <button
              className="w-full flex justify-between items-center p-6 text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h3 className="text-lg md:text-xl font-semibold tracking-wide">
                {faq.q}
              </h3>
              <ChevronDown
                size={26}
                className={`text-cyan-400 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="px-6 pb-6 text-gray-300 text-base md:text-lg leading-relaxed">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Subtle Glow Element (Optional visual depth) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-gray-900/40 to-gray-950"></div>
    </section>
  );
};

export default FAQs;
