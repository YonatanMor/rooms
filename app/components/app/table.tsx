import { useContext } from "react"
import { v4 as uuid } from "uuid"
import { AppContext } from "~/app-context"

export default function Table({ dbEvents, setClickedCell }) {
  const { setShowEventDialog } = useContext(AppContext)

  const handleClickedCell = (cell) => {
    setClickedCell(cell)
    setShowEventDialog(true)
  }

  const hours = [
    "",
    "00:00",
    "00:30",
    "01:00",
    "01:30",
    "02:00",
    "02:30",
    "03:00",
    "03:30",
    "04:00",
    "04:30",
    "05:00",
    "05:30",
    "06:00",
    "06:30",
    "07:00",
    "07:30",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
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
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
    "23:30",
  ]

  const classrooms = [
    "Yoga",
    "Spinning",
    "Climbing",
    "Bike",
    "Rock",
    // "Climbing",
    // "Yoga",
    // "Spinning",
    // "Climbing",
    // "Yoga",
    // "Spinning",
    // "Climbing",
    // "Yoga",
    // "Spinning",
    // "Climbing",
    // "Yoga",
    // "Spinning",
    // "Climbing",
    // "Yoga",
    // "Spinning",
    // "Climbing",
    // "Yoga",
    // "Spinning",
    // "Climbing",
    // "Yoga",
    // "Spinning",
    // "Climbing",
    // "Yoga",
    // "Spinning",
    // "Climbing",
  ]

  const tableRows = classrooms.map((room) => {
    const restOfRow = []
    for (let i = 0; i < hours.length - 1; ++i) {
      const event = dbEvents.find(
        (e) => e.classroom === room && e.hour === hours[i + 1],
      )
      restOfRow.push({
        title: event ? event.title : "",
        hour: hours[i + 1],
        classroom: room,
        key: uuid(),
        style: `bg-table-200 text-base `,
      })
    }
    return [
      {
        title: room,
        classroom: room, //not sure i need it
        key: uuid(),
        style: `bg-table-100 sticky left-0 text-base `,
      },
      ...restOfRow,
    ]
  })

  const tableHours = hours.map((hour, i) => {
    return {
      classroom: "", //not sure i need it
      title: hour,
      hour: hour,
      key: uuid(),
      style: `h-5 z-20 text-base sticky top-0`,
    }
  })

  const table = [...tableHours, ...tableRows.flat()]
  return (
    <div className="mb-2 ml-1 flex h-[89dvh] flex-col">
      <h2 className="text-center text-lg text-text-gray-100 ">
        Monday 31 March 2025
      </h2>

      <div className="overflow-x-auto overflow-y-auto bg-white">
        <div
          className={`grid h-max w-max gap-1`}
          style={{
            gridTemplateColumns: `repeat(${hours.length}, minmax(5rem, auto))`,
            gridTemplateRows: ` 20px repeat(${classrooms.length + 1}, minmax(3rem, 1fr))`,
          }}
        >
          <div className="absolute z-10 h-[24px] w-full bg-white"></div>
          <div className="absolute left-0 z-30 h-6 w-[84px] bg-white"></div>
          {table.map((cell) => {
            return (
              <div
                key={cell.key}
                onClick={() => handleClickedCell(cell)}
                className={`${cell.style} flex items-center justify-center rounded-md`}
              >
                {cell.title}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
