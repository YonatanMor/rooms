import { useContext} from "react"
import { RxHamburgerMenu } from "react-icons/rx"
import Menu from "./menu"
import Logo from "../common/logo"
import { AppContext } from "~/app-context"

export default function TopBar() {
  const {showMenu, setShowMenu} = useContext(AppContext)

  return (
    <>
      <div className="flex items-center justify-start relative top-1 mb-1">
        <div className="ml-3 relative" onClick={() => setShowMenu(true)}>
          <RxHamburgerMenu size={30} />
        </div>
        <Logo />
        <div className="flex justify-center items-center ml-auto mr-3 bg-flag-yellow rounded-full h-11 w-11">
          <img src="/images/user-icon.png" alt="y.m" />
        </div>
      </div>
    <Menu />
    {/* <Menu showMenu={showMenu} setShowMenu={setShowMenu} /> */}
    </>
  )
}
