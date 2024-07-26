import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io"

export default function Select({ options, inputId, dbValue }) {
  const [showOpts, setShowOpts] = useState(false)
  const [selected, setSelected] = useState()

  const handleSelecion = (val) => {
    setSelected(val)
    setShowOpts(false)
  }

  return (
    <>
      {!showOpts && (
        <div
          onClick={() => setShowOpts(true)}
          className={`items-strech ${showOpts ? `hidden` : `flex`}  flex-col justify-center`}
        >
          <div className=" flex h-10 items-center justify-start gap-3 rounded-lg bg-white ">
            <div className="ml-3">
              <IoIosArrowDown size={25} color="grey" />
            </div>
            {/* <span className="pb-1 text-2xl text-text-gray-400">
              {selected ? selected : options[0].value}
            </span> */}
            <input
              readOnly
              name={inputId}
              id={inputId}
              type="text"
              className="pointer-events-none w-full rounded-lg pb-1 text-2xl text-text-gray-400"
              // value={selected ? selected : options[0].value}
              value={selected ? selected : dbValue ? dbValue : options[0].value}
            />
          </div>
        </div>
      )}

      {showOpts && (
        <div className="absolute left-0 top-12 flex w-full flex-col items-center gap-3 shadow-slate-200">
          {options.slice(1).map((opt, i) => {
            return (
              // <input
              //   className="mb-1 h-10 w-full rounded-lg bg-white pl-3 text-2xl text-text-gray-400"
              //   type="text"
              //   id="type"
              //   // name={inputId}
              //   name="type"
              //   value='Event'
              //   // value={opt.value}
              //   onClick={() => handleSelecion(opt.value)}
              // />

              <div
                className=" flex h-10 w-full items-center justify-start rounded-lg border-4 border-table-100 bg-white pl-3 text-2xl text-text-gray-400"
                onClick={() => handleSelecion(opt.value)}
                key={i}
              >
                <span className="pl-5">{opt.value}</span>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

//   return (
//     <div className="relative flex flex-col items-stretch justify-center">
//       <div
//         className="flex h-10 items-center justify-start gap-3 rounded-lg bg-white cursor-pointer"
//         onClick={() => setShowOpt(!showOpt)}
//       >
//         <div className="ml-3">
//           <IoIosArrowDown size={25} color="grey" />
//         </div>
//         <input
//           disabled
//           type="text"
//           className="w-full rounded-lg bg-red-200 pb-1 text-2xl text-text-gray-400"
//           value={"select a type"}
//         />
//       </div>
//       {showOpt && (
//         <div className="absolute top-12 left-0 w-full bg-slate-400 z-10 rounded-lg">
//           <div className="p-2">opt 1</div>
//           <div className="p-2">opt 2</div>
//           <div className="p-2">opt 3</div>
//           <div className="p-2">opt 4</div>
//           <div className="p-2">opt 5</div>
//           <div className="p-2">opt 6</div>
//           <div className="p-2">opt 7</div>
//         </div>
//       )}
//     </div>
//   );
// }
