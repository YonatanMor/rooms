import { useState } from "react"
import { motion } from "framer-motion"
import { LiaCalendarAlt } from "react-icons/lia"
import { IoTodayOutline } from "react-icons/io5"
import { RiAdminLine } from "react-icons/ri"
import { SlLogout } from "react-icons/sl"

export default function Menu() {
  const [selection, setSelection] = useState<1 | 2 | 3 | 4>(1)

  return (
    <div>
      <h2 className="ml-10 mt-3 text-text-gray-200 font-extrabold text-3xl">
        Rooms
      </h2>

      <div className="mt-6 text-text-gray-300">
        <motion.div
          className={`${
            selection === 1
              ? setTimeout(() => {return
                  "bg-menu-500"
                }, 300)
              : "bg-none"
          } w-60 rounded-r-full flex items-center gap-3 h-10`}
        >
          <div className="absolute left-2">
            <IoTodayOutline size={23} />
          </div>
          <div className="text-2xl ml-10" onClick={() => setSelection(1)}>
            Today
          </div>
        </motion.div>

        <motion.div
          className={`${
            selection === 2 ? "bg-menu-500" : "bg-none"
          } w-60 rounded-r-full flex items-center gap-3 h-10`}
        >
          <div className="absolute left-2">
            <LiaCalendarAlt size={30} />
          </div>
          <div className="text-2xl ml-10" onClick={() => setSelection(2)}>
            Go to date
          </div>
        </motion.div>

        <motion.div
          className={`${
            selection === 3 ? "bg-menu-500" : "bg-none"
          } w-60 rounded-r-full flex items-center gap-3 h-10`}
        >
          <div className="absolute left-2">
            <RiAdminLine />
          </div>
          <div className="text-2xl ml-10" onClick={() => setSelection(3)}>
            Admin
          </div>
        </motion.div>

        <motion.div
          className={`${
            selection === 4 ? "bg-menu-500" : "bg-none"
          } w-60 rounded-r-full flex items-center gap-3 h-10`}
        >
          <div className="absolute left-2">
            <SlLogout />
          </div>
          <div className="text-2xl ml-10" onClick={() => setSelection(4)}>
            Logout
          </div>
        </motion.div>
      </div>
    </div>
  )
}
