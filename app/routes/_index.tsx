import TopBar from "~/components/app/top-bar"
import Table from "~/components/app/table"
import Flags from "~/components/app/flags"
import EventDialog from "~/routes/event-dialog"

export default function Index() {
  return (
    <div className="flex flex-col h-screen">
      <TopBar />
      <Table />
      <Flags />
      {/* <EventDialog /> */}
    </div>
  )
}
