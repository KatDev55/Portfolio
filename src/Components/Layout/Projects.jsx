import React, { useState } from 'react'
import {ProjectsData} from '../../Data/ProjectsData'
import { Code } from 'lucide-react'
import { motion } from 'framer-motion'

const Projects = ({darkMode}) => {

  const [showAllMobile, setShowAllMobile] = useState(false);

  return (
    <section
    id='projects'
    style={{
        backgroundColor:darkMode ? "#111827" : 'initial'
    }}
    className='relative py-24'
    >   
        {/* Intro */}
        <div className='container mx-auto px-4'>
            <div className='text-center mb-10 '
            data-aos="fade-up"
            data-aos-duration="800"
            >
                <h2 
                className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-3'
                style={{
                color:darkMode ? '#fff' : '#000'
                }}>
                    My <span 
                    style={{
                        background:'linear-gradient(to right, #ff7e5f, #feb47b)',
                        WebkitBackgroundClip:'text',
                        backgroundClip:'text',
                        color:'transparent'
                    }}>Projects</span>
                </h2>
                <p className='max-w-xl mx-auto'
                    style={{
                        color:darkMode ? '#fff' : '#000'
                    }}
                >
                    Here are some of my favorite projects that I've worked on. Each project is a testament to my skills and dedication to creating high-quality work.
                </p>

            </div>
        {/* Projects */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 sm:gap-4 mb-12'>
                {ProjectsData.slice(0, 6).map((project,index) => (
                    <div key={index}
                    style={{
                        background:darkMode ? 'linear-gradient(to right, #1f2937, #111827)' : '#ffffff',
                        borderColor: darkMode ? '#374151' : '#e5e7eb',
                        
                    }}
                     className={`max-w-full lg:max-w-full rounded-xl border hover:border-orange-500/50 ${(index >= 4 && !showAllMobile) ? 'hidden md:block lg:block' : 'block'} transition-all duration-300 transform cursor-pointer`}
                     data-aos="fade-up"
                     data-aos-duration="800"
                     data-aos-delay={`${index * 100}`}
                     >
                        <div className='group sm:h-59 md:h-50 lg:h-56 h-48 overflow-hidden rounded-t-xl'>
                            <img src={project.image} alt={project.title} className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500'/>
                        </div>
                        <div className=' p-6 rounded-t-xl'>
                            <h3 className='text-xl font-bold mb-2' 
                            style={{color:darkMode ? '#fff' : '#000'}}>
                            {project.title}
                            </h3>
                            <p className='text-gnit mb-4' 
                            style={{color:darkMode ? '#fff' : '#000'}}>{project.description}</p>
                            {/* Tags Stack*/}
                            <div className='flex flex-wrap gapp-1.5 mb-4'>
                                {project.tags.map((tag,index) => (
                                    <span key={index} className='px-2 py-1 rounded-full text-xs font-semibold'
                                    style={{
                                        background:darkMode 
                                        ? 'linear-gradient(to right, #374151, #4b5563)' 
                                        : '#f3f4f6',
                                        color: darkMode ? '#d1d5db' : '#4b5563',
                                    }}>
                                        {tag}
                                    </span>
                                ))}

                            </div>
                            <div className="flex gap-2  hover:scale-110  transition-all duration-300  cursor-pointer">
                                <a href="#"
                                style={{
                                    backgroundColor:darkMode 
                                    ? "#374151"
                                    :"#f3f4f6",
                                    color:darkMode
                                    ? "#d1d5db"
                                    :"#4b5563"
                                    }}
                                    className='flex-1 flex hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all ease-in-out items-center justify-center gap-1.5 px-3 py-2 text-sm  rounded-lg hover:opacity-90 duration-300'
                                    data-aos="zoom-in"
                                    data-aos-duration="300"
                                    data-aos-delay={`${index * 100}`}
                                    >
                                        <Code/>
                                        <span>Codes</span>
                                    </a>
                            </div>
                        </div>
                        
                    </div>
                ))}

            </div>
                {/* Learn More Button */}
            {!showAllMobile && (
                <div className='flex justify-center md:hidden '>
                    <button 
                    
                    className='px-6 py-3 rounded-lg text-white font-semibold cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out'
                    onClick={() => setShowAllMobile(true)}
                    style={{
                        backgroundColor:darkMode 
                        ? "#374151"
                        :"#f3f4f6",
                        color:darkMode
                        ? "#d1d5db"
                        :"#4b5563"
                        
                    }}
                    data-aos="zoom-in"
                    data-aos-duration="300"
                    data-aos-delay="600"
                    >
                        Learn More
                    </button>
                </div>
            )}
        </div>
        
    </section>
  )
}

export default Projects