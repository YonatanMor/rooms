import Menu from "~/components/app/menu"
import { useState } from "react"
export default function About() {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  
  
  return (
    <div >
      <h1 onClick={()=> setShowMenu(!showMenu)}>About</h1>
      <h2>{showMenu ? 'true' : 'false'}</h2>
      <Menu showMenu={showMenu} setShowMenu={setShowMenu}/>
    </div>
  )
}
