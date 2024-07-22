import TopBar from "~/components/app/top-bar"
import Table from "~/components/app/table"
import Flags from "~/components/app/flags"
import EventDialog from "~/components/app/event-dialog"
import { Theme } from "@radix-ui/themes"
import { useState } from "react"
import { useContext } from "react"
import { AppContext } from "~/app-context"

export default function Index() {
  // const [showMenu, setShowMenu] = useState<boolean>(false)
  // const { showMenu, setShowMenu } = useContext(AppContext)
  // const { showEventDialog } = useContext(AppContext)
  // console.log(showMenu)
  return (
    <Theme>
      <div
        // onClick={() => setShowMenu(false)}
        className="flex h-screen flex-col"
      >
        <TopBar />
        <Table />
        <Flags />
        <EventDialog />
      </div>
    </Theme>
  )
}
