import TopBar from "~/components/TopBar"
import Table from "~/components/Table"
import Flags from "~/components/Flags"

export default function Index() {
  return (
    <div className="flex flex-col">
      <TopBar />
      <Table />
      <Flags />
    </div>
  )
}
