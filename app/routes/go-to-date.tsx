import { useNavigate } from "@remix-run/react"

export default function GoToDate() {
  const navigate = useNavigate()
  
  return (
    <div className="bg-slate-400 h-screen flex flex-col items-center gap-2">
      <h1 className="text-3xl">haaaaa....</h1>
      <button
        onClick={() => navigate("/")}
        className="border-4 rounded-lg border-slate-600 px-1 text-"
      >
        #^De4%#@!!
      </button>
    </div>
  )
}
