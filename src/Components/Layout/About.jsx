import React from 'react'
import My from '../../assets/My.jpeg'
import {theme,socialIcons,darkTheme,lightTheme} from '../../Data/HeroData'

const About = ({darkMode}) => {
  return (
    <section 
        id='about' 
        className={`min-h-screen relative z-0 flex items-center justify-center px-4 sm:px-6 ${
            darkMode 
            ? 'bg-gray-900'
            : 'bg-gray-50'
        }`}
    >
        {/* Background Decorative Elements */}
        {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <div className={`absolute top-[20%] left-[10%] w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob ${darkMode ? 'bg-purple-600' : 'bg-purple-300'}`}></div>
            <div className={`absolute top-[40%] right-[10%] w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 ${darkMode ? 'bg-indigo-600' : 'bg-indigo-300'}`}></div>
        </div> */}
        <div className=' max-w-8xl lg:max-w-7xl md:max-w-3xl sm:max-w-2xl w-full grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8 sm:gap12 items-center'>
            <figure 
            data-aos="fade-up"
            data-aos-delay="300"
            className='flex flex-wrap justify-center gap-4 relative order-2 lg:order-1'
            >
                <div className='relative w-96 h-96 md:w-87 md:h-87 lg:w-105 lg:h-105'>
                    {/* Image */}
                    <div className='absolute -inset-4 lg:-inset-20 bg-linear-to-tr from-orange-300/50 to-amber-500/2 filter blur-3xl rounded-full'>
                    </div>
                    
                        <img src={My} alt="My" className='w-full h-full object-cover rounded-lg '
                        data-aos="zoom-in"
                        data-aos-delay="400"
                        />

                </div>

            </figure>

            <article
            data-aos="fade-left"
            data-aos-delay="300"
            className='text-center lg:text-left relative order-1 lg:order-2'

            >
                <header className='ml-4 flex justify-center lg:justify-start'>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-transparent bg-linear-to-r from-orange-400 to-amber-600 bg-clip-text'
                    data-aos="fade-up"
                    data-aos-delay="400"
                    >
                        About Me
                    </h1>
                </header>
                <p className={`text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed mb-6 sm:mb-8 bg-linear-to-r from-orange-900/10 to-amber-900/5 p-4 sm:p-6 rounded-xl backdrop-blur-sm
                ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                data-aos="fade-up"
                data-aos-delay="500"
                >
                    I'm a passionate developer who loves building cool stuff. Creating stunning digital experiences with code is my superpower. Let's turn your ideas into reality.
                </p>
                {/* Info */}
                <div className='flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 sm:mb-2'>
                    <div
                    className='flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8'>
                        <div
                        className='text-center'
                        data-aos="zoom-in"
                        data-aos-delay="600"
                        >
                            <div 
                            className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-transparent bg-linear-to-r from-orange-400 to-amber-600 bg-clip-text'
                            >
                                2+
                            </div>
                            <div className={`text-xs sm:text-sm lg:text-base xl:text-lg 
                                ${darkMode 
                                ? 'text-gray-300' 
                                : 'text-gray-700'}`}>
                                Education
                            </div>
                            
                        </div>

                    </div>
                    <div
                    className='flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8'>
                        <div
                        className='text-center'
                        data-aos="zoom-in"
                        data-aos-delay="650"
                        >
                            <div 
                            className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-transparent bg-linear-to-r from-orange-400 to-amber-600 bg-clip-text'
                            >
                                5+
                            </div>
                            <div className={`text-xs sm:text-sm lg:text-base xl:text-lg 
                                ${darkMode 
                                ? 'text-gray-300' 
                                : 'text-gray-700'}`}>
                                Years of Experience
                            </div>
                            
                        </div>

                    </div>
                    <div
                    className='flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8'>
                        <div
                        className='text-center'
                        data-aos="zoom-in"
                        data-aos-delay="700"
                        >
                            <div 
                            className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-transparent bg-linear-to-r from-orange-400 to-amber-600 bg-clip-text'
                            >
                                10+
                            </div>
                            <div className={`text-xs sm:text-sm lg:text-base xl:text-lg 
                                ${darkMode 
                                ? 'text-gray-300' 
                                : 'text-gray-700'}`}>
                                Projects
                            </div>
                            
                        </div>

                    </div>
                </div>
                {/* Button Learn More */}
                <button className={`w-full sm:w-auto inline-flex items-center ${theme(darkMode).buttonSecondary} justify-center border-0 py-3 px-6 sm:px-16 shadow-[0_0_20px_rgb(255,165,0,0.5)] hover:border-none hover:shadow-[0_0_40px_rgb(255,165,0,0.5)] hover:scale-105 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform ${
                    darkMode 
                    ? 'text-gray-300 bg-orange-500' 
                    : 'text-gray-700 bg-white/90'
                } cursor-pointer`}
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay="600">
                    Learn More
                </button>
                
            </article>
        </div>

        

        
    </section>
  )
}

export default About