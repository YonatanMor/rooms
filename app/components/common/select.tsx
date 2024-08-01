import { useEffect, useState } from "react"
import { IoIosArrowDown } from "react-icons/io"

export default function Select({ options, inputId, dbValue, setHideForm }) {
  const [showOpts, setShowOpts] = useState(false)
  const [selected, setSelected] = useState()

  const handleSelecion = (val) => {
    setSelected(val)
    setShowOpts(false)
  }

  useEffect(() => setHideForm(showOpts), [showOpts])
// fix the textarea data goming back form the DB, it have a issue where it shows the previous clicked cell 
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
          
            <input
              readOnly
              name={inputId}
              id={inputId}
              type="text"
              className="pointer-events-none w-full rounded-lg pb-1 text-2xl text-text-grey-400"
              value={selected ? selected : dbValue ? dbValue : options[0].value}
            />
          </div>
        </div>
      )}

      {showOpts && (
        <div className="absolute z-10 flex w-full flex-col items-center gap-3 ">
          {options.slice(1).map((opt, i) => {
            return (
              <div
                className=" flex h-16 w-full items-center justify-start rounded-3xl border-4 border-table-100 bg-white pl-3 text-2xl text-text-grey-400"
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
