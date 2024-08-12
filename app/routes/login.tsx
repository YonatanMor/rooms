import TopBar from "~/components/app/top-bar"

export default function Login() {

  return (
    <div className="flex h-screen flex-col bg-gradient-to-t from-[#6868ac] to-[#b871b8] ">
      <TopBar />
      <div className="white-space: pre-line mt-7 flex flex-col items-center px-1">
        <h1 className="font-joke  text-xl">
          Why did the scarecrow win an award? He was outstanding in his field!
        </h1>
      </div>
      <img src="/public/images/Scercrow.png" alt="scercrow" />
    </div>
  )
}
