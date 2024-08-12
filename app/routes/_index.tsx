import { Theme } from "@radix-ui/themes"
import { useLoaderData } from "@remix-run/react"
import { ActionFunctionArgs } from "@remix-run/server-runtime"
import { useState } from "react"
import { getFormDataOrFail } from "remix-params-helper"
import { typedjson, UseDataFunctionReturn } from "remix-typedjson"
import { z } from "zod"
import EventDialog, { TClickedCell } from "~/components/app/event-dialog"
import Flags from "~/components/app/flags"
import Table from "~/components/app/table"
import TopBar from "~/components/app/top-bar"
import { db } from "~/db.server"
import { namedAction } from "~/utils/named-action.server"

export type IndexLoaderData = UseDataFunctionReturn<typeof loader>

export type TEvent = {
  id: string
  type: string
  createdAt: Date
  updatedAt: Date
  title: string
  classroom: string
  hour: string
  duration: string
  note: string
}

export async function loader() {
  const events: TEvent[] = await db.event.findMany()
  return typedjson({ events })
}

export async function action(actionArgs: ActionFunctionArgs) {
  return namedAction(actionArgs, {
    action_write,
    action_delete,
  })

  async function action_delete({ request }: ActionFunctionArgs) {
    const schema = z.object({
      eventId: z.string(),
    })
    const { eventId } = await getFormDataOrFail(request, schema)

    await db.event.delete({ where: { id: eventId } })

    return new Response()
  }

  async function action_write({ request }: ActionFunctionArgs) {
    const schema = z
      .object({
        title: z.string().max(20),
        type: z.enum(["Event", "Rehearsal", "Lesson"]),
        hour: z.string().min(5).max(5),
        classroom: z.string(),
        note: z.string().max(80),
        duration: z.string(),
      })
      .strict()

    try {
      const parsedFormData = await getFormDataOrFail(request, schema)
      const isEvent = await db.event.findFirst({
        where: {
          hour: parsedFormData.hour,
          classroom: parsedFormData.classroom,
        },
      })
      if (isEvent) {
        await db.event.update({
          where: { id: isEvent.id },
          data: {
            title: parsedFormData.title,
            type: parsedFormData.type,
            note: parsedFormData.note,
            duration: parsedFormData.duration,
          },
        })
      } else {
        await db.event.create({ data: parsedFormData })
      }
      return typedjson({ success: true, parsedFormData })
    } catch (error) {
      return typedjson({ success: false, error: error }, { status: 400 })
    }
  }
}

export default function Index() {
  const { events } = useLoaderData<typeof loader>() 
  const [clickedCell, setClickedCell] = useState<TClickedCell | null>(null)

  return (
    <Theme>
      <div className="flex h-screen flex-col bg-white">
        <TopBar />
        <Table dbEvents={events} setClickedCell={setClickedCell} />
        <Flags />
        <EventDialog clickedCell={clickedCell}/>
      </div>
    </Theme>
  )
}
