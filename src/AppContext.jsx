import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext()

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export function AppContext({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  function onToggleTheme() {
    setIsDarkTheme(!isDarkTheme)
  }
  return (
    <GlobalContext.Provider value={{}}>
      {children}
    </GlobalContext.Provider>
  )
}