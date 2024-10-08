import { useEffect, useState } from "react"
import { IoIosArrowDown } from "react-icons/io"

type SelectProps = {
  setHideForm: (showForm: boolean) => void
  inputId: string
  dbValue: string | undefined
  options: Option[]
}

type Option = { value: string; disable: boolean }

export default function Select({
  options,
  inputId,
  dbValue,
  setHideForm,
}: SelectProps) {
  const [showOpts, setShowOpts] = useState(false)
  const [selected, setSelected] = useState("")

  const handleSelecion = (opt: Option) => {
    if (!opt.disable) {
      setSelected(opt.value)
      setShowOpts(false)
    }
  }

  useEffect(() => {
    setHideForm(showOpts)
  }, [showOpts,setHideForm])

  return (
    <>
      {!showOpts && (
        <div
          onClick={() => setShowOpts(true)}
          className={` ${showOpts ? `hidden` : `items-strech flex flex-col justify-center`}`}
        >
          <div className=" mb-6 flex h-14 items-center justify-start gap-3 rounded-lg border-2 border-[#1D54CA] bg-white opacity-85">
            <div className="absolute ml-3">
              <IoIosArrowDown size={25} color="grey" />
            </div>

            <input
              readOnly
              name={inputId}
              id={inputId}
              type="text"
              className="pointer-events-none w-full rounded-lg pb-1 text-center text-2xl"
              value={selected ? selected : dbValue ? dbValue : options[0].value}
            />
          </div>
        </div>
      )}

      {showOpts && (
        <div className="absolute left-0 top-10 z-30 w-full rounded-xl bg-[#e7e9ea] p-4 ">
          <div className="flex w-full flex-col items-center gap-6 ">
            {options.map((opt, i) => {
              return (
                <div
                  className={`${opt.disable ? "text-text-grey-200" : "text-text-grey-500"} flex h-14 w-full items-center justify-center rounded-lg  border-2 border-[#1D54CA] bg-white text-2xl shadow-lg`}
                  onClick={() => handleSelecion(opt)}
                  key={i}
                >
                  <span>{opt.value}</span>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}
