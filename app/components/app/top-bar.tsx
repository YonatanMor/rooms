import { useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx"
import Logo from "../common/logo"
import Menu from "./menu"

export default function TopBar() {
  const [showMenu, setShowMenu] = useState(false) 

  return (
    <>
      <div className="relative top-1 mb-1 flex items-center justify-start ">
        <div className="relative ml-3 top-[-1px]" onClick={() => setShowMenu(true)}>
          <RxHamburgerMenu size={25} />
        </div>
        <Logo />
      </div>
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} onClose={() => setShowMenu(false)} />
    </>
  )
}
