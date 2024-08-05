import { useEffect, useState } from "react"
import { IoIosArrowDown } from "react-icons/io"

export default function Select({ options, inputId, dbValue, setHideForm }) {
  const [showOpts, setShowOpts] = useState(false)
  const [selected, setSelected] = useState()

  const handleSelecion = (opt) => {
    if (!opt.disable) {
      setSelected(opt.value)
      setShowOpts(false)
    }
  }

  useEffect(() => setHideForm(showOpts), [showOpts])
  return (
    <>
      {!showOpts && (
        <div
          onClick={() => setShowOpts(true)}
          className={` ${showOpts ? `hidden` : `items-strech flex flex-col justify-center`}`}
        >
          <div className=" mb-2 flex h-14 items-center justify-start gap-3 rounded-full bg-white opacity-85">
            <div className="absolute ml-3">
              <IoIosArrowDown size={25} color="grey" />
            </div>

            <input
              readOnly
              name={inputId}
              id={inputId}
              type="text"
              className="pointer-events-none w-full rounded-full pb-1 text-center  text-2xl"
              value={selected ? selected : dbValue ? dbValue : options[0].value}
            />
          </div>
        </div>
      )}

      {showOpts && (
        <div className="absolute z-10 flex w-full flex-col items-center gap-3 ">
          {options.map((opt, i) => {
            return (
              <div
                className={`${opt.disable ? "text-text-grey-200" : "text-text-grey-500"} flex h-16 w-full items-center justify-start rounded-3xl border-4 border-table-100 bg-white pl-3 text-2xl`}
                onClick={() => handleSelecion(opt)}
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
