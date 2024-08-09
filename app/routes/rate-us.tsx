import TopBar from "~/components/app/top-bar"

export default function RateUs() {

  return (
    <div className="flex flex-col h-screen bg-gradient-to-t from-[#1e4192] via-[#9d512b] to-[#1a3a77]">
      <TopBar />
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl mt-5">Coming soon...</h1>
      </div>
    </div>
  )
}
