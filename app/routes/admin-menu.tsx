import { useNavigate } from "@remix-run/react"
import TopBar from "~/components/app/top-bar"

export default function AdminMenu() {
  const navigate = useNavigate()

  return (
    <div className="flex h-screen flex-col bg-gradient-to-t from-[#428598] via-[#feb47b] to-[#cd7ddb]">
      <TopBar />
      <div className="mt-10 flex flex-col items-center gap-2 px-4">
        <h1 className=" font-joke text-xl">
          Why are frogs so happy? <br /> They eat whatever bugs them!
        </h1>
      </div>
    </div>
  )
}
