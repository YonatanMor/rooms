import TopBar from "~/components/app/top-bar"

export default function Settings() {
  return (
    <div className="flex h-screen flex-col bg-gradient-to-t from-[#a34949] via-[#52a349] to-[#4994a3]">
      <TopBar />
      <div className="mt-10 flex flex-col items-center">
        <h1 className="font-joke text-xl">
          Why don&apos;t programmers like nature?
          <br />
          It has too many bugs
        </h1>
      </div>
    </div>
  )
}
