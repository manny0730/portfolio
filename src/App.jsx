import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Core Components (Keep these static so the layout loads instantly)
import HeaderMinimal from "./components/HeaderMinimal";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; 

// === LAZY IMPORT PAGES ===
// This tells Vite to split these into separate chunks and only load them when needed.

// Main Pages
const HeroMixed = lazy(() => import("./components/HeroMixed")); 
const About = lazy(() => import("./components/pages/About"));

// Extended Reality Pages
const AstraLens = lazy(() => import('./components/pages/AstraLens'));
const TowAR = lazy(() => import('./components/pages/TowAR'));

// Digital Environments Pages
const ArchViz = lazy(() => import("./components/pages/ArchViz"));
const OldShikumen = lazy(() => import("./components/pages/OldShikumen"));
const Intercosmic = lazy(() => import("./components/pages/Intercosmic"));
const LoN = lazy(() => import("./components/pages/LoN"));
const ArchEnv = lazy(() => import("./components/pages/ArchEnv"));
const LuigiMansion = lazy(() => import("./components/pages/LuigiMansion"));
const LiveActionExtension = lazy(() => import("./components/pages/LiveActionExtension"));

// Game Design Pages
const Dusty = lazy(() => import("./components/pages/Dusty"));
const Selfless = lazy(() => import('./components/pages/Selfless'));

// Short Films
const Timekeeper = lazy(() => import("./components/pages/Timekeeper"));
const BigPopCircus = lazy(() => import('./components/pages/BigPopCircus'));

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true })
  }, [])

  return (
    <Router>
        <div className='flex flex-col min-h-screen overflow-x-hidden bg-black text-white'>
          
          {/* Global Scroll To Top Button */}
          <ScrollToTop /> 

          {/* The Suspense component shows a fallback (Loading...) while the new page downloads */}
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="text-zinc-500 font-mono animate-pulse">LOADING...</div>
            </div>
          }>
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
              <Route path="/AstraLens" element={<AstraLens />} />
              <Route path="/TowAR" element={<TowAR />} />
              <Route path="/ArchViz" element={<ArchViz />} />
              <Route path="/OldShikumen" element={<OldShikumen />} />
              <Route path="/Intercosmic" element={<Intercosmic />} />
              <Route path="/LoN" element={<LoN />} />
              <Route path="/ArchEnv" element={<ArchEnv />} />
              <Route path="/LuigiMansion" element={<LuigiMansion />} />
              <Route path="/LiveActionExtension" element={<LiveActionExtension />} />
              <Route path="/Dusty" element={<Dusty />} />
              <Route path="/Selfless" element={<Selfless />} />
              <Route path="/Timekeeper" element={<Timekeeper />} />
              <Route path="/BigPopCircus" element={<BigPopCircus />} />
              
            </Routes>
          </Suspense>

        </div>
    </Router>
  )
}

export default App;