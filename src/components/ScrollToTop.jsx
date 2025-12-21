import { useState, useEffect } from 'react';
import 'boxicons/css/boxicons.min.css';

const ScrollToTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button if scrolled down more than 500px
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={handleScrollToTop}
      // Fixed position with high Z-index to float above Footer
      className={`fixed bottom-8 right-8 z-[100] bg-white text-black w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-zinc-200 transition-all duration-300 ${
        showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <i className='bx bxs-chevron-up text-3xl'></i>
    </button>
  );
};

export default ScrollToTop;