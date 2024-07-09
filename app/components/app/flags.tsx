export default function Flags() {
  return (
    <div className="flex justify-between mt-auto">
      <div className="flex items-center mx-1 ">
        <div className="h-5 w-5 mr-1 bg-flag-yellow rounded-sm" />
        <span className="text-lg">Rehearsal</span>
      </div>

      <div className="flex items-center mx-1">
        <div className="h-5 w-5 mr-1 bg-flag-red rounded-sm" />
        <span className="text-lg">Lesson</span>
      </div>

      <div className="flex items-center mx-1">
        <div className="h-5 w-5 mr-1 bg-flag-green rounded-sm" />
        <span className="text-lg">Event</span>
      </div>

      <div className="flex items-center mx-1">
        <div className="h-5 w-5 mr-1 bg-flag-blue rounded-sm" />
        <span className="text-lg">Holiday</span>
      </div>
    </div>
  )
}
