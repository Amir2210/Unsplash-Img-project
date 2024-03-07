import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext()

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export function AppContext({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  function onToggleTheme() {
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme)
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme', newDarkTheme);
  }
  return (
    <GlobalContext.Provider value={{ isDarkTheme, onToggleTheme }}>
      {children}
    </GlobalContext.Provider>
  )
}