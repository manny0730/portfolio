import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import HeaderMinimal from "./components/HeaderMinimal";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; 

// Main Pages
import HeroMixed from "./components/HeroMixed"; 
import About from "./components/pages/About";

// Digital Envrionments Pages
import ArchViz from "./components/pages/ArchViz";
import OldShikumen from "./components/pages/OldShikumen";
import Intercosmic from "./components/pages/Intercosmic";
import LoN from "./components/pages/LoN";
import ArchEnv from "./components/pages/ArchEnv";
import LuigiMansion from "./components/pages/LuigiMansion";
import LiveActionExtension from "./components/pages/LiveActionExtension";

// Game Design Pages
import Dusty from "./components/pages/Dusty";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true })
  }, [])

  return (
    <Router>
        <div className='flex flex-col min-h-screen overflow-x-hidden bg-black text-white'>
          
          {/* Global Scroll To Top Button */}
          <ScrollToTop /> 

          <Routes>
            {/* HOME PAGE */}
            <Route path="/" element={
                <>
                    <HeaderMinimal />
                    <HeroMixed />
                    <Footer />
                </>
            } />

            {/* PROJECT PAGES */}
            <Route path="/About" element={<About />} />
            <Route path="/ArchViz" element={<ArchViz />} />
            <Route path="/OldShikumen" element={<OldShikumen />} />
            <Route path="/Intercosmic" element={<Intercosmic />} />
            <Route path="/LoN" element={<LoN />} />
            <Route path="/ArchEnv" element={<ArchEnv />} />
            <Route path="/LuigiMansion" element={<LuigiMansion />} />
            <Route path="/LiveActionExtension" element={<LiveActionExtension />} />
            <Route path="/Dusty" element={<Dusty />} />
            
          </Routes>

        </div>
    </Router>
  )
}

export default App;