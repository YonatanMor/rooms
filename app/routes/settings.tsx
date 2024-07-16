import TopBar from "~/components/app/top-bar"
import { Theme } from "@radix-ui/themes"
import { useState } from "react"
import ContextProvider from "~/app-context"

export default function Index() {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  return (
    <Theme>
      <ContextProvider>
        <div
          onClick={() => setShowMenu(false)}
          className="flex flex-col h-screen"
        >
          <TopBar />
          <div>
            <span>Theme</span>
          </div>
        </div>
      </ContextProvider>
    </Theme>
  )
}
