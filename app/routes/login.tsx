import { useNavigate } from "@remix-run/react"

export default function Login() {
  const navigate = useNavigate()
  
  return (
    <div className="bg-red-200 h-screen flex flex-col items-center gap-2">
      <h1 className="text-3xl">Welcome</h1>
      <button
        onClick={() => navigate("/")}
        className="border-4 rounded-lg border-slate-600 px-1 text-"
      >
        login
      </button>
    </div>
  )
}
