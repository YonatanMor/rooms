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
                        <span className="relative left-16 text-lg">Today</span>
                        <IoTodayOutline
                          size={20}
                          className="absolute left-[23px]"
                        />
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
                      <span className="relative left-16 text-lg">Week</span>
                      <LiaCalendarAlt size={25} className="absolute left-5" />
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
                      <span className="relative left-16 text-lg">Month</span>
                      <BsCalendarMonth size={18} className="absolute left-6" />
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
                      <span className="relative left-16 text-lg">Usage</span>
                      <GoGraph size={17} className="absolute left-6" />
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
                      <span className="relative left-16 text-lg">Help</span>
                      <TbHelp size={20} className="absolute left-[22px]" />
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
                      <span className="relative left-16 text-lg">Rate us</span>
                      <MdOutlineGrade
                        size={20}
                        className="absolute left-[22px]"
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
                        <span className="relative left-16 text-lg">Admin</span>
                        <RiAdminLine size={19} className="absolute left-5" />
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
                        <span className="relative left-16 text-lg">
                          Settings
                        </span>
                        <GoGear size={19} className="absolute left-5" />
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
                      <span className="relative left-16 text-lg">Logout</span>
                      <SlLogout size={19} className="absolute left-[17px]" />
                    </div>
                  )}
                </NavLink>
                {/* </div> */}
              </nav>
            </div>
            <div className="mx-2 flex h-60 flex-col items-center rounded-2xl bg-slate-300 pt-2 shadow-inner">
              <div className="mb-2 text-center font-powered text-xl font-semibold">
                Powered By
              </div>
              <div className="grid grid-cols-3 grid-rows-3 gap-x-4">
                <div className="m-1 h-14 w-14 rounded-lg">
                  <img
                    className="h-full w-full rounded-lg"
                    src="../../../public/images/prisma.png" alt="prisma"
                  ></img>
                </div>
                <div className="m-1  h-14 w-14 rounded-lg">
                  <img
                    className="h-full w-full rounded-lg"
                    src="../../../public/images/zod.jpg"
                    alt="zod"
                  ></img>
                </div>
                <div className="m-1 h-14 w-14 rounded-lg bg-white">
                  <img
                    className="h-full w-full rounded-lg"
                    src="../../../public/images/eslint.png"
                    alt="eslint"
                  ></img>
                </div>
                <div className="m-1 h-14 w-14 rounded-lg bg-white">
                  <img
                    className="h-full w-full rounded-lg object-cover"
                    src="../../../public/images/ts.png"
                    alt="typeScript"
                  />
                </div>
                <div className="m-1 h-14 w-14 rounded-lg bg-gradient-to-b from-gray-800 via-gray-900 to-gray-700 shadow-2xl shadow-blue-900">
                  <img
                    className="h-full w-full animate-spin-slow rounded-lg p-1"
                    src="../../../public/images/react.svg"
                    alt="react"
                  ></img>
                </div>
                <div className="m-1 flex h-14 w-14 items-center rounded-lg bg-[#222121]">
                  <img
                    className="h-8 w-full rounded-lg"
                    src="../../../public/images/remix.png"
                    alt="remix"
                  ></img>
                </div>
                <div className="m-1 flex h-14 w-14 items-center rounded-lg bg-[#222121]">
                  <img
                    className="  rounded-lg"
                    src="../../../public/images/tailwind.avif"
                    alt="tailwind"
                  ></img>
                </div>
                <div className="m-1 flex h-14 w-14 items-center rounded-lg bg-[#222121]">
                  <img
                    className="  rounded-lg"
                    src="../../../public/images/postGresQL.png"
                    alt="postGresQL"
                  ></img>
                </div>
                <div className="m-1 flex h-14 w-14 items-center justify-center rounded-lg bg-[#ffffff]">
                  <img
                    className="  h-[85%] w-[%85]"
                    src="../../../public/images/framerMotion.png"
                    alt="framer Motion"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
