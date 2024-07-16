import TopBar from "~/components/app/top-bar"
import Table from "~/components/app/table"
import Flags from "~/components/app/flags"
import EventDialog from "~/components/app/event-dialog"
import { Theme } from "@radix-ui/themes"
import { useState } from "react"
import ContextProvider from "~/appContext"

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
          <Table />
          <Flags />
          <EventDialog />
        </div>
      </ContextProvider>
    </Theme>
  )
}
