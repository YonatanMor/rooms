import { useEffect, useState } from "react"

export default function TopBar() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="flex h-10 items-center justify-start mt-1">
      <div onClick={() => setShowMenu(!showMenu)} className="ml-2">
        |||
      </div>{" "}
      {/*hamburger svg*/}
      <div className="ml-1 text-text-gray-200 font-extrabold text-3xl">
        Rooms
      </div>
      <div className="flex justify-center items-center ml-auto mr-3 bg-table-yellow rounded-full h-11 w-11">
        Y.M
      </div>
    </div>
  )
}
