import { useContext, useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx"
import Menu from "./menu"
import Logo from "../common/logo"
import { AppContext } from "~/app-context"

export default function TopBar() {
  // const {setShowMenu} = useContext(AppContext)
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <div className="relative top-1 mb-1 flex items-center justify-start">
        <div className="relative ml-3" onClick={() => setShowMenu(true)}>
          <RxHamburgerMenu size={30} />
        </div>
        <Logo />
        <div className="ml-auto mr-3 flex h-11 w-11 items-center justify-center rounded-full bg-flag-yellow">
          <img src="/images/user-icon.png" alt="y.m" />
        </div>
      </div>
      {/* <Menu /> */}
      <Menu showMenu={showMenu} onClose={() => setShowMenu(false)} />
    </>
  )
}
