import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa'


const footer = ({darkMode}) => {
  return (
    <footer
    style={{
        background:darkMode 
        ? 'linear-gradient(to bottom,#000000 ,#111827)' 
        : '#f9fafb',
        borderColor:darkMode ? '#374151' : '#e5e7eb',
        color:darkMode 
        ? '#374151' 
        : '#d1d5db'

    }}
    className='border-t'
    >
        <div className='container mx-auto px-4 py-8 '>
            <div className='flex flex-col md:flex-row justify-between items-center gap-6 '>
            {/* Logo */}
                <div className='text-center md:text-left'>
                    <h3
                    className='text-2xl font-bold mb-2 text-orange-500 dark:text-white'
                    >
                        Portfolio

                    </h3>
                    <p className='text-sm'
                    style={{
                        color:darkMode ? '#9ca3af' : '#6b7280'
                    }}>
                        Full Stack Developer & UX/UI Designer      
                    </p>
                </div>
            {/* Links Social Media */}
                <div className='flex gap-4 mt-2 justify-center'>
                        <a href="#" className='text-orange-500 hover:text-orange-600 transition-colors'>
                            <FaFacebookF />
                        </a>
                        <a href="#" className='text-orange-500 hover:text-orange-600 transition-colors'>
                            <FaInstagram />
                        </a>
                        <a href="#" className='text-orange-500 hover:text-orange-600 transition-colors'>
                            <FaGithub />
                        </a>
                        <a href="#" className='text-orange-500 hover:text-orange-600 transition-colors'>
                            <FaLinkedinIn />
                        </a>
                </div>
            {/* Copyright */}
                <div className='text-center md:text-right mt-4'>
                    <p className='text-sm flex items-center justify-end gap-1 text-[#6b7280] dark:text-[#9ca3af]'
                    >
                        @ {new Date().getFullYear()} Made with ❤️ by <span className='text-orange-500'>KatDev</span>
                    </p>
                </div>

            </div>

        </div>
        
    </footer>
  )
}

export default footer