export default function Flags() {
  return (
    <div className="flex justify-between">
      <div className="mx-1 flex items-center ">
        <div className="mr-1 h-5 w-5 rounded-sm bg-flag-yellow" />
        <span className="text-lg">Rehearsal</span>
      </div>

      <div className="mx-1 flex items-center">
        <div className="mr-1 h-5 w-5 rounded-sm bg-flag-red" />
        <span className="text-lg">Lesson</span>
      </div>

      <div className="mx-1 flex items-center">
        <div className="mr-1 h-5 w-5 rounded-sm bg-flag-green" />
        <span className="text-lg">Event</span>
      </div>

      <div className="mx-1 flex items-center">
        <div className="mr-1 h-5 w-5 rounded-sm bg-flag-blue" />
        <span className="text-lg">Holiday</span>
      </div>
    </div>
  )
}
