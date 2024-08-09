import { Form } from "@remix-run/react"
import { AnimatePresence, motion } from "framer-motion"
import { useContext, useState } from "react"
import { AppContext } from "~/app-context"
import { useIndexData } from "~/utils/use-matches"
import Select from "../common/select"

const slideMenuVariants = {
  open: { y: 0 },
  closed: { y: "100%" },
}

export type TClickedCell = {
  classroom: string
  duration: string
  hour: string
  isClickable: boolean
  key: string
  style: string
  title: string
  type: string
  innerStyle: string
  outerStyle: string
}

// the hours cells are clickable
export default function EventDialog({
  clickedCell,
}: {
  clickedCell: TClickedCell | null
}) {
  const { showEventDialog, setShowEventDialog } = useContext(AppContext)
  const [hideForm, setHideForm] = useState(false)

  let displayEvent
  const { events } = useIndexData()

  if (clickedCell) {
    displayEvent = events.find(
      (event) =>
        event.hour === clickedCell.hour &&
        event.classroom === clickedCell.classroom,
    )
  }

  return (
    <AnimatePresence>
      {showEventDialog && (
        <motion.div
          variants={slideMenuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          transition={{
            type: "spring",
            damping: 40,
            stiffness: 400,
          }}
          className="absolute z-50 flex h-full w-screen flex-col justify-end bg-black bg-opacity-30 backdrop-blur-[1px]"
          onClick={() => setShowEventDialog(false)}
        >
          {hideForm && (
            <div onClick={(e)=>e.stopPropagation()} className="absolute bg-white z-20 h-[93%] w-full rounded-t-3xl "></div>
          )}
          <div
            className="flex h-[93%] flex-col items-center rounded-t-3xl border-2 border-[#a2a8ab] bg-[#eff1f3] "
            onClick={(e) => e.stopPropagation()}
          >
            <div className=" flex w-full items-center justify-between">
              <div
                onClick={() => setShowEventDialog(false)}
                className=" relative -top-1.5 z-20 ml-3 text-7xl font-extralight text-text-grey-300"
              >
                &times;
              </div>
              <button
                name="action"
                form="create/update_event"
                onClick={() => setShowEventDialog(false)}
                type="submit"
                className="z-20 mr-5 h-10 w-24 rounded-3xl bg-[#90D26D] text-xl font-semibold text-[#EEEEEE] shadow-sm"
                value="action_write"
              >
                Save
              </button>
            </div>

            <div className="border-1 relative flex h-[80%] w-[90%] justify-center rounded-xl bg-[#F5F7F8] p-4 text-text-grey-500 shadow">
              <Form
                id="create/update_event"
                method="POST"
                className="flex w-full flex-col items-stretch justify-start"
              >
                <div className="relative">
                  <label
                    htmlFor="title"
                    className="absolute -top-3 left-5 z-10 rounded-xl border-2 bg-white px-2 text-sm text-text-grey-400"
                  >
                    Title
                  </label>
                  <input
                    maxLength={20}
                    type="text"
                    defaultValue={displayEvent?.title}
                    placeholder="Event title"
                    name="title"
                    id="title"
                    className="mb-6 h-14 w-full rounded-lg border-2 border-[#1D54CA] pb-1 text-center text-2xl"
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="classroom"
                    className="absolute -top-3 left-5 z-10 rounded-xl border-2 bg-white px-2 text-sm text-text-grey-400"
                  >
                    Room
                  </label>
                  <input
                    name="classroom"
                    type="text"
                    id="classroom"
                    readOnly
                    defaultValue={
                      displayEvent?.classroom || clickedCell?.classroom
                    }
                    className="mb-6 h-14 w-full rounded-lg border-2 border-[#1D54CA] pb-1 text-center text-2xl text-[#91918f]"
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="hour"
                    className="absolute -top-3 left-5 z-10 rounded-xl border-2 bg-white px-2 text-sm text-text-grey-400"
                  >
                    Time
                  </label>
                  <input
                    name="hour"
                    type="text"
                    id="hour"
                    readOnly
                    defaultValue={displayEvent?.hour || clickedCell?.hour}
                    className="mb-6 h-14 w-full rounded-lg border-2 border-[#1D54CA] pb-1 text-center text-2xl text-[#91918f] "
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="duration"
                    className="absolute -top-3 left-5 z-10 rounded-xl border-2 bg-white px-2 text-sm text-text-grey-400"
                  >
                    Duration
                  </label>
                  <Select
                    setHideForm={setHideForm}
                    inputId={"duration"}
                    dbValue={displayEvent?.duration}
                    options={[
                      { value: "0:30", disable: false },
                      { value: "1:00", disable: false },
                      { value: "1:30", disable: false },
                      { value: "2:00", disable: false },
                    ]}
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="type"
                    className="absolute -top-3 left-5 z-10 rounded-xl border-2 bg-white px-2 text-sm text-text-grey-400"
                  >
                    Type
                  </label>
                  <Select
                    setHideForm={setHideForm}
                    inputId={"type"}
                    dbValue={displayEvent?.type}
                    options={[
                      { value: "Type", disable: true },
                      { value: "Event", disable: false },
                      { value: "Rehearsal", disable: false },
                      { value: "Lesson", disable: false },
                    ]}
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="note"
                    className="absolute -top-3 left-5 z-10 rounded-xl border-2 bg-white px-2 text-sm text-text-grey-400"
                  >
                    Note
                  </label>
                  <textarea
                    name="note"
                    placeholder="note..."
                    id="note"
                    rows={3}
                    defaultValue={displayEvent?.note}
                    className=" w-full rounded-lg border-2 border-[#1D54CA] px-2 pt-1 text-start text-2xl"
                    maxLength={80}
                  />
                </div>
              </Form>
            </div>

            {displayEvent?.id && (
              <Form method="post">
                <input type="hidden" name="eventId" value={displayEvent.id} />
                <button
                  name="action"
                  value="action_delete"
                  onClick={() => setShowEventDialog(false)}
                  type="submit"
                  className="z-20 mt-3 flex h-10 w-24 items-center justify-center gap-1 rounded-3xl bg-[#c4405b] text-xl font-semibold text-[#eac4c4] shadow-sm"
                >
                  {/* <AiTwotoneDelete size={24}/> */}
                  <span>Delete</span>
                </button>
              </Form>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
