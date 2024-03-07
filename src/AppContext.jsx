import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext()

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export function AppContext({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [searchInput, setSearchInput] = useState('otter')

  function onToggleTheme() {
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme)
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme', newDarkTheme);
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