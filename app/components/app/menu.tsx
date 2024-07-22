import { motion, AnimatePresence } from "framer-motion"
import { MdArrowBackIosNew } from "react-icons/md"
import { LiaCalendarAlt } from "react-icons/lia"
import { IoTodayOutline } from "react-icons/io5"
import { RiAdminLine } from "react-icons/ri"
import { SlLogout } from "react-icons/sl"
import { GoGear } from "react-icons/go"
import { NavLink } from "react-router-dom"
import { useContext, useState } from "react"
import Logo from "~/components/common/logo"
import { AppContext } from "~/app-context"

export default function Menu({showMenu, onClose}: {showMenu : boolean, onClose: () => void}) {
  // const { showMenu, setShowMenu } = useContext(AppContext)
  // const [showMenu, setShowMenu] = useState(false)
  const slideMenuVariants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  }

  console.log(showMenu)
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
          className="absolute z-50 h-full w-full "
        >
          <div
            className="absolute z-50 h-full w-[76%] rounded-r-3xl bg-gradient-to-r from-menu-300 to-menu-400 text-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-3/4">
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
                <div>
                  <NavLink to="/">
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
                            Today
                          </span>
                          <IoTodayOutline
                            size={23}
                            className="absolute left-2"
                          />
                        </div>
                      )
                    }}
                  </NavLink>

                  <NavLink to="/go-to-date" end>
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

                  <NavLink to="/admin-menu">
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

                  <NavLink to="/settings">
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

                  <NavLink to="/login" end>
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
                {/* <NavLink to="/menu">
                    {(isActive) => (
                      <div
                        className={
                          isActive
                            ? "bg-menu-500"
                            : "bg-emerald-500" &&
                              "flex justify-start items-center h-10 rounded-r-full"
                        }
                      >
                        <span className="text-xl relative left-10">Go to date</span>
                        <IoTodayOutline size={23} className="absolute left-2" />
                      </div>
                    )}
                  </NavLink> */}
                {/* <NavLink
                    className={(isActive) =>
                      (isActive ? "bg-menu-500" : "bg-none") && "rounded-r-full"
                    }
                    to="/"
                  >
                    <div className="flex justify-start items-center h-10 rounded-r-full">
                      <span className="text-xl relative left-10">Today</span>
                      <IoTodayOutline size={23} className="absolute left-2"/>
                    </div>
                  </NavLink> */}
                {/* <NavLink
                    className={(isActive) =>
                      (isActive ? "bg-menu-500" : "bg-none") && "rounded-r-full"
                    }
                    to="/menu1"
                  >
                    <div className="flex justify-start items-center h-10 rounded-r-full">
                      <span className="text-xl relative left-10">Go to date</span>
                      <LiaCalendarAlt size={30} className="absolute left-1 " />
                    </div>
                  </NavLink> */}
              </nav>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// <div>
//   <h2 className="ml-10 mt-3 text-text-gray-200 font-extrabold text-3xl">
//     Rooms
//   </h2>

//   <div className="mt-6 text-text-gray-300">
//     <nav>
//       <NavLink to="/">
//         {(isActive) => (
//           <div className={isActive ? "bg-red-600" : "bg-none"}>Today</div>
//         )}
//       </NavLink>

//       <NavLink
//         to="/event-dialog"
//         className={(isActive) => (isActive ? "bg-red-600" : "bg-none")}
//       >
//         <div>Go to date</div>
//       </NavLink>
//     </nav>
//   </div>
// </div>
