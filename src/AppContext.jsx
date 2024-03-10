import { createContext, useContext, useEffect, useState } from 'react'

const GlobalContext = createContext()

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const storedDarkMode = localStorage.getItem('darkTheme');

  if (storedDarkMode === null) {
    return prefersDarkMode;
  }

  return storedDarkMode === 'true';
}

export function AppContext({ children }) {

  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode())
  const [searchInput, setSearchInput] = useState('panda')

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }, [isDarkTheme]);

  function onToggleTheme() {
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme)
    localStorage.setItem('darkTheme', newDarkTheme)
  }
  function onSearchImgs(input) {
    const newSearchInput = input
    setSearchInput(newSearchInput)
  }
  return (
    <GlobalContext.Provider value={{ isDarkTheme, onToggleTheme, onSearchImgs, searchInput }}>
      {children}
    </GlobalContext.Provider>
  )
}