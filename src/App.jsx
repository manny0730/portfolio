import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import HeaderMinimal from "./components/HeaderMinimal";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; 

// Pages
import HeroMixed from "./components/HeroMixed"; 
import Intercosmic from "./components/pages/Intercosmic";
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
            <Route path="/Intercosmic" element={<Intercosmic />} />
            <Route path="/Dusty" element={<Dusty />} />
            
          </Routes>

        </div>
    </Router>
  )
}

export default App;