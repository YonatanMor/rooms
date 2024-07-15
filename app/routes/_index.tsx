import TopBar from "~/components/app/top-bar"
import Table from "~/components/app/table"
import Flags from "~/components/app/flags"
import EventDialog from "~/routes/event-dialog"
import { Theme } from "@radix-ui/themes"

export default function Index() {
  return (
    <Theme>
      <div className="flex flex-col h-screen">
        <TopBar />
        <Table />
        <Flags />
        {/* <EventDialog /> */}
      </div>
    </Theme>
  )
}
