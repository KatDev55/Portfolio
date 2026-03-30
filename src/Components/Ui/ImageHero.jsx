import React from 'react'
import {Terminal,Cpu} from 'lucide-react'
import My from "../../assets/My.jpeg"


const ImageHero = ({darkMode}) => {
  return (
    <div className=' w-full sm:max-w-lg max-w-lg lg:max-w-lg lg:mt-0 md:max-w-lg md:ml-12 mt-12  flex justify-center items-center'
    data-aos="fade-left"
    data-aos-delay="400"
    >
        {/* Outer Glow */}
        <div className='absolute inset-0 bg-linear-to-tr from-orange-200/30 to-amber-300/30 rounded-full blur-3xl animate-pulse'>
        </div>
            {/* Main Image */}
            <div className=' w-4/5 sm:w-3/4 md:w-full lg:w-full'>
                <div className=' relative w-full h-full justify-center items-center rounded-full overflow-hidden'>
                    <img src={My} alt="My" 
                    className='object-cover w-full h-full'
                    /> 
                </div>  
            
            </div>
            {/* Floating Element 1 */}
            <div className={`absolute -top-5 right-16 md:right-14 sm:right-20 lg:top-4 lg:-right-8 p-4 rounded-2xl shadow-xl z-20 animate-bounce transition-colors duration-500 ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'}`} style={{animationDuration: '3s'}}>
                <Terminal className="w-12 h-12 text-orange-500 xl:w-24 xl:h-24 xl:p-4 lg:w-20 lg:h-20 lg:p-2 md:w-16 md:h-16 md:p-2"/>
            </div>

            {/* Floating Element 2 */}
            <div className={`absolute -bottom-12 left-20 sm:left-19 md:-bottom-9 lg:bottom-0 lg:-left-12 md:left-12 p-4 rounded-2xl shadow-xl z-20 animate-bounce transition-colors duration-500 ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'}`} style={{animationDuration: '4s', animationDelay: '1s'}}>
                <Cpu className="w-12 h-12 text-blue-500 xl:w-24 xl:h-24 xl:p-4 lg:w-20 lg:h-20 lg:p-2 md:w-16 md:h-16 md:p-2"/>
            </div>
    </div>
  )
}

export default ImageHero