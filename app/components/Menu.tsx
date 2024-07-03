import { useState } from "react"

export default function Menu() {
  const [showMenu, setShowMenu] = useState(false)
  const [selection, setSelection] = useState(1)
  return (
    <>
      {1 && (
        <div
          onClick={() => setShowMenu(!showMenu)}
          className="absolute w-3/4 h-full bg-menu-300 text-3xl"
        >
          <h2 className="ml-10 mt-3 text-text-gray-200 font-extrabold text-3xl">
            Rooms
          </h2>
          <div className="mt-6 text-text-gray-300">
            <div
              className={`${selection === 1 ? "bg-menu-500" : "bg-none"} w-60 rounded-r-full flex items-center gap-3 h-10`}
            >
              <div>SVG</div>
              <div className="text-2xl" onClick={() => setSelection(1)}>
                Today
              </div>
            </div>
            <div
              className={`${selection === 2 ? "bg-menu-500" : "bg-none"} w-60 rounded-r-full flex items-center gap-3 h-10`}
            >
              <div>SVG</div>
              <div className="text-2xl" onClick={() => setSelection(2)}>
                Go to tade
              </div>
            </div>
            <div
              className={`${selection === 3 ? "bg-menu-500" : "bg-none"} w-60 rounded-r-full flex items-center gap-3 h-10`}
            >
              <div>SVG</div>
              <div className="text-2xl" onClick={() => setSelection(3)}>
                Admin
              </div>
            </div>
            <div
              className={`${selection === 4 ? "bg-menu-500" : "bg-none"} w-60 rounded-r-full flex items-center gap-3 h-10`}
            >
              <div>SVG</div>
              <div className="text-2xl" onClick={() => setSelection(4)}>
                Logout
              </div>
            </div>
            

            
            {/* <div onClick={()=>setSelection(3)} className="bg-${}"></div> */}
          </div>
        </div>
      )}
    </>
  )
}
