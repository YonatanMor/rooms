export default function Table() {
  //   ;`grid-template-columns: repeat(hours.length, (1fr);
  // grid-template-rows: repeat(classRooms.length , minmax(1fr, 1fr));`

  const hours = [
    "",
    "8:00",
    "8:30",
    "sd",
    "sd",
    "sd",
    "sd",
    "sd",
    "sd",
    "sd",
    "sd",
    "sd",
    "sd",
    "sd",
    "sd",
  ]
  const classrooms = [
    "Yoga",
    "Spinning",
    "Climbing",
    "s",
    "sd",
    "sd",
    "sd",
    "sd",
    ,
    "sd",
    "sd","Yoga",
    "Spinning",
    "Climbing",
    "s",
    "sd",
    "sd",
    "sd",
    "sd",
    "sd",
    "sd",
    "sd",
    "sd",
    "sd",
    "sd",
  ]
  let key = 0

  const tableRows = classrooms.map((room) => {
    const restOfRow = []
    for (let i = 0; i < hours.length - 1; ++i) {
      restOfRow.push({ content: "", id: key + 100, style: `bg-table-200` })
      key += 1
    }
    return [
      { content: room, id: key + 1000, style: `bg-table-300` },
      ...restOfRow,
    ]
  })

  const tableHours = hours.map((hour, i) => {
    return { content: hour, id: i, style: `bg-white` }
  })

  const table = [...tableHours, ...tableRows.flat()]

  console.log(table)

  return (
    <div className="flex flex-col h-[90dvh] mb-2 ">
      <h2 className="text-center text-text-gray-100 text-lg ">
        Monday 31 March 2025
      </h2>

      <div className=" bg-slate-800 w-full grow overflow-x-auto overflow-y-auto border-2">
        <div
          // className={`bg-red-300 grid grid-rows-4 grid-cols-4 gap-1`}
          className={`grid gap-1`}
          style={{
            gridTemplateColumns: `repeat(${hours.length}, minmax(55px, auto))`,

            gridTemplateRows: `repeat(${classrooms.length + 1}, minmax(40px, 1fr))`,
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


//   return (
//     <div className="flex flex-col h-[90vh] mb-2">
//       <h2 className="text-center text-text-gray-100 text-lg">
//         Monday 31 March 2025
//       </h2>

//       <div className="bg-slate-800 w-full grow overflow-x-auto overflow-y-auto border-2">
//         <div
//           className={`grid gap-1`}
//           style={{
//             gridTemplateColumns: `repeat(${hours.length}, minmax(100px, auto))`,
//             gridTemplateRows: `repeat(${classrooms.length + 1}, minmax(40px, 1fr))`,
//           }}
//         >
//           {table.map((cell) => (
//             <div
//               key={cell.id}
//               className={`${cell.style} flex justify-center items-center`}
//             >
//               {cell.content}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }