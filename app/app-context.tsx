import { createContext, useState, ReactNode } from "react"

export const AppContext = createContext({
  // grabz says no need to type state setters. what should be inside create context parentheses
  showMenu: false,
  setShowMenu: (show: boolean) => {},
  showEventDialog: false,
  setShowEventDialog: (show: boolean) => {},
  isDark: false,
  setIsDark: (show: boolean) => {},
})

export default function ContextProvider({ children }: { children: ReactNode }) {
  // const x = localStorage.getItem("theme")
  // console.log(x)

  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [showEventDialog, setShowEventDialog] = useState<boolean>(false)
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const theme = localStorage.getItem("theme")
      return theme ? JSON.parse(theme) : false // Default to false if no theme is found
    }
    return false // Default value for server-side rendering
  })

  return (
    <AppContext.Provider
      value={{
        showMenu,
        setShowMenu,
        showEventDialog,
        setShowEventDialog,
        isDark,
        setIsDark,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
