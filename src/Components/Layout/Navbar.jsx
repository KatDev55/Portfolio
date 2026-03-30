import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { Sun,Moon,Menu,X } from 'lucide-react';


const Navbar = ({darkMode,toggleDarkMode}) => {
    const [activeSection,setActiveSection] = useState('home');
    const [isMenuOpen,setIsMenuOpen] = useState(false);

    // Data Menu แยก
    const navItems =[
        {name:'Home',link:"#home"},
        {name:'About',link:"#about"},
        {name:'Skills',link:"#skills"},
        {name:'Projects',link:"#projects"},
        {name:'Contact',link:"#contact"},
    ]

    // Data Color Theme DarkMode and LightMode แยก
    const lightColor = {
        navBg: "bg-linear-to-br from-orange-300 to-white",
        textPrimary: "text-gray-900",
        textSecondary: "text-gray-800",
        textHover: "text-orange-500",
        textActive: "text-orange-600",
        indicator: "from-orange-500 to-amber-500",
        button: "from-orange-500 to-amber-500",
    }

    const darkColor = {
        navBg: "bg-linear-to-br from-gray-700 to-black",
        textPrimary: "text-white",
        textSecondary: "text-gray-300",
        textHover: "text-orange-400",
        textActive: "text-orange-400",
        indicator: "from-orange-500 to-amber-500",
        button: "from-orange-500 to-amber-500",
    }

    // Color Context props 
    const colors = darkMode ? darkColor : lightColor;

    // follow Active Menu like แยก
    const handleNavClick = (e, itemName, link) => {
        e.preventDefault();
        setIsMenuOpen(false);
        const element = document.querySelector(link);
        if (element) {
            // Get accurate position relative to document
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - 100; // Offset for navbar

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            // Set active section immediately for snappier UI
            setActiveSection(itemName.toLowerCase());
        }
    }

    useEffect(() => {
        let isScrolling;
        const handleScroll = () => {
            if (isScrolling) return;
            isScrolling = requestAnimationFrame(() => {
                // Focus slightly below the navbar for better section detection
                const scrollPosition = window.scrollY + (window.innerHeight / 3);
                
                let currentSection = activeSection;
                for (const item of navItems) {
                    const element = document.querySelector(item.link);
                    if (element) {
                        const top = element.getBoundingClientRect().top + window.scrollY;
                        const height = element.offsetHeight;
                        
                        if (scrollPosition >= top && scrollPosition < top + height) {
                            currentSection = item.name.toLowerCase();
                        }
                    }
                }
                
                if (currentSection !== activeSection) {
                    setActiveSection(currentSection);
                }
                isScrolling = null;
            });
        };
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);
  return (
    <div className='flex justify-center w-full fixed left-0 right-0 top-0 z-50 pt-4 px-4 sm:px-0 pointer-events-none'>
    {/* Box Nav */}
        <motion.nav
        initial={{y:-100}}
        animate={{y:0}}
        transition={{duration:0.5}}
        className={`pointer-events-auto flex items-center justify-between ${colors.navBg}
        backdrop-blur-lg rounded-2xl px-4 lg:px-6 py-3 shadow-lg w-full lg:max-w-4xl md:max-w-2xl sm:max-w-xl
        }`}> 
    {/* Syntax */}
            <div className='flex items-center justify-between w-full'>
                {/* Logo */}
                    <motion.a 
                    href="#home"
                    whileHover={{scale: 1.05}}
                    className='flex items-center shrink-0'
                    >
                        <span 
                    className={`text-xl font-bold ${colors.textPrimary}`}>
                            Portfolio<span
                            className={`text-orange-500`}>
                                .</span>
                        </span>
                    </motion.a>
                    
                {/* Right Side: Menu + Buttons */}
                    <div className='flex items-center justify-between gap-4 lg:gap-6'>
                        
                        {/* Menu Link (Desktop) */}
                        <div className='hidden md:flex items-center space-x-6 cursor-pointer user-select-none'>
                            {
                                navItems.map((item,index) => (
                                    <a 
                                    key={index}
                                    href={item.link}
                                    onClick={(e) => handleNavClick(e, item.name, item.link)}
                                    className={`relative py-2`}>
                                        <motion.span
                                        className={`font-medium transition-colors duration-300 
                                        ${activeSection === item.name.toLowerCase() 
                                        ? colors.textActive 
                                        : colors.textSecondary} hover:text-orange-500`}
                                        whileHover={{scale:1.05}}
                                        whileTap={{scale:0.95}}>
                                            {item.name}
                                        </motion.span>
                                        {activeSection === item.name.toLowerCase() && (
                                            <motion.div
                                            layoutId="navbar-indicator"
                                            className={`absolute bottom-0 left-0 right-0 w-full h-0.5 bg-linear-to-r rounded-full
                                            ${colors.indicator}`}
                                            >
                                            </motion.div>
                                        )}
                                    </a>
                                ))
                            }
                        </div>

                        {/* Buttons (Toggle & Hire Me) */}
                        <div className='flex items-center'>
                            {/* Toggle Dark Mode */}
                            <motion.button
                            onClick={toggleDarkMode}    
                            whileHover={{scale:1.1}}
                            whileTap={{scale:0.9}}
                            className={`p-2 rounded-full ${darkMode
                                ? 'bg-gray-700'
                                : 'bg-white/70 shadow-lg'
                            } transition-colors cursor-pointer shadow-md`}
                            aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                            >
                                {darkMode ? (
                                    <Sun className="w-5 h-5 text-yellow-300" />
                                ) : (
                                    <Moon className="w-5 h-5 text-purple-600/70"/>
                                )}
                            </motion.button>
                            {/* Button Contact*/}
                            <motion.a
                            href="#contact"
                            onClick={(e) => handleNavClick(e, 'Contact', '#contact')}
                            whileHover={{scale:1.05}}
                            whileTap={{scale:0.95}}
                            className={`hidden lg:block px-6 py-2 ml-4 font-semibold rounded-full bg-linear-to-r ${colors.button} text-white shadow-md hover:shadow-lg transition-shadow`}>
                                Hire me
                            </motion.a>
                        </div>

                        {/* Button Mobile Menu Toggle */}
                        <div className='flex lg:hidden items-center'>
                            <motion.button
                            whileTap={{scale:0.9}}
                            whileHover={{scale:1.05}}
                            onClick={()=> setIsMenuOpen(!isMenuOpen)}
                            className={`p-2 rounded-lg cursor-pointer
                                ${isMenuOpen 
                                ? 'bg-red-400' 
                                : darkMode 
                                ? 'bg-gray-700 shadow-lg' 
                                : 'bg-white/70 shadow-lg'}`}
                            >
                                {isMenuOpen ? (
                                    <X className={`w-5 h-5 text-white`}/>
                                ) : (
                                    <Menu className={`w-5 h-5 ${darkMode 
                                        ? 'text-white' 
                                        : 'text-gray-700'}`}/>
                                )}
                            </motion.button>
                        </div>
                    </div>
            </div>
            {/* Menu Mobile Open  แยกไฟล์*/}
            {isMenuOpen && (
                <motion.div
                initial={{opacity:0,height:0}}
                animate={{opacity:1,height:"auto"}}
                exit={{opacity:0,height:0}}
                transition={{duration:0.3,ease:"easeInOut"}}
                className={`absolute top-full left-0 right-0 mt-2 lg:hidden 
                    ${darkMode 
                        ? 'bg-gray-900/95' 
                        : 'bg-white/95'} 
                        backdrop-blur-lg rounded-xl shadow-lg border 
                        ${darkMode 
                            ? 'border-gray-700' 
                            : 'border-gray-200'}`}
                >
                    <div className='px-4 py-3 space-y-2'>
                        {
                            navItems.filter(item => item.name !== 'Contact').map((item,index) => (
                                <a
                                key={index}
                                href={item.link}
                                onClick={(e) => handleNavClick(e, item.name, item.link)}
                                className="block"
                                >
                                {/* Box Active Hover Menu */}
                                    <motion.div
                                    whileHover={{x:3}}
                                    className={`py-3 px-4 rounded-lg text-center 
                                        ${
                                            activeSection === item.name.toLowerCase()
                                            ? darkMode ? "bg-gray-800" : "bg-orange-200/40"
                                            : ""
                                        }`}
                                    >
                                        <span
                                        className={`font-medium ${
                                            activeSection === item.name.toLowerCase()
                                            ? colors.textActive
                                            : colors.textSecondary

                                        }`}
                                        >
                                            {item.name}
                                        </span>
                                    </motion.div>
                                </a>

                            ))
                        }
                    {/* Button Contact me */}
                        <motion.a 
                        href="#contact"
                        onClick={(e) => handleNavClick(e, 'Contact', '#contact')}
                        whileTap={{scale:0.95}}
                        className={`block py-3 px-4 rounded-lg text-center font-semibold bg-linear-to-r ${colors.button} text-white shadow-md hover:shadow-lg transition-shadow`}>
                            Contact Me
                        </motion.a>
                        
                    </div>

                </motion.div>
            )
                
            }
        </motion.nav>

    </div>
  )
}

export default Navbar