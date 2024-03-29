import { useGlobalContext } from '../AppContext'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
export function ThemeToggle() {
  const { isDarkTheme, onToggleTheme } = useGlobalContext()
  return (
    <section className="toggle-container">
      <button onClick={onToggleTheme} className="dark-toggle">{isDarkTheme ? <BsFillSunFill className='toggle-icon' /> : <BsFillMoonFill className='toggle-icon' />}</button>
    </section>
  )
}