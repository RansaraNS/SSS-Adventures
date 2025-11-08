import React, { useState, useEffect } from 'react';
import { Trophy, MapPin, Calendar, Clock, Users, Mountain, Waves, Building, Menu, X, ChevronRight, Sparkles } from 'lucide-react';

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'itinerary':
        return <ItineraryPage />;
      case 'quiz':
        return <QuizPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-green-800 to-yellow-900 relative overflow-hidden">
      {/* Ambient light effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-amber-500 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse-slow animation-delay-4000"></div>
      </div>
      
      <Navigation 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      {renderPage()}
    </div>
  );
};

// Navigation Component
const Navigation = ({ currentPage, setCurrentPage, mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <nav className="bg-black bg-opacity-50 backdrop-blur-xl sticky top-0 z-50 border-b-2 border-yellow-500 shadow-lg shadow-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl shadow-yellow-500/50 overflow-hidden bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 backdrop-blur-sm border-2 border-yellow-400 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              <img 
                src="/src/assets/ssslogo01.png" 
                alt="SSS Adventures Logo" 
                className="w-full h-full object-contain p-1 relative z-10"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full items-center justify-center hidden">
                <Mountain className="text-green-900 w-8 h-8" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">
                SSS Adventures
              </h1>
              <p className="text-xs text-green-300 drop-shadow-[0_0_5px_rgba(134,239,172,0.5)]">Final Year Trip 2025</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            <NavButton 
              active={currentPage === 'home'} 
              onClick={() => setCurrentPage('home')}
            >
              Home
            </NavButton>
            <NavButton 
              active={currentPage === 'itinerary'} 
              onClick={() => setCurrentPage('itinerary')}
            >
              Itinerary
            </NavButton>
            <NavButton 
              active={currentPage === 'quiz'} 
              onClick={() => setCurrentPage('quiz')}
            >
              Millionaire Quiz
            </NavButton>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-yellow-400 p-2 hover:bg-yellow-400/10 rounded-lg transition-all"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-slideDown">
            <MobileNavButton 
              active={currentPage === 'home'} 
              onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}
            >
              Home
            </MobileNavButton>
            <MobileNavButton 
              active={currentPage === 'itinerary'} 
              onClick={() => { setCurrentPage('itinerary'); setMobileMenuOpen(false); }}
            >
              Itinerary
            </MobileNavButton>
            <MobileNavButton 
              active={currentPage === 'quiz'} 
              onClick={() => { setCurrentPage('quiz'); setMobileMenuOpen(false); }}
            >
              Millionaire Quiz
            </MobileNavButton>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`relative px-6 py-2 rounded-lg font-semibold transition-all duration-300 overflow-hidden group ${
      active 
        ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-green-900 shadow-lg shadow-yellow-500/50' 
        : 'text-yellow-300 hover:bg-white hover:bg-opacity-10'
    }`}
  >
    {active && (
      <>
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 animate-shimmer-fast"></div>
        <div className="absolute inset-0 bg-yellow-400 blur-xl opacity-50"></div>
      </>
    )}
    <span className="relative z-10">{children}</span>
  </button>
);

const MobileNavButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`relative w-full text-left px-4 py-3 rounded-lg font-semibold transition-all overflow-hidden ${
      active 
        ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-green-900 shadow-lg shadow-yellow-500/30' 
        : 'text-yellow-300 bg-white bg-opacity-5 hover:bg-opacity-10'
    }`}
  >
    {active && <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-fast"></div>}
    <span className="relative z-10">{children}</span>
  </button>
);

// Home Page Component
const HomePage = ({ setCurrentPage }) => {
  const [timeLeft, setTimeLeft] = useState({});
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particles for background animation
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDelay: Math.random() * 8,
      size: Math.random() * 6 + 2,
      duration: Math.random() * 10 + 15
    }));
    setParticles(newParticles);

    const calculateTimeLeft = () => {
      const tripDate = new Date('2025-11-20T18:00:00');
      const now = new Date();
      const difference = tripDate - now;

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Enhanced animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-yellow-900 animate-gradient-slow"></div>
      
      {/* Colorful floating particles with glow */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-float opacity-40"
          style={{
            left: `${particle.left}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.animationDelay}s`,
            animationDuration: `${particle.duration}s`,
            top: '-20px',
            background: `radial-gradient(circle, ${
              particle.id % 4 === 0 ? '#fbbf24' :
              particle.id % 4 === 1 ? '#10b981' :
              particle.id % 4 === 2 ? '#f59e0b' : '#34d399'
            } 0%, transparent 70%)`,
            boxShadow: `0 0 ${particle.size * 2}px ${
              particle.id % 4 === 0 ? '#fbbf24' :
              particle.id % 4 === 1 ? '#10b981' :
              particle.id % 4 === 2 ? '#f59e0b' : '#34d399'
            }`
          }}
        />
      ))}
      
      {/* Enhanced glowing orbs with more blur and movement */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-400 rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-blob-complex"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-green-400 rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-blob-complex animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-amber-400 rounded-full mix-blend-screen filter blur-[120px] opacity-25 animate-blob-complex animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Hero Section with enhanced lighting */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-block mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400 blur-[100px] opacity-40 animate-pulse-glow"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 blur-3xl opacity-50 animate-rotate-slow"></div>
              <h1 className="relative text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 mb-4 drop-shadow-[0_0_30px_rgba(251,191,36,0.8)] animate-text-shimmer">
                ADVENTURE AWAITS
              </h1>
            </div>
          </div>
          <p className="text-2xl md:text-3xl text-green-200 font-semibold mb-4 animate-pulse-slow drop-shadow-[0_0_15px_rgba(134,239,172,0.6)]">
            Final Year Trip - SSS Adventures 2025
          </p>
          <div className="flex items-center justify-center space-x-2 text-yellow-300 drop-shadow-[0_0_10px_rgba(252,211,77,0.5)]">
            <MapPin className="w-5 h-5 animate-bounce-slow" />
            <span className="text-lg">Starting from SLIIT, Colombo</span>
          </div>
        </div>

        {/* Enhanced Countdown Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative bg-gradient-to-br from-black via-green-950 to-emerald-900 bg-opacity-90 backdrop-blur-2xl rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(234,179,8,0.4)] border-4 border-yellow-500 overflow-hidden group">
            {/* Multiple animated background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-green-500/10 to-yellow-500/10 animate-shimmer-slow"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-400/5 to-transparent animate-pulse-slow"></div>
            
            {/* Radial glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-yellow-400/10 rounded-full blur-3xl animate-pulse-glow"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-400 mb-8 flex items-center justify-center space-x-3 drop-shadow-[0_0_20px_rgba(251,191,36,0.6)]">
                <Clock className="w-10 h-10 animate-spin-slow drop-shadow-[0_0_15px_rgba(251,191,36,0.8)]" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 animate-text-shimmer">
                  Journey Begins In
                </span>
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <CountdownBox value={timeLeft.days} label="Days" gradient="from-pink-500 to-rose-600" />
                <CountdownBox value={timeLeft.hours} label="Hours" gradient="from-purple-500 to-indigo-600" />
                <CountdownBox value={timeLeft.minutes} label="Minutes" gradient="from-blue-500 to-cyan-600" />
                <CountdownBox value={timeLeft.seconds} label="Seconds" gradient="from-green-500 to-emerald-600" />
              </div>

              <div className="mt-8 text-center">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-amber-600 px-6 py-3 rounded-full shadow-[0_0_30px_rgba(245,158,11,0.6)] animate-bounce-slow relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  <Calendar className="w-5 h-5 text-green-900 relative z-10" />
                  <span className="text-green-900 font-bold relative z-10">
                    November 20th, 2025 • 6:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Trip Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <HighlightCard 
            icon={<Mountain />}
            title="Riverstone & Hulangala"
            description="Explore stunning mountain peaks and breathtaking views"
            gradient="from-green-600 to-emerald-700"
            glowColor="rgba(16,185,129,0.4)"
          />
          <HighlightCard 
            icon={<Building />}
            title="Doric Bungalow"
            description="Visit the historic colonial architecture in Mannar"
            gradient="from-yellow-600 to-amber-700"
            glowColor="rgba(245,158,11,0.4)"
          />
          <HighlightCard 
            icon={<Waves />}
            title="Keeri Beach"
            description="Relax at the pristine beaches of Thalaimannar"
            gradient="from-blue-600 to-cyan-700"
            glowColor="rgba(6,182,212,0.4)"
          />
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <CTAButton 
            onClick={() => setCurrentPage('itinerary')}
            primary
          >
            View Full Itinerary
            <ChevronRight className="w-5 h-5" />
          </CTAButton>
          <CTAButton 
            onClick={() => setCurrentPage('quiz')}
          >
            Play Millionaire Quiz
            <Trophy className="w-5 h-5" />
          </CTAButton>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.4; }
          50% { transform: translateY(-100vh) rotate(360deg); opacity: 0.7; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient-slow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes shimmer-slow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes shimmer-fast {
          0% { transform: translateX(-200%); }
          100% { transform: translateX(200%); }
        }
        @keyframes blob-complex {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(50px, -80px) scale(1.2) rotate(120deg); }
          66% { transform: translate(-30px, 40px) scale(0.9) rotate(240deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes text-shimmer {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.3); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        .animate-gradient-slow {
          background-size: 200% 200%;
          animation: gradient-slow 20s ease infinite;
        }
        .animate-shimmer-slow {
          animation: shimmer-slow 4s infinite;
        }
        .animate-shimmer-fast {
          animation: shimmer-fast 2s infinite;
        }
        .animate-blob-complex {
          animation: blob-complex 10s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
        }
        .animate-text-shimmer {
          animation: text-shimmer 3s ease-in-out infinite;
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

const CountdownBox = ({ value, label, gradient }) => (
  <div className={`relative bg-gradient-to-br ${gradient} rounded-2xl p-6 shadow-2xl transform hover:scale-110 transition-all duration-300 overflow-hidden group`}>
    {/* Multi-layer glow effect */}
    <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} blur-2xl opacity-50 animate-pulse-glow`}></div>
    
    {/* Shine effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
    
    {/* Rotating border glow */}
    <div className="absolute inset-0 rounded-2xl animate-rotate-slow opacity-50">
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradient} blur-md`}></div>
    </div>
    
    <div className="relative z-10">
      <div className="text-5xl md:text-6xl font-black text-white mb-2 drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
        {String(value || 0).padStart(2, '0')}
      </div>
      <div className="text-sm md:text-base font-bold text-white uppercase tracking-wider drop-shadow-lg">
        {label}
      </div>
    </div>
  </div>
);

const HighlightCard = ({ icon, title, description, gradient, glowColor }) => (
  <div className={`relative bg-gradient-to-br ${gradient} bg-opacity-90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 border-2 border-white border-opacity-30 overflow-hidden group`}
    style={{ boxShadow: `0 20px 60px ${glowColor}` }}>
    {/* Multiple animated background effects */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
    <div className="absolute inset-0 bg-white/5 animate-pulse-slow"></div>
    
    {/* Radial glow */}
    <div className={`absolute inset-0 rounded-2xl blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
      style={{ background: `radial-gradient(circle at center, ${glowColor}, transparent)` }}></div>
    
    <div className="relative z-10">
      <div className="text-yellow-300 mb-4 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 drop-shadow-[0_0_20px_rgba(252,211,77,0.8)]">
        {React.cloneElement(icon, { size: 40, strokeWidth: 2.5 })}
      </div>
      <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">{title}</h3>
      <p className="text-green-100 leading-relaxed drop-shadow">{description}</p>
    </div>
    
    {/* Corner decoration with glow */}
    <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400 opacity-20 rounded-bl-full blur-sm"></div>
    <div className="absolute bottom-0 left-0 w-16 h-16 bg-green-400 opacity-20 rounded-tr-full blur-sm"></div>
  </div>
);

const CTAButton = ({ onClick, primary, children }) => (
  <button
    onClick={onClick}
    className={`relative flex items-center justify-center space-x-2 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-110 shadow-2xl overflow-hidden group ${
      primary
        ? 'bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-green-900'
        : 'bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 text-yellow-300 border-2 border-yellow-400'
    }`}
    style={{ 
      boxShadow: primary 
        ? '0 20px 60px rgba(245,158,11,0.5), 0 0 30px rgba(251,191,36,0.3)' 
        : '0 20px 60px rgba(16,185,129,0.4), 0 0 30px rgba(52,211,153,0.3)'
    }}
  >
    {/* Multiple animated shine effects */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-50 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent animate-shimmer-slow"></div>
    
    <span className="relative z-10 flex items-center space-x-2 drop-shadow-lg">{children}</span>
    
    {/* Enhanced glow effect */}
    <div className={`absolute inset-0 rounded-xl blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-300 ${
      primary ? 'bg-yellow-400' : 'bg-green-400'
    }`}></div>
    
    {/* Pulsing border glow */}
    <div className="absolute inset-0 rounded-xl animate-pulse-glow"
      style={{
        boxShadow: primary 
          ? '0 0 20px rgba(251,191,36,0.5) inset' 
          : '0 0 20px rgba(52,211,153,0.5) inset'
      }}></div>
  </button>
);

// Itinerary Page Component
const ItineraryPage = () => {
  const itinerary = [
    {
      day: "Starting",
      date: "November 20, 2025",
      time: "6:00 PM",
      location: "Colombo (SLIIT) → Kurunegala (KK's Houuse)",
      icon: <MapPin />,
      description: "Journey begins! Departure from SLIIT, Colombo. First stop at Kurunegala for refreshments and team bonding.",
      color: "from-green-600 to-emerald-700",
      glowColor: "rgba(16,185,129,0.4)"
    },
    {
      day: "Day 1",
      date: "November 21, 2025",
      time: "Full Day",
      location: "KK's Houuse → Riverstone → Hulangala → SURPRISE → KK's Houuse",
      icon: <Mountain />,
      description: "Adventure day! Hike through Riverstone's mystical landscapes and conquer Hulangala peak. Stunning mountain views await.",
      color: "from-blue-600 to-cyan-700",
      glowColor: "rgba(6,182,212,0.4)"
    },
    {
      day: "Day 2",
      date: "November 22, 2025",
      time: "Full Day",
      location: "KK's Houuse → Doric Bungalow → SURPRISE → Keeri Beach → Mannar Hotel",
      icon: <Building />,
      description: "Travel to Mannar. Visit the historic Doric Bungalow and explore colonial architecture. Overnight stay at Mannar Hotel.",
      color: "from-yellow-600 to-amber-700",
      glowColor: "rgba(245,158,11,0.4)"
    },
    {
      day: "Day 3",
      date: "November 23, 2025",
      time: "Full Day",
      location: "Mannar Hotel → Thalaimannar → SURPRISE → LightHouse → Return to Colombo",
      icon: <Waves />,
      description: "Head to Thalaimannar and relax at the Beach with Lighthouse and Pier. Perfect ending to our adventure.",
      color: "from-purple-600 to-pink-700",
      glowColor: "rgba(192,38,211,0.4)"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
      {/* Background ambient lights */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob-complex"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob-complex animation-delay-2000"></div>
      </div>

      <div className="text-center mb-16 relative z-10">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-yellow-400 blur-[80px] opacity-40 animate-pulse-glow"></div>
          <h1 className="relative text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 mb-4 drop-shadow-[0_0_30px_rgba(251,191,36,0.8)] animate-text-shimmer">
            Trip Itinerary
          </h1>
        </div>
        <p className="text-xl text-green-200 drop-shadow-[0_0_15px_rgba(134,239,172,0.5)]">Your complete adventure roadmap</p>
      </div>

      <div className="space-y-8 relative z-10">
        {itinerary.map((item, index) => (
          <div 
            key={index}
            className="relative bg-black bg-opacity-60 backdrop-blur-2xl rounded-2xl p-6 md:p-8 border-2 border-yellow-500 shadow-2xl hover:shadow-yellow-500/50 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 group overflow-hidden"
            style={{ boxShadow: `0 20px 60px ${item.glowColor}` }}
          >
            {/* Multiple animated background layers */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-green-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent animate-pulse-slow"></div>
            
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            {/* Radial glow on hover */}
            <div className="absolute inset-0 rounded-2xl blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
              style={{ background: `radial-gradient(circle at center, ${item.glowColor}, transparent)` }}></div>
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:space-x-6">
              <div className={`relative bg-gradient-to-br ${item.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-4 md:mb-0 flex-shrink-0 shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 overflow-hidden`}
                style={{ boxShadow: `0 10px 40px ${item.glowColor}` }}>
                {/* Icon glow layers */}
                <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-fast"></div>
                <div className="text-white relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                  {React.cloneElement(item.icon, { size: 36, strokeWidth: 2.5 })}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 mb-2 md:mb-0 drop-shadow-[0_0_15px_rgba(251,191,36,0.6)] animate-text-shimmer">
                    {item.day}
                  </h3>
                  <div className="text-green-300 font-bold bg-green-900 bg-opacity-60 backdrop-blur-sm px-4 py-1 rounded-full inline-block border border-green-500/30 shadow-[0_0_20px_rgba(134,239,172,0.3)]">
                    {item.date} • {item.time}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3 flex items-center space-x-2 drop-shadow-lg">
                  <MapPin className="w-5 h-5 text-yellow-400 animate-bounce-slow drop-shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
                  <span className="drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">{item.location}</span>
                </h4>
                
                <p className="text-green-100 leading-relaxed text-lg drop-shadow">
                  {item.description}
                </p>
              </div>
            </div>
            
            {/* Enhanced corner decorations with glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-bl-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-green-400/20 to-transparent rounded-tr-full blur-xl"></div>
            
            {/* Border glow effect */}
            <div className="absolute inset-0 rounded-2xl border border-yellow-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow"></div>
          </div>
        ))}
      </div>

      <div className="mt-12 relative bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 rounded-2xl p-8 text-center shadow-2xl overflow-hidden group"
        style={{ boxShadow: '0 25px 70px rgba(245,158,11,0.5)' }}>
        {/* Multiple animated background layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent animate-pulse-slow"></div>
        
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 group-hover:translate-x-full transform -translate-x-full transition-transform duration-1000"></div>
        
        {/* Radial glow */}
        <div className="absolute inset-0 bg-yellow-400 blur-3xl opacity-30 animate-pulse-glow"></div>
        
        <div className="relative z-10">
          <Users className="w-12 h-12 text-green-900 mx-auto mb-4 animate-bounce-slow drop-shadow-[0_0_15px_rgba(20,83,45,0.5)]" />
          <h3 className="text-2xl font-black text-green-900 mb-2 drop-shadow-lg">
            Pack Your Bags!
          </h3>
          <p className="text-green-800 text-lg font-semibold drop-shadow">
            An unforgettable adventure with SSS Adventures awaits. Get ready for memories that will last a lifetime!
          </p>
        </div>
      </div>
    </div>
  );
};

// Quiz Page Component
const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = [
    {
      question: "ඔබ Final Year Trip එක 20 වෙනිදා යන්න එනවා නේද?",
      answers: [
        "අනිවාරෙන් එනවා",
        "ඔව්",
        "ලොවෙත් එනවා",
        "එකෙන්ම එනවා"
      ],
      prize: "₹1,000"
    },
    {
      question: "SSS Adventuresලා ඔයාලට කෑම දෙයිද?",
      answers: [
        "ඔව් නේද",
        "දෙයි දෙයි",
        "අනේ මන්දා",
        "එක්කො එපා"
      ],
      prize: "₹5,000"
    },
    {
      question: "KK දඩ මස් වලින් සංග්‍රහ කරයිද?",
      answers: [
        "බලු මස් දෙයි දඩ මස් කියලා",
        "කේකේ ලොවෙත් දෙනවා",
        "අනිවා",
        "ගෝනා තමා ඕනා"
      ],
      prize: "₹10,000"
    },
    {
      question: "සුපිරි ආතල් එකක් ගන්නද එන්නේ?",
      answers: [
        "ඔව්",
        "නැතුව කෙල්ලො නලවන්න නෙමේ",
        "එකෙන්ම",
        "කවදාවත් නැහැ"
      ],
      prize: "₹50,000"
    },
    {
      question: "බොන්න ඕනෙද?",
      answers: [
        "ඔව්",
        "නැහැ",
        "මට තේරෙන්නේ නෑ",
        "කවදාවත් නැහැ"
      ],
      prize: "₹1,00,000"
    },
  ];

  const handleAnswerClick = () => {
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowResult(false);
      setSelectedAnswer(null);
    } else {
      setCurrentQuestion(0);
      setShowResult(false);
      setSelectedAnswer(null);
    }
  };

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 relative">
      {/* Background ambient lights */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-[120px] opacity-25 animate-blob-complex"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[120px] opacity-25 animate-blob-complex animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-500 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-blob-complex animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl w-full relative z-10">
        {/* Enhanced Millionaire Header */}
        <div className="text-center mb-8">
          <div className="relative inline-block mb-2">
            <div className="absolute inset-0 bg-yellow-400 blur-[100px] opacity-50 animate-pulse-glow"></div>
            <h1 className="relative text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 drop-shadow-[0_0_30px_rgba(251,191,36,0.9)] animate-text-shimmer">
              WHO WANTS TO BE A
            </h1>
          </div>
          <div className="relative inline-block mb-4">
            <div className="absolute inset-0 bg-yellow-500 blur-[80px] opacity-40 animate-pulse-glow"></div>
            <h2 className="relative text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 drop-shadow-[0_0_40px_rgba(251,191,36,1)] animate-text-shimmer">
              MILLIONAIRE?
            </h2>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse-slow drop-shadow-[0_0_15px_rgba(251,191,36,0.8)]" />
            <p className="text-xl text-green-300 drop-shadow-[0_0_15px_rgba(134,239,172,0.6)]">SSS Adventures Edition</p>
            <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse-slow drop-shadow-[0_0_15px_rgba(251,191,36,0.8)]" />
          </div>
        </div>

        {/* Enhanced Question Card */}
        <div className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-blue-950 rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-yellow-500 mb-6 overflow-hidden group"
          style={{ boxShadow: '0 25px 70px rgba(147,51,234,0.4), 0 0 50px rgba(234,179,8,0.3)' }}>
          {/* Multiple animated background layers */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 animate-shimmer-slow"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent animate-pulse-slow"></div>
          
          {/* Radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-yellow-400/10 rounded-full blur-3xl animate-pulse-glow"></div>

          {/* Prize Display */}
          <div className="text-center mb-8 relative z-10">
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-yellow-400 blur-2xl opacity-50 animate-pulse-glow"></div>
              <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-600 px-8 py-3 rounded-full shadow-[0_0_30px_rgba(251,191,36,0.6)] overflow-hidden group/prize">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-200%] group-hover/prize:translate-x-[200%] transition-transform duration-1000"></div>
                <span className="relative z-10 text-2xl md:text-3xl font-black text-green-900 drop-shadow-lg">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
              </div>
            </div>
          </div>

          {/* Question */}
          <div className="relative bg-black bg-opacity-70 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 border border-yellow-500/30 overflow-hidden group/question">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent animate-shimmer-slow"></div>
            <p className="relative z-10 text-2xl md:text-3xl text-white font-semibold text-center leading-relaxed drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              {currentQ.question}
            </p>
          </div>

          {/* Answer Options */}
          <div className="grid md:grid-cols-2 gap-4 relative z-10">
            {currentQ.answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedAnswer(index);
                  handleAnswerClick();
                }}
                disabled={showResult}
                className={`relative p-6 rounded-xl font-bold text-left text-lg md:text-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group/answer ${
                  showResult
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-green-900 shadow-xl shadow-yellow-500/60'
                    : selectedAnswer === index
                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-700 text-white shadow-lg shadow-yellow-500/40'
                    : 'bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-500 hover:to-blue-700 shadow-lg shadow-blue-500/30'
                }`}
              >
                {/* Button glow and shine effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover/answer:opacity-100 transform -translate-x-full group-hover/answer:translate-x-full transition-transform duration-700"></div>
                {showResult && <div className="absolute inset-0 bg-yellow-400 blur-xl opacity-40 animate-pulse-glow"></div>}
                
                <span className="relative z-10 mr-4 text-2xl font-black drop-shadow-lg">
                  {String.fromCharCode(65 + index)}:
                </span>
                <span className="relative z-10 drop-shadow">{answer}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Result Display */}
        {showResult && (
          <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl p-8 text-center shadow-2xl animate-bounce-once overflow-hidden group"
            style={{ boxShadow: '0 30px 80px rgba(245,158,11,0.6), 0 0 60px rgba(251,191,36,0.8)' }}>
            {/* Multiple animated background layers */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 animate-shimmer-slow"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-transparent animate-pulse-slow"></div>
            
            {/* Radial glow */}
            <div className="absolute inset-0 bg-yellow-300 blur-3xl opacity-50 animate-pulse-glow"></div>
            
            <div className="relative z-10">
              <Trophy className="w-20 h-20 text-green-900 mx-auto mb-4 drop-shadow-[0_0_20px_rgba(20,83,45,0.8)] animate-bounce-slow" />
              <h3 className="text-4xl md:text-5xl font-black text-green-900 mb-4 drop-shadow-lg">
                🎉 WINNER! 🎉
              </h3>
              <p className="text-2xl text-green-800 font-bold mb-6 drop-shadow">
                Congratulations! You won {currentQ.prize}!
              </p>
              <button
                onClick={handleNextQuestion}
                className="relative bg-green-900 text-yellow-400 px-8 py-4 rounded-xl font-bold text-xl transition-all transform hover:scale-110 shadow-2xl overflow-hidden group/next"
                style={{ boxShadow: '0 10px 40px rgba(20,83,45,0.5)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-700 to-transparent opacity-0 group-hover/next:opacity-100 transform -translate-x-full group-hover/next:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10 drop-shadow-lg">
                  {currentQuestion < questions.length - 1 ? 'Next Question' : 'Play Again'}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;