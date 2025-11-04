import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingPage from "./components/LoadingPage";
import AnimatedBackground from "./components/AnimatedBackground";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";
import FAQs from "./pages/FAQs";

const App = () => {
  const [loading, setLoading] = useState(true);
  return loading ? (
    <LoadingPage onFinish={() => setLoading(false)} />
  ):(
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-white relative overflow-hidden">
      <AnimatedBackground />
      <Router>
        <Navbar />
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faqs" element={<FAQs />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
