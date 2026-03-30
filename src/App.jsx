import React, { useState ,useEffect} from 'react'
import Navbar from './Components/Layout/Navbar'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from './Components/Layout/Hero'
import About from './Components/Layout/About'
import Skills from './Components/Layout/Skills'
import Projects from './Components/Layout/Projects'
import Contect from './Components/Layout/Contect'
import Footer from './Components/Layout/footer'

const App = () => {
  const [darkMode,setDarkMode] = useState(true)

  useEffect(() => {
    AOS.init({
      duration:1000,
      once:false,
      offset:100,
    });
    document.documentElement.classList.add('dark');
  },[])

  useEffect(() => {
    AOS.refresh();
  },[darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  }

  return (
    <div className={`
      relative overflow-hidden

      ${darkMode 
      ? 'bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen ' 
      : 'bg-linear-to-br from-gray-50 to-blue-50 min-h-screen '}
    `}>

      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Hero darkMode={darkMode}/>
      <About darkMode={darkMode}/>
      <Skills darkMode={darkMode}/>
      <Projects darkMode={darkMode}/>
      <Contect darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>

      <div className='absolute top-0 left-1 -translate-x-1/2 -translate-y-1/2 w-150  h-150 bg-linear-to-tr from-orange-300/30 to-amber-300/2 rounded-full blur-3xl animate-pulse'>
        </div>
      <div className='absolute bottom-0 left-1 translate-y-1/2 lg:w-150 lg:h-150 w-100 sm:w-0 sm:h-0 bg-linear-to-tr from-orange-300/30 to-amber-200/2 rounded-full blur-3xl animate-pulse'>
        </div>
      <div className='absolute top-300  -right-80 translate-y-1/2 lg:w-150 lg:h-150 w-100 sm:w-0 sm:h-0 bg-linear-to-tr from-orange-300/30 to-amber-200/2 rounded-full blur-3xl animate-pulse overflow-hidden'>
        </div>
    </div>
  )
}

export default App