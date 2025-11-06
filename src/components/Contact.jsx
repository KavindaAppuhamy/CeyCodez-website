import React, { useRef, useState, useEffect } from "react";
import { Mail, Phone, MapPin, Loader2, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState({});

  // ===== Intersection Observer for fade-in animations =====
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.dataset.animate]: true,
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const animatedElements =
      sectionRef.current?.querySelectorAll("[data-animate]");
    animatedElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // ===== EmailJS Configuration =====
  const emailJSConfig = {
    serviceID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  };

  // ===== Validation =====
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    const { user_name, user_email, message } = formData;

    if (!user_name.trim() || !user_email.trim() || !message.trim()) {
      toast.error("Please fill in all required fields.", {
        style: { background: "#ef4444", color: "#fff" },
        position: "top-center",
      });
      return false;
    }

    if (!validateEmail(user_email)) {
      toast.error("Please enter a valid email address!", {
        style: { background: "#ef4444", color: "#fff" },
        position: "top-center",
      });
      return false;
    }

    return true;
  };

  // ===== Handle Submit =====
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);

    try {
      await emailjs.send(
        emailJSConfig.serviceID,
        emailJSConfig.templateID,
        {
          from_name: formData.user_name,
          from_email: formData.user_email,
          phone: formData.user_phone,
          message: formData.message,
          to_email: "ceycodez.official@gmail.com",
        },
        emailJSConfig.publicKey
      );

      toast.success("Message sent successfully! 🚀", {
        style: { background: "#06b6d4", color: "#fff" },
        position: "top-center",
      });

      setFormData({
        user_name: "",
        user_email: "",
        user_phone: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again.", {
        style: { background: "#ef4444", color: "#fff" },
        position: "top-center",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // ===== Input Handler =====
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-20 px-6 flex flex-col justify-center text-white relative overflow-hidden"
    >
      <Toaster />

      {/* Section Header */}
      <div
        className={`text-center mb-16 transition-all duration-1000 ${
          isVisible.header
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
        data-animate="header"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]">
          Get In Touch
        </h2>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl font-light max-w-3xl mx-auto">
          Let’s build the future together.
        </p>
      </div>

      {/* Contact Grid */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 relative z-10">
        {/* Contact Form */}
        <div
          className={`relative bg-gray-900/70 backdrop-blur-md border border-cyan-500/40 rounded-2xl shadow-[0_0_30px_-10px_#06b6d4] hover:shadow-[0_0_40px_-5px_#06b6d4] transition-all p-8 sm:p-10 ${
            isVisible.form
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          data-animate="form"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-cyan-400">
            SEND MESSAGE
          </h3>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="Enter your name"
                value={formData.user_name}
                onChange={(e) =>
                  handleInputChange("user_name", e.target.value)
                }
                disabled={isLoading}
                className="w-full bg-gray-950/70 border border-gray-700 px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email"
                value={formData.user_email}
                onChange={(e) =>
                  handleInputChange("user_email", e.target.value)
                }
                disabled={isLoading}
                className="w-full bg-gray-950/70 border border-gray-700 px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Phone</label>
              <input
                type="text"
                name="user_phone"
                placeholder="Enter your phone"
                value={formData.user_phone}
                onChange={(e) =>
                  handleInputChange("user_phone", e.target.value)
                }
                disabled={isLoading}
                className="w-full bg-gray-950/70 border border-gray-700 px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                placeholder="Type your message..."
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                disabled={isLoading}
                className="w-full bg-gray-950/70 border border-gray-700 px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-cyan-400 hover:bg-cyan-500 text-black py-3.5 font-semibold rounded-lg text-lg tracking-wide transition-transform hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  SEND MESSAGE
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div
          className={`relative bg-gray-900/70 backdrop-blur-md border border-cyan-500/40 rounded-2xl shadow-[0_0_30px_-10px_#06b6d4] hover:shadow-[0_0_40px_-5px_#06b6d4] transition-all p-8 sm:p-10 ${
            isVisible.info
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          data-animate="info"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-cyan-400">
            CONTACT INFORMATION
          </h3>

          <div className="space-y-7 mb-10">
            <div className="flex items-center gap-4">
              <div className="p-4 border border-cyan-400/50 bg-cyan-400/10 rounded-xl">
                <Mail className="w-7 h-7 text-cyan-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Email</p>
                <p className="font-semibold">ceycodez.official@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-4 border border-cyan-400/50 bg-cyan-400/10 rounded-xl">
                <Phone className="w-7 h-7 text-cyan-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Phone</p>
                <p className="font-semibold">+94 76 921 0099</p>
                {/* <p className="font-semibold">+94 76 921 0099</p>
                <p className="font-semibold">+94 76 921 0099</p> */}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-4 border border-cyan-400/50 bg-cyan-400/10 rounded-xl">
                <MapPin className="w-7 h-7 text-cyan-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Address</p>
                <p className="font-semibold">Greenferns, Nattandiya Road, Dankotuwa.</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <h4 className="text-lg font-bold mb-3 text-cyan-400">
              BUSINESS HOURS
            </h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
