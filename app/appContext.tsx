import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react"

interface AppContextType {
  showMenu: boolean
  setShowMenu: Dispatch<SetStateAction<boolean>>
}

// export const AppContext = createContext<AppContextType | undefined>(undefined)
export const AppContext = createContext({
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

// export const AppProvider = ({ children }) => {
//   const [showMenu, setShowMenu] = useState(false);

//   return (
//     <AppContext.Provider value={{ showMenu, setShowMenu }}>
//       {children}
//     </AppContext.Provider>
//   );
// };
