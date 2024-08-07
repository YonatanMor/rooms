import { useNavigate } from "@remix-run/react"
import TopBar from "~/components/app/top-bar"

export default function Login() {
  const navigate = useNavigate()
  
  return (
    <div className="flex flex-col h-screen bg-gradient-to-t from-[#429884] via-[#feb47b] to-[#cd7ddb]">
    <TopBar />
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-3xl mt-5">Coming soon...</h1>
    </div>
  </div>
  )
}
