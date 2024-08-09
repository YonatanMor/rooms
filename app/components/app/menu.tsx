import { AnimatePresence, motion } from "framer-motion"
import { BsCalendarMonth } from "react-icons/bs"
import { GoGear, GoGraph } from "react-icons/go"
import { IoTodayOutline } from "react-icons/io5"
import { LiaCalendarAlt } from "react-icons/lia"
import { MdArrowBackIosNew, MdOutlineGrade } from "react-icons/md"
import { RiAdminLine } from "react-icons/ri"
import { SlLogout } from "react-icons/sl"
import { TbHelp } from "react-icons/tb"
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
          className="absolute z-50 h-full w-full bg-black bg-opacity-30 backdrop-blur-[1px]"
        >
          <div
            className="absolute z-50 h-full w-[76%] rounded-r-3xl bg-gradient-to-r from-[#e2e3e6] to-[#F5F7F8] text-3xl"
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
                {/* <div className="rounded-r-3xl  bg-[#e3e9e9] py-3 pr-3"> */}
                <NavLink to="/" onClick={() => setShowMenu(false)}>
                  {({ isActive }) => {
                    return (
                      <div
                        className={`
                            ${
                              isActive ? "bg-nav-tab" : ""
                            } flex h-10 items-center justify-start rounded-r-full
                          `}
                      >
                        <span className="relative left-10 text-xl">Today</span>
                        <IoTodayOutline size={23} className="absolute left-2" />
                      </div>
                    )
                  }}
                </NavLink>

                <NavLink
                  to="/go-to-date"
                  end
                  onClick={() => setShowMenu(false)}
                >
                  {({ isActive }) => (
                    <div
                      className={`
                            ${
                              isActive ? "bg-nav-tab" : ""
                            } flex h-10 items-center justify-start rounded-r-full
                          `}
                    >
                      <span className="relative left-10 text-xl">Week</span>
                      <LiaCalendarAlt
                        size={29}
                        className="absolute left-[5px]"
                      />
                    </div>
                  )}
                </NavLink>

                <NavLink to="/month" end onClick={() => setShowMenu(false)}>
                  {({ isActive }) => (
                    <div
                      className={`
                            ${
                              isActive ? "bg-nav-tab" : ""
                            } flex h-10 items-center justify-start rounded-r-full
                          `}
                    >
                      <span className="relative left-10 text-xl">Month</span>
                      <BsCalendarMonth
                        size={20}
                        className="absolute left-[9px]"
                      />
                    </div>
                  )}
                </NavLink>

                <hr className="my-1 h-[2px] w-[120%] bg-text-grey-100 shadow-sm" />

                <NavLink to="/usage" end onClick={() => setShowMenu(false)}>
                  {({ isActive }) => (
                    <div
                      className={`
                            ${
                              isActive ? "bg-nav-tab" : ""
                            } flex h-10 items-center justify-start rounded-r-full
                          `}
                    >
                      <span className="relative left-10 text-xl">Usage</span>
                      <GoGraph size={20} className="absolute left-[10px]" />
                    </div>
                  )}
                </NavLink>

                <NavLink to="/help" end onClick={() => setShowMenu(false)}>
                  {({ isActive }) => (
                    <div
                      className={`
                            ${
                              isActive ? "bg-nav-tab" : ""
                            } flex h-10 items-center justify-start rounded-r-full
                          `}
                    >
                      <span className="relative left-10 text-xl">Help</span>
                      <TbHelp size={22} className="absolute left-[8px]" />
                    </div>
                  )}
                </NavLink>

                <NavLink to="/rate-us" end onClick={() => setShowMenu(false)}>
                  {({ isActive }) => (
                    <div
                      className={`
                            ${
                              isActive ? "bg-nav-tab" : ""
                            } flex h-10 items-center justify-start rounded-r-full
                          `}
                    >
                      <span className="relative left-10 text-xl">Rate us</span>
                      <MdOutlineGrade
                        size={22}
                        className="absolute left-[8px]"
                      />
                    </div>
                  )}
                </NavLink>

                <hr className="my-1 h-[2px] w-[120%] bg-text-grey-100 shadow-sm" />

                <NavLink to="/admin-menu" onClick={() => setShowMenu(false)}>
                  {({ isActive }) => {
                    return (
                      <div
                        className={`
                            ${
                              isActive ? "bg-nav-tab" : ""
                            } flex h-10 items-center justify-start rounded-r-full
                          `}
                      >
                        <span className="relative left-10 text-xl">Admin</span>
                        <RiAdminLine
                          size={21}
                          className="absolute left-[8px]"
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
                              isActive ? "bg-nav-tab" : ""
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
                              isActive ? "bg-nav-tab" : ""
                            } flex h-10 items-center justify-start rounded-r-full
                          `}
                    >
                      <span className="relative left-10 text-xl">Logout</span>
                      <SlLogout size={23} className="absolute left-1" />
                    </div>
                  )}
                </NavLink>
                {/* </div> */}
              </nav>
            </div>
            <div className="mx-1 mt-5 flex h-56 flex-col rounded-2xl bg-slate-300">
              <div className="font-a text-center text-2xl font-semibold">
                Powered By
              </div>
              {/* <div className="flex justify-evenly"> */}
              <div className="grid grid-cols-3 grid-rows-3">
                <div className="m-1 h-12 w-12 ">
                  <img
                    className="h-full w-full object-cover"
                    src="../../../public/images/prisma.png"
                  ></img>
                </div>
                <div className="m-1 h-12 bg-slate-400 text-center">2</div>
                <div className="m-1 h-12 bg-slate-400 text-center">3</div>
                <div className="m-1 h-12 bg-slate-400 text-center">4</div>
                <div className="m-1 h-12 bg-slate-400 text-center">5</div>
                <div className="m-1 h-12 bg-slate-400 text-center">6</div>
                <div className="m-1 h-12 bg-slate-400 text-center">7</div>
                <div className="m-1 h-12 bg-slate-400 text-center">8</div>
                <div className="m-1 h-12 bg-slate-400 text-center">9</div>
                {/* <div>eslint</div>
              <div>typeScript</div>
              <div>tailwind</div>
              <div>react</div>
              <div>postGreSQL</div>
              <div>remix</div>
              <div>prisma</div>
              <div>zod</div>
              <div>framer</div> */}
              </div>
              {/* </div> */}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
