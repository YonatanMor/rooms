import TopBar from "~/components/app/top-bar"

export default function GoToDate() {
  return (
    <div className="flex h-screen flex-col bg-gradient-to-t from-orange-400 via-yellow-500 to-red-600 ">
      <TopBar />
      <div className="mt-10 flex flex-col items-center gap-2">
        <h1 className="font-joke mt-5 px-3 text-xl">
          Why did the coffee file a police report? <br /> It got mugged!
        </h1>
      </div>
    </div>
  )
}
