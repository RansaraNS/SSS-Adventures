import React, { useState, useEffect } from 'react';
import { Trophy, MapPin, Calendar, Clock, Users, Mountain, Waves, Building, Menu, X, ChevronRight } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-green-800 to-yellow-900">
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
    <nav className="bg-black bg-opacity-40 backdrop-blur-md sticky top-0 z-50 border-b-2 border-yellow-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg overflow-hidden bg-white bg-opacity-10 backdrop-blur-sm border-2 border-yellow-400">
              <img 
                src="/src/assets/ssslogo01.png" 
                alt="SSS Adventures Logo" 
                className="w-full h-full object-contain p-1"
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
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                SSS Adventures
              </h1>
              <p className="text-xs text-green-300">Final Year Trip 2025</p>
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
            className="md:hidden text-yellow-400 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
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
    className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
      active 
        ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-green-900 shadow-lg shadow-yellow-500/50' 
        : 'text-yellow-300 hover:bg-white hover:bg-opacity-10'
    }`}
  >
    {children}
  </button>
);

const MobileNavButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-all ${
      active 
        ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-green-900' 
        : 'text-yellow-300 bg-white bg-opacity-5 hover:bg-opacity-10'
    }`}
  >
    {children}
  </button>
);

// Home Page Component
const HomePage = ({ setCurrentPage }) => {
  const [timeLeft, setTimeLeft] = useState({});
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particles for background animation
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
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
      {/* Animated Background Particles */}
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-yellow-900 animate-gradient"></div>
      
      {/* Colorful floating particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-float opacity-30"
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
            } 0%, transparent 70%)`
          }}
        />
      ))}
      
      {/* Glowing orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-64 h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-block mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400 blur-3xl opacity-30 animate-pulse"></div>
              <h1 className="relative text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 mb-4 drop-shadow-2xl">
                ADVENTURE AWAITS
              </h1>
            </div>
          </div>
          <p className="text-2xl md:text-3xl text-green-200 font-semibold mb-4 animate-pulse">
            Final Year Trip - SSS Adventures 2025
          </p>
          <div className="flex items-center justify-center space-x-2 text-yellow-300">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">Starting from SLIIT, Colombo</span>
          </div>
        </div>

        {/* Countdown Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative bg-gradient-to-br from-black via-green-950 to-emerald-900 bg-opacity-80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-yellow-500 overflow-hidden">
            {/* Animated background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-green-500/10 to-yellow-500/10 animate-shimmer"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-400 mb-8 flex items-center justify-center space-x-3">
                <Clock className="w-10 h-10 animate-spin-slow" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500">
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
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-amber-600 px-6 py-3 rounded-full shadow-lg animate-bounce-slow">
                  <Calendar className="w-5 h-5 text-green-900" />
                  <span className="text-green-900 font-bold">
                    November 20th, 2025 • 6:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trip Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <HighlightCard 
            icon={<Mountain />}
            title="Riverstone & Hulangala"
            description="Explore stunning mountain peaks and breathtaking views"
            gradient="from-green-600 to-emerald-700"
          />
          <HighlightCard 
            icon={<Building />}
            title="Doric Bungalow"
            description="Visit the historic colonial architecture in Mannar"
            gradient="from-yellow-600 to-amber-700"
          />
          <HighlightCard 
            icon={<Waves />}
            title="Keeri Beach"
            description="Relax at the pristine beaches of Thalaimannar"
            gradient="from-blue-600 to-cyan-700"
          />
        </div>

        {/* CTA Buttons */}
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
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-100vh) rotate(360deg); opacity: 0.6; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
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
          0%, 100% { box-shadow: 0 0 20px rgba(251, 191, 36, 0.5); }
          50% { box-shadow: 0 0 40px rgba(251, 191, 36, 0.8), 0 0 60px rgba(251, 191, 36, 0.4); }
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

const CountdownBox = ({ value, label, gradient }) => (
  <div className={`relative bg-gradient-to-br ${gradient} rounded-2xl p-6 shadow-2xl transform hover:scale-110 transition-all duration-300 animate-pulse-glow overflow-hidden`}>
    {/* Shine effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-shimmer"></div>
    
    <div className="relative z-10">
      <div className="text-5xl md:text-6xl font-black text-white mb-2 drop-shadow-lg">
        {String(value || 0).padStart(2, '0')}
      </div>
      <div className="text-sm md:text-base font-bold text-white uppercase tracking-wider drop-shadow">
        {label}
      </div>
    </div>
  </div>
);

const HighlightCard = ({ icon, title, description, gradient }) => (
  <div className={`relative bg-gradient-to-br ${gradient} bg-opacity-90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 border-2 border-white border-opacity-30 overflow-hidden group`}>
    {/* Animated background shine */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
    
    <div className="relative z-10">
      <div className="text-yellow-300 mb-4 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 drop-shadow-lg">
        {React.cloneElement(icon, { size: 40, strokeWidth: 2.5 })}
      </div>
      <h3 className="text-xl font-bold text-white mb-2 drop-shadow">{title}</h3>
      <p className="text-green-100 leading-relaxed">{description}</p>
    </div>
    
    {/* Corner decoration */}
    <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400 opacity-10 rounded-bl-full"></div>
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
  >
    {/* Animated shine effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-40 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
    
    <span className="relative z-10 flex items-center space-x-2">{children}</span>
    
    {/* Glow effect */}
    <div className={`absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 ${
      primary ? 'bg-yellow-400' : 'bg-green-400'
    }`}></div>
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
      color: "from-green-600 to-emerald-700"
    },
    {
      day: "Day 1",
      date: "November 21, 2025",
      time: "Full Day",
      location: "KK's Houuse → Riverstone → Hulangala → KK's Houuse",
      icon: <Mountain />,
      description: "Adventure day! Hike through Riverstone's mystical landscapes and conquer Hulangala peak. Stunning mountain views await.",
      color: "from-blue-600 to-cyan-700"
    },
    {
      day: "Day 2",
      date: "November 22, 2025",
      time: "Full Day",
      location: "KK's Houuse → Doric Bungalow → Keeri Beach → Mannar Hotel",
      icon: <Building />,
      description: "Travel to Mannar. Visit the historic Doric Bungalow and explore colonial architecture. Overnight stay at Mannar Hotel.",
      color: "from-yellow-600 to-amber-700"
    },
    {
      day: "Day 3",
      date: "November 23, 2025",
      time: "Full Day",
      location: "Mannar Hotel → Thalaimannar → LightHouse → Return to Colombo",
      icon: <Waves />,
      description: "Head to Thalaimannar and relax at the Beach with Lighthouse and Pier. Perfect ending to our adventure.",
      color: "from-purple-600 to-pink-700"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 mb-4">
          Trip Itinerary
        </h1>
        <p className="text-xl text-green-200">Your complete adventure roadmap</p>
      </div>

      <div className="space-y-8">
        {itinerary.map((item, index) => (
          <div 
            key={index}
            className="relative bg-black bg-opacity-50 backdrop-blur-xl rounded-2xl p-6 md:p-8 border-2 border-yellow-500 shadow-2xl hover:shadow-yellow-500/40 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 group overflow-hidden"
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-green-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:space-x-6">
              <div className={`bg-gradient-to-br ${item.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-4 md:mb-0 flex-shrink-0 shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
                <div className="text-white">
                  {React.cloneElement(item.icon, { size: 36, strokeWidth: 2.5 })}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 mb-2 md:mb-0">
                    {item.day}
                  </h3>
                  <div className="text-green-300 font-bold bg-green-900 bg-opacity-40 px-4 py-1 rounded-full inline-block">
                    {item.date} • {item.time}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3 flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-yellow-400 animate-bounce-slow" />
                  <span>{item.location}</span>
                </h4>
                
                <p className="text-green-100 leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
            </div>
            
            {/* Corner decorations */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-green-400/10 to-transparent rounded-tr-full"></div>
          </div>
        ))}
      </div>

      <div className="mt-12 relative bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 rounded-2xl p-8 text-center shadow-2xl overflow-hidden group">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 group-hover:translate-x-full transform -translate-x-full transition-transform duration-1000"></div>
        
        <div className="relative z-10">
          <Users className="w-12 h-12 text-green-900 mx-auto mb-4 animate-bounce-slow" />
          <h3 className="text-2xl font-black text-green-900 mb-2">
            Pack Your Bags!
          </h3>
          <p className="text-green-800 text-lg font-semibold">
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
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full">
        {/* Millionaire Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 mb-2">
            WHO WANTS TO BE A
          </h1>
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4">
            MILLIONAIRE?
          </h2>
          <p className="text-xl text-green-300">SSS Adventures Edition</p>
        </div>

        {/* Question Card */}
        <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-blue-950 rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-yellow-500 mb-6">
          {/* Prize Display */}
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 px-8 py-3 rounded-full">
              <span className="text-2xl md:text-3xl font-black text-green-900">
                Question {currentQuestion + 1} of {questions.length}
              </span>
            </div>
          </div>

          {/* Question */}
          <div className="bg-black bg-opacity-50 rounded-2xl p-6 md:p-8 mb-8">
            <p className="text-2xl md:text-3xl text-white font-semibold text-center leading-relaxed">
              {currentQ.question}
            </p>
          </div>

          {/* Answer Options */}
          <div className="grid md:grid-cols-2 gap-4">
            {currentQ.answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedAnswer(index);
                  handleAnswerClick();
                }}
                disabled={showResult}
                className={`relative p-6 rounded-xl font-bold text-left text-lg md:text-xl transition-all duration-300 transform hover:scale-105 ${
                  showResult
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-green-900 shadow-xl shadow-yellow-500/50'
                    : selectedAnswer === index
                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-700 text-white'
                    : 'bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-500 hover:to-blue-700'
                }`}
              >
                <span className="mr-4 text-2xl font-black">
                  {String.fromCharCode(65 + index)}:
                </span>
                {answer}
              </button>
            ))}
          </div>
        </div>

        {/* Result Display */}
        {showResult && (
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl p-8 text-center shadow-2xl animate-bounce-once">
            <Trophy className="w-20 h-20 text-green-900 mx-auto mb-4" />
            <h3 className="text-4xl md:text-5xl font-black text-green-900 mb-4">
              🎉 WINNER! 🎉
            </h3>
            <p className="text-2xl text-green-800 font-bold mb-6">
              Congratulations! You won {currentQ.prize}!
            </p>
            <button
              onClick={handleNextQuestion}
              className="bg-green-900 text-yellow-400 px-8 py-4 rounded-xl font-bold text-xl hover:bg-green-800 transition-all transform hover:scale-105"
            >
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'Play Again'}
            </button>
          </div>
        )}

        <style jsx>{`
          @keyframes bounce-once {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          .animate-bounce-once {
            animation: bounce-once 0.6s ease-out;
          }
        `}</style>
      </div>
    </div>
  );
};

export default App;