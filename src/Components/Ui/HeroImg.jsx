import React from 'react'
import {Terminal,Cpu} from 'lucide-react'


const HeroImg = ({darkMode}) => {
  return (
    
          <div className='lg:w-1/2 w-full mt-16 lg:mt-0 flex justify-center items-center relative' data-aos="zoom-in" data-aos-delay="400">
            <div className='relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px]'>
              {/* Outer Glow */}
              <div className='absolute inset-0 bg-linear-to-tr from-orange-500/30 to-amber-300/30 rounded-full blur-2xl animate-pulse'></div>
              
              {/* Main Circle */}
              <div className={`absolute inset-4 rounded-full border-2 shadow-2xl overflow-hidden flex items-center justify-center transition-colors duration-500 ${darkMode ? 'border-orange-500/50 bg-gray-800' : 'border-orange-400/50 bg-white'}`}>
                {/* Pattern Background inside circle */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{backgroundImage: 'radial-gradient(#f97316 2px, transparent 2px)', backgroundSize: '24px 24px'}}></div>
                {/* Developer Emoji / Icon */}
                <span className="text-8xl sm:text-[120px] lg:text-[140px] drop-shadow-xl transform hover:scale-110 transition-transform duration-500 cursor-pointer user-select-none">
                  👨‍💻 
                  </span>
              </div>

              {/* Floating Element 1 */}
              <div className={`absolute -top-4 -right-4 lg:top-4 lg:-right-8 p-4 rounded-2xl shadow-xl z-20 animate-bounce transition-colors duration-500 ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'}`} style={{animationDuration: '3s'}}>
                <Terminal className="w-8 h-8 text-orange-500"/>
              </div>

              {/* Floating Element 2 */}
              <div className={`absolute -bottom-4 -left-4 lg:bottom-10 lg:-left-12 p-4 rounded-2xl shadow-xl z-20 animate-bounce transition-colors duration-500 ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'}`} style={{animationDuration: '4s', animationDelay: '1s'}}>
                <Cpu className="w-8 h-8 text-blue-500"/>
              </div>
            </div>
          </div>
  )
}

export default HeroImg