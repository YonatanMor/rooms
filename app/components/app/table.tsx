import { useContext } from "react"
import { AppContext } from "~/app-context"

export default function Table() {
  const { showEventDialog, setShowEventDialog } = useContext(AppContext)

  const handleEvet = () => {
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
        title: "",
        hour: hours[i + 1],
        classroom: room,
        id: key + 100,
        style: `bg-table-200 text-base `,
      })
      key += 1
    }
    return [
      {
        title: room,
        id: key + 10000,
        style: `bg-table-100 sticky left-0 text-base `,
      },
      ...restOfRow,
    ]
  })

  const tableHours = hours.map((hour, i) => {
    return {
      title: hour,
      id: i,
      style: `h-5 z-20 text-base sticky top-0`,
    }
  })

  const table = [...tableHours, ...tableRows.flat()]

  return (
    <div className="flex flex-col h-[89dvh] mb-2 ml-1">
      <h2 className="text-center text-text-gray-100 text-lg ">
        Monday 31 March 2025
      </h2>

      <div className="bg-white overflow-x-auto overflow-y-auto">
        <div
          className={`grid gap-1 w-max h-max`}
          style={{
            gridTemplateColumns: `repeat(${hours.length}, minmax(5rem, auto))`,
            gridTemplateRows: ` 20px repeat(${classrooms.length + 1}, minmax(3rem, 1fr))`,
          }}
        >
          <div className="w-full h-[24px] absolute z-10 bg-white"></div>
          <div className="bg-white absolute z-30 h-6 w-[84px] left-0"></div>
          {table.map((cell) => (
            <div
              key={cell.id}
              onClick={handleEvet}
              className={`${cell.style} flex justify-center items-center rounded-md`}
            >
              {cell.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
