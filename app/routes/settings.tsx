import { useContext, useEffect, useRef } from "react"
import { AppContext } from "~/app-context"
import TopBar from "~/components/app/top-bar"

export default function Index() {
  const { setShowMenu, isDark, setIsDark } = useContext(AppContext)
 
  const x = useRef(0)

  useEffect(() => {
    if (window && x.current > 1) {
      // localStorage.getItem("theme")
      localStorage.setItem("theme", isDark ? "true" : "false")
    }
    x.current += 1
  }, [isDark])
// (window.matchMedia('(prefers-color-scheme: dark)').matches) // check the prefers of the browser for dark mode
  // localStorage.getItem("theme")

  return (
    <div
      onClick={() => setShowMenu(false)}
      className={`flex h-screen flex-col ${isDark ? "bg-black" : ""}`}
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
        <span className="ml-2 text-xl">Theme</span>
        <div onClick={() => setIsDark(false)} className="flex items-center">
          <div
            className={`mx-2 h-4 w-4 rounded-full border-2 border-black ${isDark ? "border-white bg-black" : "border-black bg-black"}`}
          ></div>
          <span>Light</span>
        </div>
        <div onClick={() => setIsDark(true)} className="flex items-center">
          <div
            className={`mx-2 h-4 w-4 rounded-full border-2 border-black ${isDark ? "border-white bg-white" : "border-black bg-white"}`}
          ></div>
          <span>Dark</span>
        </div>
      </div>
      <span className="m-4 bg-red-300 text-3xl">
        {isDark ? "true" : "false"}
      </span>
    </div>
  )
}
