import TopBar from "~/components/app/top-bar"
import Table from "~/components/app/table"
import Flags from "~/components/app/flags"
import { motion, AnimatePresence } from "framer-motion"
import { LiaCalendarAlt } from "react-icons/lia"
import { IoTodayOutline } from "react-icons/io5"
import { RiAdminLine } from "react-icons/ri"
import { SlLogout } from "react-icons/sl"
import { NavLink } from "react-router-dom"
import { useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx"
import { useNavigate } from "@remix-run/react"
import Logo from "~/components/common/logo"

export default function Menu() {
  const [showMenu, setShowMenu] = useState(true)

  const navigate = useNavigate()

  const slideMenuVariants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  }

  const handleNavigation = () => {
    setShowMenu(false)
    setTimeout(() => {
      navigate("/")
    }, 200)
  }

  return (
    <div onClick={handleNavigation}>
      {/* {" "} */}
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
            className="absolute z-50 w-[76%] h-full rounded-r-3xl bg-gradient-to-r from-menu-300 to-menu-400 text-3xl"
          >
            <div className="w-3/4">
              <div className="m-4">
                <Logo />
              </div>

              <nav>
                <motion.div>
                  <NavLink to="/">
                    {({ isActive }) => {
                      console.log(isActive)
                      return (
                        <div
                          className={`
                          ${
                            isActive ? "bg-menu-500" : "bg-red-300"
                          } flex justify-start items-center h-10 rounded-r-full
                        `}
                        >
                          <span className="text-xl relative left-10">
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
                </motion.div>

                <motion.div>
                  <NavLink to="/about" end>
                    {({ isActive }) => (
                      <div
                        className={`
                          ${
                            isActive ? "bg-menu-500" : "bg-red-300"
                          } flex justify-start items-center h-10 rounded-r-full
                        `}
                      >
                        <span className="text-xl relative left-10">
                          Go to date
                        </span>
                        <IoTodayOutline size={23} className="absolute left-2" />
                      </div>
                    )}
                  </NavLink>
                </motion.div>

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
          </motion.div>
        )}
      </AnimatePresence>
      <TopBar />
      <Table />
      <Flags />
    </div>
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
