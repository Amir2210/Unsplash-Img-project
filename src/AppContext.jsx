import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext()

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export function AppContext({ children }) {
  return (
    <GlobalContext.Provider value={{}}>
      {children}
    </GlobalContext.Provider>
  )
}