import { motion } from "framer-motion"
import { LiaCalendarAlt } from "react-icons/lia"
import { IoTodayOutline } from "react-icons/io5"
import { RiAdminLine } from "react-icons/ri"
import { SlLogout } from "react-icons/sl"
import { NavLink } from "react-router-dom"
import { useState } from "react"

export default function Menu() {
  const [currentNav, setCurrentNav] = useState("/dsfs")

  return (
    <div>
      <h2 className="ml-10 mt-3 text-text-gray-200 font-extrabold text-3xl">
        Rooms
      </h2>

      <div className="mt-6 text-text-gray-300">
        <nav>
          <NavLink to="/">
            {(isActive) => (
              <div className={isActive ? "bg-red-600" : "bg-none"}>Today</div>
            )}
          </NavLink>

          <NavLink
            to="/event-dialog"
            className={(isActive) => (isActive ? "bg-red-600" : "bg-none")}
          >
            <div>Go to date</div>
          </NavLink>
        </nav>
      </div>
    </div>
  )
}
