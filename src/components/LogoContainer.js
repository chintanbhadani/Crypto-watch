import {useState, useEffect} from 'react'
import {BsFillMoonFill, BsFillSunFill} from 'react-icons/bs'
import logo from '../assets/logo.png'

function LogoContainer() {
  const [theme, setTheme] = useState([null])

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="dark:bg-stone-700 dark:outline-none dark:border-none flex justify-between shadow-md border px-10">
      <div className="flex items-center gap-2">
        <img className="w-10 h-10" src={logo} alt="logo" />
        <p className="text-2xl text-black text-center my-auto dark:text-white">
          CryptoWatch
        </p>
      </div>

      <button
        onClick={handleThemeSwitch}
        className="bg-stone-900 dark:bg-stone-200 my-3 font-poppins font-normal sm:p-2 p-0 justify-around inline-flex rounded-full"
      >
        <span className="m-1 text-white dark:text-stone-900 font-black">
          {theme !== 'dark' ? <BsFillMoonFill /> : <BsFillSunFill />}
        </span>
      </button>
    </div>
  )
}

export default LogoContainer
