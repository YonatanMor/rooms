export default function Flags() {
  return (
    <div className="flex justify-between bg-slate-500 mb-auto">
      <div className="flex mx-1">
        <span>Rehearsal</span>
        <div className="h-5 w-5 mr-1 bg-table-yellow" />
      </div>
      <div className="flex mx-1">
        <span>lesson</span>
        <div className="h-5 w-5 mr-1 bg-table-red" />
      </div>
      <div className="flex mx-1">
        <span>event</span>
        <div className="h-5 w-5 mr-1 bg-table-green" />
      </div>
      <div className="flex mx-1">
        <span>holiday</span>
        <div className="h-5 w-5 mr-1 bg-table-blue" />
      </div>
    </div>
  )
}
