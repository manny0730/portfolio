import 'boxicons/css/boxicons.min.css';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeaderMinimal = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(null); // 'work', 'about', or null
  const [copySuccess, setCopySuccess] = useState(false);
  const navRef = useRef(null); // To detect clicks outside

  // Scroll detection logic
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click Outside to Close Logic (Crucial for Mobile)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveTab(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside); // For mobile touch events
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("manueltoledo124@gmail.com");
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  // Helper to toggle tabs on click (Mobile support)
  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(null);
    } else {
      setActiveTab(tab);
    }
  };

  const workLinks = [
    { name: "Extended Reality", href: "/#xr", icon: "bx-cube-alt" },
    { name: "Environments", href: "/#digital", icon: "bx-layer" },
    { name: "Game Design", href: "/#game", icon: "bx-joystick" },
    { name: "Short Films", href: "/#film", icon: "bx-film" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-md border-zinc-800 shadow-lg' 
          : 'bg-transparent border-transparent'
      }`}
    >
      
      {/* 1. LOGO SECTION */}
      <Link to="/" className="w-[30px] md:w-[40px] hover:opacity-80 transition-opacity">
        <img 
          src="/portfolio/logo.svg"  // <--- ADDED "/portfolio" prefix
          alt="Manuel Toledo Logo" 
          className="w-full h-auto object-contain" 
        />
      </Link>

      {/* 2. NAVIGATION GROUP (Ref attached for click-outside detection) */}
      <div className="flex items-center gap-4" ref={navRef}>

        {/* === WORK TAB === */}
        <div 
            className="relative"
            onMouseEnter={() => setActiveTab('work')}
            onMouseLeave={() => setActiveTab(null)}
        >
            {/* UPDATED: Changed from <a> to <button> to support Mobile Tap */}
            <button 
                onClick={() => toggleTab('work')}
                className={`text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full transition-colors border ${
                    activeTab === 'work' 
                    ? 'bg-white text-black border-white' 
                    : 'bg-zinc-900/80 text-white border-zinc-700 hover:bg-zinc-800'
                }`}
            >
                Work
            </button>

            {/* Work Dropdown */}
            <AnimatePresence>
                {activeTab === 'work' && (
                    <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="absolute top-full right-0 mt-4 w-[240px] bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl p-2 overflow-hidden flex flex-col gap-1"
                    >
                        {workLinks.map((link, index) => (
                            <a 
                                key={index}
                                href={link.href}
                                // Close menu when a link is clicked
                                onClick={() => setActiveTab(null)}
                                className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-zinc-800 transition-colors"
                            >
                                <i className={`bx ${link.icon} text-zinc-500 group-hover:text-white text-lg transition-colors`}></i>
                                <span className="text-sm font-medium text-zinc-300 group-hover:text-white uppercase tracking-wider transition-colors">
                                    {link.name}
                                </span>
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

        {/* === ABOUT TAB === */}
        <div 
            className="relative"
            onMouseEnter={() => setActiveTab('about')}
            onMouseLeave={() => setActiveTab(null)}
        >
            <button 
                onClick={() => toggleTab('about')}
                className={`text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full transition-colors border ${
                    activeTab === 'about' 
                    ? 'bg-white text-black border-white' 
                    : 'bg-white text-black border-white hover:bg-zinc-200'
                }`}
            >
                About
            </button>

            {/* About Dropdown (Dynamic Island) */}
            <AnimatePresence>
                {activeTab === 'about' && (
                    <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="absolute top-full right-0 mt-4 w-[320px] bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl p-4 flex items-center gap-4 overflow-hidden"
                    >
                        {/* Left: Profile Picture */}
                        <div className="w-24 h-32 bg-zinc-800 rounded-lg overflow-hidden flex-shrink-0">
                            <img 
                                src="/profile.png" 
                                alt="Manuel Toledo" 
                                className="w-full h-full object-cover" 
                            />
                        </div>

                        {/* Right: Details & Actions */}
                        <div className="flex-1 flex flex-col justify-center py-1">
                            
                            {/* Info (Removed "Available" Status as requested) */}
                            <div className="mb-4">
                                <h3 className="text-white font-bold text-base leading-tight">Manuel Toledo</h3>
                                <p className="text-zinc-500 text-[10px] uppercase tracking-wider">XR Developer | 3D Artist</p>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-col gap-2">
                                {/* Copy Email */}
                                <button 
                                    onClick={handleCopyEmail}
                                    className="w-full flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-[10px] uppercase font-bold tracking-wider text-white py-2 rounded transition-colors border border-zinc-700"
                                >
                                    <i className={`bx ${copySuccess ? 'bx-check text-green-500' : 'bx-copy'}`}></i>
                                    {copySuccess ? "Copied" : "Copy Email"}
                                </button>

                                {/* Social Icons Row */}
                                <div className="flex gap-2">
                                    <a 
                                        href="https://www.linkedin.com/in/manueltoledo0730" 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="flex-1 flex items-center justify-center bg-zinc-800 hover:bg-[#0077b5] hover:border-[#0077b5] text-white py-2 rounded transition-all border border-zinc-700 group"
                                    >
                                        <i className='bx bxl-linkedin text-lg'></i>
                                    </a>
                                    <a 
                                        href="/Manuel_Toledo_Resume.pdf" 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="flex-1 flex items-center justify-center bg-zinc-800 hover:bg-white hover:text-black hover:border-white text-white py-2 rounded transition-all border border-zinc-700"
                                        title="View Resume"
                                    >
                                        <i className='bx bxs-file-pdf text-lg'></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

      </div>
    </header>
  )
}

export default HeaderMinimal;