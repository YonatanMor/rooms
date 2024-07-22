import TopBar from "~/components/app/top-bar"
import { useContext, useEffect, useRef } from "react"
import { AppContext } from "~/app-context"

export default function Index() {
  const { showMenu, setShowMenu, isDark, setIsDark } = useContext(AppContext)

  const x = useRef(0)

  useEffect(() => {
    console.log(x.current)
    if (window && x.current > 1) {
      // localStorage.getItem("theme")
      localStorage.setItem("theme", isDark ? "true" : "false")
      console.log(localStorage.getItem("theme"))
    }
    x.current += 1
  }, [isDark])

  // localStorage.getItem("theme")
  // console.log(x ? JSON.parse(x) : "null")

  return (
    <div
      onClick={() => setShowMenu(false)}
      className={`flex flex-col h-screen ${isDark ? "bg-black" : ""}`}
    >
      <TopBar />
      {/* <div className="">
            <form action="">
              <legend>Theme</legend>
              <div>
                <input type="radio" id="light" name="theme" onChange={()=>setIsDark(false)} checked />
                <label htmlFor="light">Light</label>
              </div>
              <div>
                <input type="radio" id="dark" name="theme" onChange={()=>setIsDark(true)}/>
                <label htmlFor="dark">Dark</label>
              </div>
            </form>
          </div> */}

      <div className="ml-3 mt-5">
        <span className="text-xl ml-2">Theme</span>
        <div onClick={() => setIsDark(false)} className="flex items-center">
          <div
            className={`h-4 w-4 mx-2 rounded-full border-2 border-black ${isDark ? "border-white bg-black" : "border-black bg-black"}`}
          ></div>
          <span>Light</span>
        </div>
        <div onClick={() => setIsDark(true)} className="flex items-center">
          <div
            className={`h-4 w-4 mx-2 rounded-full border-2 border-black ${isDark ? "border-white bg-white" : "border-black bg-white"}`}
          ></div>
          <span>Dark</span>
        </div>
      </div>
      <span className="text-3xl m-4 bg-red-300">
        {isDark ? "true" : "false"}
      </span>
    </div>
  )
}
