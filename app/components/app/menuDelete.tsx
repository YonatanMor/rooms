import { useState } from "react"
import { motion } from "framer-motion"
import { LiaCalendarAlt } from "react-icons/lia"
import { IoTodayOutline } from "react-icons/io5"
import { RiAdminLine } from "react-icons/ri"
import { SlLogout } from "react-icons/sl"

export default function Menu() {
  const [selection, setSelection] = useState<1 | 2 | 3 | 4>(1)

  function colorSelection(selectedTab: 1 | 2 | 3 | 4) {
    setTimeout(() => {
      switch (selectedTab) {
        case 1:
          setSelection(1)
          break
        case 2:
          setSelection(2)
          break
        case 3:
          setSelection(3)
          break
        case 4:
          setSelection(4)
          break
      }
    }, 300)
  }

  return (
    <div>
      <h2 className="ml-10 mt-3 text-text grey-200 font-extrabold text-3xl">
        Rooms
      </h2>

      <div className="mt-6 text-text-grey-300">
        <motion.div
          onClick={() => colorSelection(1)}
          className={`${
            selection === 1 ? "bg-menu-500" : "bg-none"
          } w-60 rounded-r-full flex items-center gap-3 h-10`}
        >
          <div className="absolute left-3">
            <IoTodayOutline size={24} />
          </div>
          <div className="text-2xl ml-10">Today</div>
        </motion.div>

        <motion.div
          onClick={() => colorSelection(2)}
          className={`${
            selection === 2 ? "bg-menu-500" : "bg-none"
          } w-60 rounded-r-full flex items-center gap-3 h-10`}
        >
          <div className="absolute left-2">
            <LiaCalendarAlt size={30} />
          </div>
          <div className="text-2xl ml-10">Go to date</div>
        </motion.div>

        <motion.div
          onClick={() => colorSelection(3)}
          className={`${
            selection === 3 ? "bg-menu-500" : "bg-none"
          } w-60 rounded-r-full flex items-center gap-3 h-10`}
        >
          <div className="absolute left-2">
            <RiAdminLine />
          </div>
          <div className="text-2xl ml-10">Admin</div>
        </motion.div>

        <motion.div
          onClick={() => colorSelection(4)}
          className={`${
            selection === 4 ? "bg-menu-500" : "bg-none"
          } w-60 rounded-r-full flex items-center gap-3 h-10`}
        >
          <div className="absolute left-1">
            <SlLogout />
          </div>
          <div className="text-2xl ml-10">Logout</div>
        </motion.div>
      </div>
    </div>
  )
}
