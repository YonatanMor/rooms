import { AnimatePresence, motion } from "framer-motion"
import { GoGear } from "react-icons/go"
import { IoTodayOutline } from "react-icons/io5"
import { LiaCalendarAlt } from "react-icons/lia"
import { MdArrowBackIosNew } from "react-icons/md"
import { RiAdminLine } from "react-icons/ri"
import { SlLogout } from "react-icons/sl"
import { NavLink } from "react-router-dom"
import Logo from "~/components/common/logo"

export default function Menu({
  showMenu,
  setShowMenu,
  onClose,
}: {
  showMenu: boolean
  setShowMenu: (show: boolean) => void
  onClose: () => void
}) {
  // const { showMenu, setShowMenu } = useContext(AppContext)
  // const [showMenu, setShowMenu] = useState(false)
  const slideMenuVariants = {
    open: { x: 0 }, 
    closed: { x: "-100%" },
  }

  return (
    <AnimatePresence>
      {showMenu && (
        <motion.div
          key="menu"
          variants={slideMenuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          transition={{
            type: "spring",
            damping: 40,
            stiffness: 400,
          }}
          onClick={() => onClose()}
          className="absolute z-50 h-full bg-black bg-opacity-30 backdrop-blur-[1px] w-full"
        >
          <div
            className="absolute z-50 h-full w-[76%] rounded-r-3xl bg-gradient-to-r from-[#ebecef] to-[#F5F7F8] text-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-10/12">
              <div className="flex items-center">
                <div
                  onClick={() => onClose()}
                  className="absolute flex h-8 w-10 items-center justify-center"
                >
                  <MdArrowBackIosNew size={20} />
                </div>
                <div className="my-4 ml-[35px]">
                  <Logo />
                </div>
              </div>
              <nav>
                <div className="bg-[#e3e9e9]  rounded-r-lg pr-3 py-3">
                  <NavLink to="/" onClick={() => setShowMenu(false)}>
                    {({ isActive }) => {
                      return (
                        <div
                          className={`
                            ${
                              isActive ? "bg-[#6EACDA]" : ""
                            } flex h-10 items-center justify-start rounded-r-full
                          `}
                        >
                          <span className="relative left-10 text-xl">
                            Table
                          </span>
                          <IoTodayOutline
                            size={23}
                            className="absolute left-2"
                          />
                        </div>
                      )
                    }}
                  </NavLink>

                  <NavLink to="/go-to-date" end onClick={() => setShowMenu(false)}>
                    {({ isActive }) => (
                      <div
                        className={`
                            ${
                              isActive ? "bg-menu-500" : ""
                            } flex h-10 items-center justify-start rounded-r-full
                          `}
                      >
                        <span className="relative left-10 text-xl">
                          Go to date
                        </span>
                        <LiaCalendarAlt
                          size={29}
                          className="absolute left-[5px]"
                        />
                      </div>
                    )}
                  </NavLink>

                  <NavLink to="/admin-menu" onClick={() => setShowMenu(false)}>
                    {({ isActive }) => {
                      return (
                        <div
                          className={`
                            ${
                              isActive ? "bg-menu-500" : ""
                            } flex h-10 items-center justify-start rounded-r-full
                          `}
                        >
                          <span className="relative left-10 text-xl">
                            Admin
                          </span>
                          <RiAdminLine
                            size={23}
                            className="absolute left-[7px]"
                          />
                        </div>
                      )
                    }}
                  </NavLink>

                  <NavLink to="/settings" onClick={() => setShowMenu(false)}>
                    {({ isActive }) => {
                      return (
                        <div
                          className={`
                            ${
                              isActive ? "bg-menu-500" : ""
                            } flex h-10 items-center justify-start rounded-r-full
                          `}
                        >
                          <span className="relative left-10 text-xl">
                            Settings
                          </span>
                          <GoGear size={21} className="absolute left-[9px]" />
                        </div>
                      )
                    }}
                  </NavLink>

                  <NavLink to="/login" end onClick={() => setShowMenu(false)}>
                    {({ isActive }) => (
                      <div
                        className={`
                            ${
                              isActive ? "bg-menu-500" : ""
                            } flex h-10 items-center justify-start rounded-r-full
                          `}
                      >
                        <span className="relative left-10 text-xl">Logout</span>
                        <SlLogout size={23} className="absolute left-1" />
                      </div>
                    )}
                  </NavLink>
                </div>
              </nav>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
