import { useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx"
import Logo from "../common/logo"
import Menu from "./menu"

export default function TopBar() {
  // const {setShowMenu} = useContext(AppContext)
  const [showMenu, setShowMenu] = useState(false) // there is an exsect same state in app-context

  return (
    <>
      <div className="relative top-1 mb-1 flex items-center justify-start ">
        <div className="relative ml-3 top-[-1px]" onClick={() => setShowMenu(true)}>
          <RxHamburgerMenu size={25} />
        </div>
        <Logo />
          {/* <div className="ml-auto mr-3 flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white">
            <img src="/images/user-icon.png" alt="y.m"/>
          </div> */}
      </div>
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} onClose={() => setShowMenu(false)} />
    </>
  )
}
