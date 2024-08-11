import { useNavigate } from "@remix-run/react"
import TopBar from "~/components/app/top-bar"

export default function Login() {
  const navigate = useNavigate()

  return (
    <div className="flex h-screen flex-col bg-gradient-to-t from-[#676769] to-[#a2a1a2] ">
      <TopBar />
      <div className="white-space: pre-line mt-7 flex flex-col items-center px-1">
        <h1 className="font-joke  text-xl">
          Why did the scarecrow win an award? He was outstanding in his field!
        </h1>
      </div>
      <img src="/public/images/Scercrow.png" alt="scercrow" />
    </div>
  )
}
