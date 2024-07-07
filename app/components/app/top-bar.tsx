import { useState } from "react"
import Menu1 from "../../routes/menu1"
import { motion } from "framer-motion"
import { RxHamburgerMenu } from "react-icons/rx"

export default function TopBar() {
  const [showMenu, setShowMenu] = useState(false)

  const slideMenuVariants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  }

  return (
    <>
      <div className="flex dvh- items-center justify-start mt-1">
        <div className="ml-3 relative " onClick={() => setShowMenu(!showMenu)}>
          <RxHamburgerMenu size={30} />
        </div>{" "}
        <div className="ml-1 text-text-gray-200 font-extrabold text-3xl">
          Rooms
        </div>
        <div className="flex justify-center items-center ml-auto mr-3 bg-table-yellow rounded-full h-11 w-11">
          <img src="" alt="y.m" />
        </div>
      </div>
      <motion.div
        variants={slideMenuVariants}
        initial="closed"
        animate={showMenu ? "open" : "closed"}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 400,
        }}
        onClick={() => setShowMenu(!showMenu)}
        className="absolute w-[76%] h-full rounded-r-3xl bg-gradient-to-r from-menu-300 to-menu-400 text-3xl"
      >
        {" "}
        <Menu1 />
      </motion.div>
    </>
  )
}
