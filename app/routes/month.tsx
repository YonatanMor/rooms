import TopBar from "~/components/app/top-bar"

export default function Month() {
  return (
    <div className="flex h-screen flex-col bg-gradient-to-t from-[#4667b5] via-[#7ac638] to-[#86a8e7]">
      <TopBar />
      <div className="mt-10 gap-2 px-2">
        <h1 className="font-joke mt-5 text-xl">
          What do you call a fish without eyes? Fsh!
        </h1>
      </div>
    </div>
  )
}
