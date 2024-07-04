import TopBar from "~/components/top-bar"
import Table from "~/components/table"
import Flags from "~/components/flags"
import EventDialog from "~/components/event-dialog"
import { useState } from "react"

export default function Index() {

  return (
    <div className="flex flex-col h-screen">
      <TopBar  />
      <Table />
      <Flags />
      {/* <EventDialog /> */}
    </div>
  )
}
