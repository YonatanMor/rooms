import TopBar from "~/components/app/top-bar"

export default function RateUs() {
  return (
    <div className="flex h-screen flex-col bg-gradient-to-t from-teal-400 via-indigo-500 to-orange-600 ">
      <TopBar />
      <div className="mt-10 flex flex-col items-center gap-2 px-2">
        <h1 className="font-joke text-xl">
          Why don’t eggs tell jokes? They’d crack each other up
        </h1>
      </div>
    </div>
  )
}
