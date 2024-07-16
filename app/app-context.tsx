import { createContext, useState, ReactNode } from "react"

export const AppContext = createContext({
  // grabz says no need to type state setters. what should be inside create context parentheses
  showMenu: false,
  setShowMenu: (show: boolean) => {},
  showEventDialog: false,
  setShowEventDialog: (show: boolean) => {},
})

export default function ContextProvider({ children }: { children: ReactNode }) {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [showEventDialog, setShowEventDialog] = useState<boolean>(false)

  return (
    <AppContext.Provider
      value={{ showMenu, setShowMenu, showEventDialog, setShowEventDialog }}
    >
      {children}
    </AppContext.Provider>
  )
}
