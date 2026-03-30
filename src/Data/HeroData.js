import facebook from '../assets/Facebook.png'
import github from '../assets/github.jpg'
import instagram from '../assets/instagram.jpg'
import linkedin from '../assets/linkedin.jpg'
import { Terminal,Cpu } from 'lucide-react'

export const socialIcons = [
        {icon: instagram,alt:"Instagram",link:""},
        {icon: github,alt:"Github",link:""},
        {icon: linkedin,alt:"Linkedin",link:""},
        {icon: facebook,alt:"Facebook",link:""},
    ]

export const darkTheme = {
        textPrimary:"text-white",
        textSecondary:"text-gray-300",
        buttonSecondary:"text-white border-2 border-orange-400 hover:bg-linear-to-r from-orange-500 to-amber-500 hover:text-white",
        decorativeCircle:"bg-orange-500 opacity-10",
      }
export const lightTheme = {
        textPrimary:"text-gray-900",
        textSecondary:"text-gray-700",
        buttonSecondary:"text-gray-800 border-2 border-orange-500 hover:bg-linear-to-r from-orange-500 to-amber-500 hover:text-white",
        decorativeCircle:"bg-orange-500 opacity-20",
      }

export const theme = (darkMode) => {
    return darkMode ? darkTheme : lightTheme
}


