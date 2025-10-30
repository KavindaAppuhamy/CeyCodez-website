import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Mail, MapPin } from 'lucide-react';

const CeyCodezPortfolio = () => {
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const packagesRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'home', ref: homeRef },
        { id: 'about', ref: aboutRef },
        { id: 'packages', ref: packagesRef },
        { id: 'contact', ref: contactRef }
      ];

      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        if (section.ref.current) {
          const { offsetTop, offsetHeight } = section.ref.current;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 flex items-center justify-center relative overflow-hidden">
        <AnimatedBackground />
        
        <div className="text-center relative z-10">
          <div className="mb-8">
            <svg className="w-48 h-48 mx-auto" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="80" stroke="rgba(96,165,250,0.3)" strokeWidth="2" fill="none"/>
              <path d="M100 40 L120 60 L100 50 L80 60 Z M100 50 L100 150 M85 65 L100 80 L115 65 M85 95 L100 110 L115 95 M85 125 L100 140 L115 125" 
                stroke="#60a5fa" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <h1 className="text-6xl font-bold text-white mb-2">CeyCodez</h1>
          <p className="text-cyan-400 text-2xl mb-12">Code • Create • Evolve.</p>
          <p className="text-white text-lg mb-6 tracking-widest">INITIALIZING SYSTEM...</p>
          <div className="w-[450px] h-3 bg-gray-900 rounded-sm border-2 border-cyan-500 mx-auto overflow-hidden">
            <div 
              className="h-full bg-cyan-400 transition-all duration-300"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-white">
      <AnimatedBackground />
      
      {/* Navigation */}
      <nav className="border-b border-cyan-500/20 bg-black/40 backdrop-blur-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <svg className="w-14 h-14" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="35" stroke="rgba(96,165,250,0.6)" strokeWidth="2.5" fill="none"/>
                <path d="M50 25 L58 33 L50 29 L42 33 Z M50 29 L50 65 M44 37 L50 43 L56 37" stroke="#60a5fa" strokeWidth="2.5"/>
              </svg>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">CeyCodez</h1>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-12">
              {[
                { name: 'HOME', ref: homeRef, id: 'home' },
                { name: 'ABOUT', ref: aboutRef, id: 'about' },
                { name: 'PACKAGES', ref: packagesRef, id: 'packages' },
                { name: 'CONTACT', ref: contactRef, id: 'contact' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.ref)}
                  className={`text-base font-bold transition-colors relative pb-7 ${
                    activeSection === item.id ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-cyan-400" />
                  )}
                </button>
              ))}
            </div>

            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-6 pb-4 space-y-4">
              {[
                { name: 'HOME', ref: homeRef },
                { name: 'ABOUT', ref: aboutRef },
                { name: 'PACKAGES', ref: packagesRef },
                { name: 'CONTACT', ref: contactRef }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.ref)}
                  className="block w-full text-left px-4 py-3 text-white hover:text-cyan-400 font-bold"
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section ref={homeRef} className="min-h-screen pt-20 flex flex-col justify-center relative">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center relative z-10">
          <h1 className="text-7xl md:text-8xl font-bold mb-8 tracking-tight">DECODE THE FUTURE</h1>
          <p className="text-3xl text-cyan-400 mb-16">Code • Create • Evolve.</p>
          <button 
            onClick={() => scrollToSection(packagesRef)}
            className="px-10 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all font-bold text-lg tracking-wide"
          >
            EXPLORE SOLUTIONS
          </button>
        </div>

        <div className="max-w-7xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-6 relative z-10">
          {/* Our Mission Card */}
          <div className="relative bg-gray-900/60 backdrop-blur-sm border-2 border-cyan-500/30">
            <div className="absolute top-0 left-20 w-20 h-0.5 bg-cyan-400"></div>
            <div className="absolute top-0 right-0 w-28 h-0.5 bg-gradient-to-l from-transparent via-cyan-400/50 to-transparent"></div>
            <div className="absolute top-0 left-0 w-0.5 h-12 bg-cyan-400"></div>
            <div className="absolute bottom-0 left-0 w-24 h-0.5 bg-cyan-400"></div>
            <div className="absolute bottom-0 left-0 w-0.5 h-24 bg-cyan-400"></div>
            <div className="absolute bottom-0 right-0 w-0.5 h-24 bg-cyan-400"></div>
            <div className="absolute bottom-0 right-0 w-20 h-0.5 bg-cyan-400"></div>
            
            <div className="p-10 flex items-start space-x-5">
              <div className="p-4 border-2 border-cyan-400 bg-cyan-400/10 flex-shrink-0">
                <svg className="w-10 h-10 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4">OUR MISSION</h3>
                <p className="text-gray-300 leading-relaxed text-base">Lorem ipsum dolor, sit consectetur tincidunt in ut enim ac mauris. Aliquam sit lorem, aliquam auctor netus blandit iet elit ornare et nonna aliquam amet eros.</p>
              </div>
            </div>
          </div>

          {/* Latest Projects Card */}
          <div className="relative bg-gray-900/60 backdrop-blur-sm border-2 border-cyan-500/30">
            <div className="absolute top-0 left-0 w-28 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
            <div className="absolute top-0 right-20 w-20 h-0.5 bg-cyan-400"></div>
            <div className="absolute top-0 right-0 w-0.5 h-12 bg-cyan-400"></div>
            <div className="absolute bottom-0 right-0 w-24 h-0.5 bg-cyan-400"></div>
            <div className="absolute bottom-0 right-0 w-0.5 h-24 bg-cyan-400"></div>
            <div className="absolute bottom-0 left-0 w-0.5 h-24 bg-cyan-400"></div>
            <div className="absolute bottom-0 left-0 w-20 h-0.5 bg-cyan-400"></div>
            
            <div className="p-10 flex items-start space-x-5">
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4">LATEST PROJECTS</h3>
                <p className="text-gray-300 leading-relaxed text-base">Lorem ipsum dolor, sit consectetur tincidunt in ut enim ac mauris non est tunc hac totius hant beatut.</p>
              </div>
              <div className="p-4 border-2 border-cyan-400 bg-cyan-400/10 flex-shrink-0">
                <svg className="w-10 h-10 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="fixed bottom-10 right-10 w-20 h-20 opacity-20 pointer-events-none z-0">
          <svg viewBox="0 0 100 100" fill="none">
            <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="#60a5fa" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="min-h-screen py-20 flex flex-col justify-center relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-bold mb-6">OUR MISSION & VISION</h2>
            <p className="text-2xl text-gray-300">Decoding the Future of Technology, Together.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {/* Our Story */}
            <div className="relative bg-gray-900/60 backdrop-blur-sm border-2 border-cyan-500/30">
              <div className="absolute top-0 left-20 w-20 h-0.5 bg-cyan-400"></div>
              <div className="absolute top-0 right-0 w-28 h-0.5 bg-gradient-to-l from-transparent via-cyan-400/50 to-transparent"></div>
              <div className="absolute top-0 left-0 w-0.5 h-12 bg-cyan-400"></div>
              <div className="absolute bottom-0 left-0 w-24 h-0.5 bg-cyan-400"></div>
              <div className="absolute bottom-0 left-0 w-0.5 h-24 bg-cyan-400"></div>
              <div className="absolute bottom-0 right-0 w-0.5 h-24 bg-cyan-400"></div>
              <div className="absolute bottom-0 right-0 w-20 h-0.5 bg-cyan-400"></div>
              
              <div className="p-10 flex items-start space-x-5">
                <div className="p-4 border-2 border-cyan-400 bg-cyan-400/10 flex-shrink-0">
                  <svg className="w-10 h-10 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <path d="M9 9h6M9 15h6"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4">OUR STORY</h3>
                  <p className="text-gray-300 leading-relaxed text-base">Lorem ipsum dolor, vivamus nisi sit maerenand olast ait amelanet tonsulsreundanat facilisis the moaning the elastico pomittes consectetur iner om fant flavus cleansed ferret.</p>
                </div>
              </div>
            </div>

            {/* Latest Values */}
            <div className="relative bg-gray-900/60 backdrop-blur-sm border-2 border-cyan-500/30">
              <div className="absolute top-0 left-0 w-28 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
              <div className="absolute top-0 right-20 w-20 h-0.5 bg-cyan-400"></div>
              <div className="absolute top-0 right-0 w-0.5 h-12 bg-cyan-400"></div>
              <div className="absolute bottom-0 right-0 w-24 h-0.5 bg-cyan-400"></div>
              <div className="absolute bottom-0 right-0 w-0.5 h-24 bg-cyan-400"></div>
              <div className="absolute bottom-0 left-0 w-0.5 h-24 bg-cyan-400"></div>
              <div className="absolute bottom-0 left-0 w-20 h-0.5 bg-cyan-400"></div>
              
              <div className="p-10 flex items-start space-x-5">
                <div className="p-4 border-2 border-cyan-400 bg-cyan-400/10 flex-shrink-0">
                  <svg className="w-10 h-10 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4">LATEST VALUES</h3>
                  <p className="text-gray-300 mb-5 leading-relaxed text-base">Lorem ipsum dolor, sit resscattme tincidt in ut enfimne batilur.</p>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full"></span>
                      <span className="text-base">Integrity</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full"></span>
                      <span className="text-base">Excellence</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Meet Our Team */}
          <div className="relative bg-gray-900/60 backdrop-blur-sm border-2 border-cyan-500/30">
            <div className="absolute top-0 left-1/4 w-40 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            <div className="absolute top-0 right-1/4 w-40 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-24 h-0.5 bg-cyan-400"></div>
            <div className="absolute bottom-0 left-0 w-0.5 h-24 bg-cyan-400"></div>
            <div className="absolute bottom-0 right-0 w-24 h-0.5 bg-cyan-400"></div>
            <div className="absolute bottom-0 right-0 w-0.5 h-24 bg-cyan-400"></div>
            
            <div className="p-12">
              <h3 className="text-4xl font-bold text-center mb-14">MEET OUR TEAM</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                {[
                  { name: 'Alex Chen', role: 'CEO & Founder' },
                  { name: 'Alex Chen', role: 'CEO & Fouder' },
                  { name: 'Dosunmi', role: 'SDimbs' },
                  { name: 'Alex Chen', role: 'CEO & Founder' }
                ].map((member, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-36 h-36 mx-auto mb-5 rounded-full border-4 border-cyan-400 bg-gray-800 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900"></div>
                    </div>
                    <h4 className="font-bold text-lg mb-1">{member.name}</h4>
                    <p className="text-sm text-gray-400">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section ref={packagesRef} className="min-h-screen py-20 flex flex-col justify-center relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-bold mb-4">FULL-STACK DEVELOPMENT</h2>
            <h3 className="text-4xl md:text-5xl font-bold">PACKAGES & PRICING</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Basic Package */}
            <div className="relative bg-gray-900/60 backdrop-blur-sm border-2 border-cyan-500/30">
              <div className="absolute top-0 left-16 w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
              <div className="absolute top-0 left-0 w-0.5 h-16 bg-gradient-to-b from-cyan-400 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-24 h-0.5 bg-cyan-400"></div>
              <div className="absolute bottom-0 left-0 w-0.5 h-24 bg-cyan-400"></div>
              <div className="absolute bottom-0 right-0 w-0.5 h-24 bg-cyan-400"></div>
              <div className="absolute bottom-0 right-0 w-20 h-0.5 bg-cyan-400"></div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">BASIC PACKAGE</h3>
                <p className="text-sm text-gray-400 mb-6">STARTER WEBSITE</p>
                <div className="mb-8">
                  <span className="text-6xl font-bold text-cyan-400">$198</span>
                  <span className="text-gray-400 text-lg">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start space-x-2 text-sm">
                    <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
                    <span>1-5 static/sem/dynamic pages</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm">
                    <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
                    <span>Responsive UI (React + Tailwind)</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm">
                    <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
                    <span>Basic backend (Node.js)</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm">
                    <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
                    <span>MoGGEB/MYCL integration</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm">
                    <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
                    <span>Contact form</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm">
                    <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
                    <span>Deployment on low-cost hosting</span>
                  </li>
                </ul>
                <div className="text-center">
                  <span className="text-cyan-400 text-3xl">✓</span>
                </div>
              </div>
            </div>

            {/* Standard Package */}
            <div className="relative bg-gray-900/60 backdrop-blur-sm border-2 border-cyan-500/30">
              <div className="absolute top-0 left-16 w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
              <div className="absolute top-0 left-0 w-0.5 h-16 bg-gradient-to-b from-cyan-400 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-24 h-0.5 bg-cyan-400"></div>
              <div className="absolute bottom-0 left-0 w-0.5 h-24 bg-cyan-400"></div>
              <div className="absolute bottom-0 right-0 w-0.5 h-24 bg-cyan-400"></div>
              <div className="absolute bottom-0 right-0 w-20 h-0.5 bg-cyan-400"></div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">STANDARD PACKAGE</h3>
                <p className="text-sm text-gray-400 mb-6">BUSINESS WEB APP</p>
                <div className="mb-8">
                  <span className="text-6xl font-bold text-cyan-400">$295</span>
                  <span className="text-gray-400 text-lg">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start space-x-2 text-sm">
                    <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
                    <span>Ut nio 10-1 12 pages/modules</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm">
                    <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
                    <span>Full CRUD opredules</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm">
                    <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
                    <span>Secure authentication</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm">
                    <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
                    <span>Secure authentication (JWT)</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm">
                    <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
                    <span>API integration</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm">
                    <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
                    <span>Defabmase design & optimization</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm">
                    <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
                    <span>Deployment with domain, SSL</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm">
                    <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
                    <span>1-month free maintenance</span>
                  </li>
                </ul>
                <div className="text-center">
                  <span className="text-cyan-400 text-3xl">✓</span>
                </div>
              </div>
            </div>

            {/* Premium Package */}
            <div className="relative bg-gray-900/60 backdrop-blur-sm border-2 border-cyan-400">
              <div className="absolute -top-4 right-8 bg-cyan-400 text-black px-5 py-1.5 font-bold text-sm">PREMIUM</div>
              <div className="absolute top-0 left-16 w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-24 h-0.5 bg-cyan-400"></div>
              <div className="absolute bottom-0 left-0 w-0.5 h-24 bg-cyan-400"></div>
              <div className="absolute bottom-0 right-0 w-0.5 h-24 bg-cyan-400"></div>
              <div className="absolute bottom-0 right-0 w-20 h-0.5 bg-cyan-400"></div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">PREMIUM</h3>
                <p className="text-sm text-gray-400 mb-6">LAT-EST-EME 3FECTS</p>
                <div className="mb-8">
                  <span className="text-6xl font-bold text-cyan-400">$522</span>
                  <span className="text-gray-400 text-lg">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start space-x-2 text-sm">
                    <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
                    <span>Unlimited scalable architecture (MERN)</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm">
                    <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
                    <span>Admin panel file analytics</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm">
                    <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
                    <span>Advanceanel wiff file uploads</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm">
                    <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
                    <span>Advance backemg file updates</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm">
                    <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
                    <span>3-month maintenance &</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm">
                    <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
                    <span>Cloud/DigitalOcean</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm">
                    <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
                    <span>Full documentation & minor code handower</span>
                  </li>
                </ul>
                <div className="text-center">
                  <span className="text-cyan-400 text-3xl">✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="min-h-screen py-20 flex flex-col justify-center relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-bold mb-6">CONNECT WITH US</h2>
            <p className="text-2xl text-gray-300">Your Vision, Our Expertises</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Contact Form */}
            <div className="relative bg-gray-900/60 backdrop-blur-sm border-2 border-cyan-500/30">
              <div className="absolute top-0 left-16 w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
              <div className="absolute top-0 left-0 w-0.5 h-16 bg-gradient-to-b from-cyan-400 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-24 h-0.5 bg-cyan-400"></div>
              <div className="absolute bottom-0 left-0 w-0.5 h-24 bg-cyan-400"></div>
              <div className="absolute bottom-0 right-0 w-0.5 h-24 bg-cyan-400"></div>
              <div className="absolute bottom-0 right-0 w-20 h-0.5 bg-cyan-400"></div>
              
              <div className="p-10">
                <h3 className="text-3xl font-bold mb-8">SEND US A MESSAGE</h3>
                <form className="space-y-5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-gray-950/70 border border-gray-600 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-gray-950/70 border border-gray-600 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full bg-gray-950/70 border border-gray-600 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full bg-gray-950/70 border border-gray-600 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-gray-700 to-gray-600 hover:from-cyan-400 hover:to-cyan-500 hover:text-black py-3.5 font-bold transition-all text-lg"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>

            {/* Latest Information */}
            <div className="relative bg-gray-900/60 backdrop-blur-sm border-2 border-cyan-500/30">
              <div className="absolute top-0 right-16 w-24 h-0.5 bg-gradient-to-l from-cyan-400 to-transparent"></div>
              <div className="absolute top-0 right-0 w-0.5 h-16 bg-gradient-to-b from-cyan-400 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-24 h-0.5 bg-cyan-400"></div>
              <div className="absolute bottom-0 left-0 w-0.5 h-24 bg-cyan-400"></div>
              <div className="absolute bottom-0 right-0 w-0.5 h-24 bg-cyan-400"></div>
              <div className="absolute bottom-0 right-0 w-20 h-0.5 bg-cyan-400"></div>
              
              <div className="p-10">
                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-3xl font-bold">LATEST INFORMATION</h3>
                  <div className="flex space-x-2">
                    <div className="w-14 h-14 border-2 border-cyan-400 bg-cyan-400/10"></div>
                    <div className="w-14 h-14 border-2 border-cyan-400 bg-cyan-400/10"></div>
                  </div>
                </div>
                <p className="text-gray-300 mb-10 leading-relaxed text-base">Lorem ipsum dolor, sit rpssccattme tincidt in ut enfinne inet tume toil belles li Datad.</p>
                
                <div className="space-y-7">
                  <div className="flex items-start space-x-4">
                    <div className="p-4 border-2 border-cyan-400 bg-cyan-400/10 flex-shrink-0">
                      <Mail className="w-7 h-7 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-2">Email:</p>
                      <p className="font-semibold text-base">contact@ceycodez.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-4 border-2 border-cyan-400 bg-cyan-400/10 flex-shrink-0">
                      <MapPin className="w-7 h-7 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-2">Address:</p>
                      <p className="font-semibold text-base">123 Genetic Ave, Suite 456, Technova City</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-sm text-gray-500 border-t border-cyan-500/20 pt-10">
            <p>Ceycdz ipsum dolor sit amet & consectetur https://mrpotmer sit plamettris said dom muncrator maxitrans</p>
            <p className="mt-2">thacondore lobortate status consectetur resolutionat monoclist meenationin reolutionist.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

// Animated Background Component
const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 80;
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(96, 165, 250, 0.5)';
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(96, 165, 250, ${0.15 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      connectParticles();
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default CeyCodezPortfolio;