import { createContext, ReactNode, useState } from "react"

export const AppContext = createContext({
  showMenu: false,
  // eslint-disable-next-line
  setShowMenu: (_show: boolean) => {},
  showEventDialog: false,
  // eslint-disable-next-line
  setShowEventDialog: (_show: boolean) => {},
})

export default function ContextProvider({ children }: { children: ReactNode }) {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [showEventDialog, setShowEventDialog] = useState<boolean>(false)

  return (
    <AppContext.Provider
      value={{
        showMenu,
        setShowMenu,
        showEventDialog,
        setShowEventDialog,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
