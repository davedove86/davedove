'use client'
import { useEffect, useState } from 'react'
import { FaMoon} from 'react-icons/fa'
import { BsSunFill} from 'react-icons/bs'

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme === 'light')
      setDarkMode(false)
  }, [])

  useEffect(() => {
    if(darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])
  return (
    <div className='relative w-16 h-8 flex items-center dark:bg-gray-900 bg-gray-900 cursor-pointer rounded-full p-1 dark:border-solid dark:border border-white' onClick={() => setDarkMode(!darkMode)}>
      <FaMoon className='text-white size={16}'/>
      <div className='absolute bg-white dark:bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300' style={darkMode ? {left: '2px'} : {right: '2px'}}></div>
      <BsSunFill className='ml-auto text-white size={16}'/>
    </div>
  )
}
export default ThemeToggle
