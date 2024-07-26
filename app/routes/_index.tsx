import { Theme } from "@radix-ui/themes"
import { useLoaderData } from "@remix-run/react"
import { ActionFunctionArgs, json } from "@remix-run/server-runtime"
import { useState } from "react"
import { getFormDataOrFail } from "remix-params-helper"
import { z } from "zod"
import EventDialog from "~/components/app/event-dialog"
import Flags from "~/components/app/flags"
import Table from "~/components/app/table"
import TopBar from "~/components/app/top-bar"
import { db } from "~/db.server"

// pull data from DB. action and loader must be in a route component
export async function loader() {
  const events = await db.event.findMany()
  return json({ events })
}

export async function action({ request }: ActionFunctionArgs) {
  // const formData = await request.formData()

  // const title = formData.get("title") as string
  // const type = formData.get("type") as unknown as boolean

  // --------

  const schema = z
    .object({
      title: z.string(),
      type: z.enum(["Event", "Rehearsal", "Lesson"]),
      hour: z.string().min(5).max(5),
      classroom: z.string(),
      note: z.string(),
      duration: z.string(),
    })
    .strict()

  try {
    const parsedFormData = await getFormDataOrFail(request, schema) //used in the react component
    await db.event.create({ data: parsedFormData })
    return { success: true, parsedFormData }
  } catch (error) {
    return json({ success: false, error: error }, { status: 400 })
  }
}

export default function Index() {
  const { events } = useLoaderData<typeof loader>() // should it be inside a useEffect to prevent redundant calls to DB?
  const [clickedCell, setClickedCell] = useState(null)

  return (
    <Theme>
      <div className="flex h-screen flex-col ">
        <TopBar />
        <Table dbEvents={events} setClickedCell={setClickedCell} />
        <Flags />
        <EventDialog clickedCell={clickedCell} dbEvents={events} />
      </div>
    </Theme>
  )
}
