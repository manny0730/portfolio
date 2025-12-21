import 'boxicons/css/boxicons.min.css';

const Footer = () => {
  return (
    <footer className="w-full bg-black py-10 border-t border-zinc-900 relative z-50">
        <div className="container mx-auto px-12 flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* LEFT: Copyright */}
            <div className="text-zinc-500 text-sm text-center md:text-left">
                <p>&copy; {new Date().getFullYear()} Manuel Toledo. All rights reserved.</p>
            </div>

            {/* RIGHT: Transparency Disclaimer */}
            <div className="text-zinc-600 text-xs text-center md:text-right max-w-md leading-relaxed flex flex-col gap-1">
                <p>
                    <i className='bx bxs-bot mr-1 text-violet-400'></i>
                    Website coded with assistance from 
                    <span className="text-zinc-400 font-medium"> Gemini</span>, 
                    revised & assembled by me.
                </p>
                <p>
                    <i className='bx bxs-palette mr-1 text-emerald-500'></i>
                    All art & visual assets are 
                    <span className="text-zinc-300 font-bold tracking-wide"> 100% Human Made (No AI)</span>.
                </p>
            </div>

        </div>
    </footer>
  )
}

export default Footer