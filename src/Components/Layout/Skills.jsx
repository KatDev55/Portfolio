import React from 'react'

const Skills = ({darkMode}) => {
  return (
    <section
    id='skills'
    style={{
        backgroundColor:darkMode ? '#111827' : '#f9fafb',
        
    }}
    className={`py-10 relative overflow-hidden`}
    >
        <div className='py-14 relative overflow-hidden'>
            <div className='container px-5 py-14 mx-auto'>
                <div className='text-center mb-20'
                data-aos='fade-up'
                data-aos-delay='300'>
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-transparent bg-linear-to-r from-orange-400 to-amber-600 bg-clip-text'
                    data-aos='fade-up'
                    data-aos-delay='400'>
                        <span className={` ${darkMode ? 'text-white' : 'text-gray-700'}`}>My</span> Skills
                    </h2>
                    <p className={`text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed mb-6 sm:mb-8 bg-linear-to-r from-[#bdc3c7] to-[#2c3e50] p-4 sm:p-6 rounded-xl backdrop-blur-sm
                    ${darkMode 
                    ? 'text-gray-300' 
                    : 'text-gray-700'}`}
                    data-aos='fade-up'
                    data-aos-delay='500'>
                        Menu of my skills Cards
                    </p>

                </div>
            </div>
        </div>

    </section>
  )
}

export default Skills