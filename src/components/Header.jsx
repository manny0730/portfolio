import 'boxicons/css/boxicons.min.css'

const Header = () => {
  return (
    <header data-aos="fade-down"
      data-aos-easing="linear" className='z-10 flex justify-between mb-5 pt-5 items-center'>
      
      {/* LOGO SECTION */}
      {/* CHANGED: Set href to "#hero" to scroll to the top/hero section */}
      <a href="/#hero" className="w-[30px] md:w-[40px] hover:opacity-80 transition-opacity">
        <img 
          src="/logo.svg" 
          alt="Manuel Toledo Logo" 
          className="w-full h-auto object-contain" 
        />
      </a>

      <div className='flex gap-5'>        
        {/* LinkedIn Button */}
        <a 
          className='text-2xl hover:text-gray-500 duration-300' 
          href="https://www.linkedin.com/in/manueltoledo0730"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className='bx bxl-linkedin'></i>
        </a>

        {/* Resume Button */}
        <a 
          className='text-2xl hover:text-gray-500 duration-300' 
          href="/Manuel_Toledo_Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          title="View Resume"
        >
          <i className='bx bxs-file-pdf'></i>
        </a>
      </div>
    </header>
  )
}

export default Header