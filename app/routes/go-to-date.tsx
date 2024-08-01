import { useNavigate } from "@remix-run/react"

export default function GoToDate() {
  const navigate = useNavigate()
  
  return (
    <div className="bg-gradient-to-t from-[#ff7e5f] via-[#feb47b] to-[#86a8e7] h-screen flex flex-col items-center gap-2">
      <h1 className="text-3xl">Coming soon</h1>
      <button
        onClick={() => navigate("/")}
        className="border-4 w-20 rounded-lg border-slate-600 px-1 text-"
      >
        Back
      </button>
    </div>
  )
}
