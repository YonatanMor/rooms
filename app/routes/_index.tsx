import { Theme } from "@radix-ui/themes"
import { ActionFunctionArgs, redirect } from "@remix-run/server-runtime"
import { getFormDataOrFail } from "remix-params-helper"
import { z } from "zod"
import EventDialog from "~/components/app/event-dialog"
import Flags from "~/components/app/flags"
import Table from "~/components/app/table"
import TopBar from "~/components/app/top-bar"

// pull data from DB. action and loader must be in a route component
// export async function loader() {
//   const user = await db.user.findFirst()
//   return json({ foo: 1, user })
// }

export async function action({ request }: ActionFunctionArgs) {
  // const formData = await request.formData()

  // const title = formData.get("title") as string
  // const type = formData.get("type") as unknown as boolean

  // --------

  const schema = z.object({
    title: z.string(),
    type: z.string(),
  })
  // .strict()

  const parsedFormData = await getFormDataOrFail(request, schema) //used in the react component
  return redirect("/go-to-date")
}

export default function Index() {
  // const data = useLoaderData<typeof loader>()

  // console.log(data)

  return (
    <Theme>
      <div className="flex h-screen flex-col">
        <TopBar />
        <Table />
        <Flags />
        <EventDialog />
      </div>
    </Theme>
  )
}
