export default function Flags() {
  return (
    <div className="flex justify-between bg-[#F6F5F5]">
      <div className="mx-1 flex items-center ">
        <div className="mr-1 h-4 w-4 rounded-sm bg-flag-orange" />
        <span className="text-lg">Rehearsal</span>
      </div>

      <div className="mx-1 flex items-center">
        <div className="mr-1 h-4 w-4 rounded-sm bg-flag-blue" />
        <span className="text-lg">Lesson</span>
      </div>

      <div className="mx-1 flex items-center">
        <div className="mr-1 h-4 w-4 rounded-sm bg-flag-green" />
        <span className="text-lg">Event</span>
      </div>

      <div className="mx-1 flex items-center">
        <div className="mr-1 h-4 w-4 rounded-sm bg-flag-purple" />
        <span className="text-lg">Holiday</span>
      </div>
    </div>
  )
}
