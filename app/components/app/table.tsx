import { useContext, useRef } from "react"
import { v4 as uuid } from "uuid"
import { AppContext } from "~/app-context"
import { TEvent } from "~/routes/_index"
import { TClickedCell } from "./event-dialog"

export default function Table({
  dbEvents,
  setClickedCell,
}: {
  dbEvents: TEvent[]
  setClickedCell: (_show: TClickedCell) => void
}) {
  const today = new Date()
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  const fullDate = today.toLocaleDateString("en-US", options)
  const displayDate = fullDate.slice(0, 16) + fullDate.slice(17)

  const { setShowEventDialog } = useContext(AppContext)
  const skipCellsCounter = useRef(1)

  const handleClickedCell = (cell: TClickedCell) => {
    if (cell.isClickable) {
      setClickedCell(cell)
      setShowEventDialog(true)
    }
  }

  const hours = [
    "",
    // "00:00",
    // "00:30",
    // "01:00",
    // "01:30",
    // "02:00",
    // "02:30",
    // "03:00",
    // "03:30",
    // "04:00",
    // "04:30",
    // "05:00",
    // "05:30",
    // "06:00",
    // "06:30",
    // "07:00",
    // "07:30",
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
    // "17:30",
    // "18:00",
    // "18:30",
    // "19:00",
    // "19:30",
    // "20:00",
    // "20:30",
    // "21:00",
    // "21:30",
    // "22:00",
    // "22:30",
    // "23:00",
    // "23:30",
  ]

  const classrooms = [
    "Ellis",
    "Davis",
    "Coltrane",
    "Ellington",
    "Armstrong",
    "Parker",
    "Sole",
    "Sweet",
    "R&B",
    "High",
    "Spirit",
    "Old",
    "King",
    "Stern",
  ]

  const tableRows = classrooms.map((room) => {
    const restOfRow = []
    for (let i = 0; i < hours.length - 1; ++i) {
      const event = dbEvents.find(
        (e) => e.classroom === room && e.hour === hours[i + 1],
      )
      restOfRow.push({
        title: event?.title || "",
        hour: hours[i + 1],
        classroom: room,
        type: event?.type || "",
        key: uuid(),
        isClickable: true,
        duration: event?.duration || "",
        styleOuter: "border-[1px] border-text-grey-700 bg-white flex",
        styleInner: `flex rounded-[4px] text-base ${event?.type === "Event" ? "bg-event-bg-blue text-event-text-blue" : event?.type === "Rehearsal" ? "bg-event-bg-green  text-event-text-green" : event?.type === "Lesson" ? "bg-event-bg-red  text-event-text-red" : "bg-white"}`,
        // style: "",
      })
    }
    return [
      {
        title: room,
        classroom: room, //not sure i need it
        key: uuid(),
        // style:"",
        styleOuter: `sticky px-1 bg-white left-0 text-base border-[1px] rounded-l-none border-text-grey-700 flex`, //sticky
        styleInner: `flex items-center text-text-grey-400`,
        isClickable: false,
        type: "",
      },
      ...restOfRow,
    ]
  })

  const tableHours = hours.map((hour) => {
    return {
      classroom: "", //not sure i need it
      title: hour,
      hour: hour,
      key: uuid(),
      styleOuter: `z-20 sticky top-0 `,
      styleInner: `text-base text-text-grey-200 text-[10px] flex justify-center 	`,
      // set text size in tailwind
      isClickable: false,
      duration: "",
      type: "",
      // style: "",
      // innerStyle: "",
      // outerStyle: "",
    }
  })

  const table = [...tableHours, ...tableRows.flat()]

  // useEffect(() => {
  //   if (firstColWidth.current && patch.current) {
  //     const sourceDivWidth = sourceDivRef.current.getBoundingClientRect().width;
  //     targetDivRef.current.style.width = `${sourceDivWidth}px`;
  //   }
  // }, []);

  return (
    <div className="relative mb-2 flex h-[89dvh] flex-col">
      <h2 className="text-center text-lg font-semibold text-text-grey-200">
        {displayDate}
      </h2>
      <div className="overflow-x-auto overflow-y-auto bg-text-grey-700">
        <div
          className={`grid h-max w-max`}
          style={{
            gridTemplateColumns: `repeat(${hours.length}, minmax(3rem, auto))`,
            gridTemplateRows: `20px repeat(${classrooms.length}, minmax(3rem, 1fr))`,
          }}
        >
          <div className="absolute z-10 h-5 w-full bg-white"></div>
          <div className="absolute left-0 z-30 h-5 w-[78px] bg-white"></div>

          {table.map((cell) => {
            console.log(cell)
            if (skipCellsCounter.current === 1) {
              cell.duration === "1:00"
                ? (skipCellsCounter.current = 2)
                : cell.duration === "1:30"
                  ? (skipCellsCounter.current = 3)
                  : cell.duration === "2:00"
                    ? (skipCellsCounter.current = 4)
                    : 0

              return (
                <div
                  key={cell.key}
                  className={`${cell.styleOuter} rounded-lg`}
                  style={{ gridColumn: `span ${skipCellsCounter.current}` }}
                >
                  <div
                    onClick={() => handleClickedCell(cell)}
                    className={`${cell.styleInner} grow `} //maybe the white class is redundent
                  >
                    {cell.duration && (
                      <div className="flex rounded-[4px]">
                        <div
                          className={`w-1 rounded-l-[4px] ${cell?.type === "Event" ? "bg-event-text-blue " : cell?.type === "Rehearsal" ? "bg-event-text-green" : cell?.type === "Lesson" ? "bg-event-text-red" : ""}`}
                        ></div>
                        <div className="flex flex-col px-1 ">
                          <span className=" pt-[1px] text-[10px]">
                            {/* set the text size in TW config */}
                            {cell.hour} -{" "}
                            {
                              hours[
                                hours.indexOf(`${cell.hour}`) +
                                  skipCellsCounter.current
                              ]
                            }
                          </span>
                          <div className="font-bold">{cell.title}</div>
                        </div>
                      </div>
                    )}
                    {!cell.isClickable && (
                      <div className="flex">{cell.title}</div>
                    )}
                  </div>
                </div>
              )
            }

            --skipCellsCounter.current
            return null
          })}
        </div>
      </div>
    </div>
  )
}
