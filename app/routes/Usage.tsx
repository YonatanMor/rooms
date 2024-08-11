import TopBar from "~/components/app/top-bar"

export default function Usage() {
  return (
    <div className="flex h-screen flex-col bg-gradient-to-t from-pink-300 via-purple-400 to-blue-500">
      <TopBar />
      <div className="mt-10 flex flex-col items-center gap-2 px-2">
        <h1 className="font-joke  text-xl">
          How do you organize a space party? You planet!
        </h1>
      </div>
    </div>
  )
}
