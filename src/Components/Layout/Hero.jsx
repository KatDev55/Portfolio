import React from 'react'
import {socialIcons,darkTheme,lightTheme,theme} from '../../Data/HeroData'
import { DownloadIcon, Code2, Terminal, Cpu, Mail } from 'lucide-react'
import HeroImg from '../Ui/HeroImg'
import ImageHero from '../Ui/ImageHero'


// console.log(darkTheme,socialIcons,lightTheme);

const Hero = ({darkMode}) => {
  return (
    
    <div className='overflow-hidden min-h-screen flex flex-col relative'>
      {/* Decorative Circle */}
      {/* <div className='absolute top-0 left-1 -translate-x-1/2 -translate-y-1/2 w-150  h-150 bg-linear-to-tr from-orange-300/30 to-amber-300/2 rounded-full blur-3xl animate-pulse'>
        </div>
      <div className='absolute bottom-0 left-1 translate-y-1/2 lg:w-150 lg:h-150 w-100 sm:w-0 sm:h-0 bg-linear-to-tr from-orange-300/30 to-amber-200/2 rounded-full blur-3xl animate-pulse'>
        </div> */}

        {/* Main Section */}
      <section
      id='home'
      data-aos="fade-up"
      data-aos-duration="250"
      className='body-font z-10 flex-grow flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24'
      >
        <div className='container mx-auto flex px-5 sm:px-8 lg:px-14 flex-col lg:flex-row items-center justify-between gap-12'>
          
          {/* Text Content */}
          <div className='lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mt-8 lg:mt-0 order-2 lg:order-1'>
              <h1 className={`title-font text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 mt-4 ${theme(darkMode).textPrimary}`}
              data-aos="fade-up"
              data-aos-delay="500"
              >
                Hi, I'm KatDev<span className="text-orange-500">.</span>
              </h1>
              <p className={`mb-8 sm:mb-10 text-base sm:text-lg leading-relaxed max-w-md sm:max-w-xl ${theme(darkMode).textSecondary}`}
              data-aos="fade-up"
              data-aos-delay="700"
              >
                I'm a passionate developer who loves building cool stuff. Creating stunning digital experiences with code is my superpower. Let's turn your ideas into reality.
              </p>
              {/* Social Icons */}
              <div className='flex justify-center flex-wrap lg:justify-start gap-4 sm:gap-6 w-full mb-8'
              data-aos="fade-up"
              data-aos-delay="800"
              >
                {socialIcons.map((item,index) => (
                  <a
                  key={index}
                  href={item.link}
                  target='_blank'
                  data-aos-delay={`${400 + index * 100}`}
                  className='transform hover:scale-110 transition-transform duration-300 cursor-pointer'>
                    <img
                    src={item.icon}
                    alt={item.alt}
                    className={`w-10 h-10 sm:w-10 sm:h-10 object-contain ${darkMode 
                    ? 'filter brightness-100'
                    : 'filter brightness-100'}`}/>
                  </a>
                ))}
              </div>
              {/* Button CV*/}
              <div className='w-full'>
                <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-4'
                data-aos="fade-up"
                data-aos-delay="700"
                >
                  <a href="{Cv}" download className='w-full sm:w-auto'>
                    <button className='w-full sm:w-auto inline-flex items-center border-2 border-orange-500/30 justify-center text-white bg-linear-to-r from-orange-500 to-amber-500 py-3 px-6 sm:px-8 shadow-[0_0_20px_rgb(255,165,0,0.5)] hover:shadow-[0_0_40px_rgb(255,165,0,0.5)] hover:scale-105 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform cursor-pointer'>
                      <DownloadIcon className='w-4 h-4 sm:w-5 sm:h-5 mr-2'/>
                      Download CV
                    </button>
                  </a>
                  <a href="#contact" className='w-full sm:w-auto'>
                    <button className={`w-full sm:w-auto inline-flex items-center ${theme(darkMode).buttonSecondary} justify-center border-0 py-3 px-6 sm:px-8 shadow-[0_0_20px_rgb(255,165,0,0.5)] hover:border-none hover:shadow-[0_0_40px_rgb(255,165,0,0.5)] hover:scale-105 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform cursor-pointer`}>
                      <Mail className='w-4 h-4 sm:w-5 sm:h-5 mr-2'/>
                      Contact Me
                    </button>
                  </a>
                </div>
              </div>
          </div>

          {/* Image Content */}
          <div className='lg:w-1/2 w-full flex justify-center lg:justify-end order-1 lg:order-2'>
            <ImageHero darkMode={darkMode}/>
          </div>
        
        </div>
      </section>
    </div>
  )
}

export default Hero