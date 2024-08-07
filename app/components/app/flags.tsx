export default function Flags() {
  return (
    <div className="flex justify-between">
      <div className="mx-1 flex items-center ">
        <div className="bg-event-text-green mr-1 h-4 w-4 rounded-sm" />
        <span className="text-lg">Rehearsal</span>
      </div>

      <div className="mx-1 flex items-center">
        <div className="bg-event-text-red mr-1 h-4 w-4 rounded-sm" />
        <span className="text-lg">Lesson</span>
      </div>

      <div className="mx-1 flex items-center">
        <div className="bg-event-text-blue mr-1 h-4 w-4 rounded-sm" />
        <span className="text-lg">Event</span>
      </div>

      <div className="mx-1 flex items-center">
        <div className="bg-event-text-purple mr-1 h-4 w-4 rounded-sm" />
        <span className="text-lg">Holiday</span>
      </div>
    </div>
  )
}
