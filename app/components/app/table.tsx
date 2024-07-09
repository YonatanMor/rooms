export default function Table() {

  const hours = [
    "",
    "8:00",
    "8:30",
    "9:00",
    "9:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
  ]
  const classrooms = [
    "Yoga",
    "Spinning",
    "Climbing",
    "Yoga",
    "Spinning",
    "Climbing",
    "Yoga",
    "Spinning",
    "Climbing",
    "Yoga",
    "Spinning",
    "Climbing",
    "Yoga",
    "Spinning",
    "Climbing",
    "Yoga",
    "Spinning",
    "Climbing",
    "Yoga",
    "Spinning",
    "Climbing",
    "Yoga",
    "Spinning",
    "Climbing",
    "Yoga",
    "Spinning",
    "Climbing",
    "Yoga",
    "Spinning",
    "Climbing",
  ]
  let key = 0

  const tableRows = classrooms.map((room) => {
    const restOfRow = []
    for (let i = 0; i < hours.length - 1; ++i) {
      restOfRow.push({
        content: "",
        id: key + 100,
        style: `bg-table-200 text-base`,
      })
      key += 1
    }
    return [
      {
        content: room,
        id: key + 1000,
        style: `bg-table-300 sticky left-0 z-20 text-base`,
      },
      ...restOfRow,
    ]
  })

  const tableHours = hours.map((hour, i) => {
    return {
      content: hour,
      id: i,
      style: `bg-white text-base`,
    }
  })

  const table = [...tableHours, ...tableRows.flat()]

  return (
    <div className="flex flex-col h-[89dvh] mb-2 ">
      <h2 className="text-center text-text-gray-100 text-lg ">
        Monday 31 March 2025
      </h2>

      <div className="bg-slate-400  overflow-x-auto overflow-y-auto border-2">
        <div
          className={`grid gap-1`}
          style={{
            gridTemplateColumns: `repeat(${hours.length}, minmax(80px, auto))`,

            gridTemplateRows: `repeat(${classrooms.length + 1}, minmax(36px, 1fr))`,
          }}
        >
          {table.map((cell) => (
            <div
              key={cell.id}
              className={`${cell.style} flex justify-center items-center`}
            >
              {cell.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
