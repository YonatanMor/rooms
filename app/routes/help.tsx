import TopBar from "~/components/app/top-bar"

export default function Help() {
  return (
    <div className="flex h-screen flex-col bg-gradient-to-t from-indigo-400 via-blue-500 to-green-400">
      <TopBar />
      <div className="mt-10 flex flex-col items-center">
        <h1 className="font-joke text-xl">
          Why don't skeletons fight? <br /> They don't have the guts!
        </h1>
      </div>
    </div>
  )
}
