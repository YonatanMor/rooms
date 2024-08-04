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
// the hours cells are clickable
export default function EventDialog({ clickedCell }) {
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
          className="absolute z-50 flex h-full w-screen flex-col justify-end"
          onClick={() => setShowEventDialog(false)}
        >
          {hideForm && (
            <div className="absolute z-10 h-[93%] w-full rounded-t-3xl bg-gradient-to-t from-[#484a4e] to-[#b9bcc1]"></div>
          )}
          <div
            className="flex h-[93%] flex-col items-center  rounded-t-3xl bg-gradient-to-t from-[#484a4e] to-[#b9bcc1]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className=" flex w-full items-center justify-between">
              <div
                onClick={() => setShowEventDialog(false)}
                className=" text-text-grey-300 relative -top-1.5 z-20 ml-3 text-7xl font-extralight"
              >
                &times;
              </div>
              <button
                name="action"
                form="create/update_event"
                onClick={() => setShowEventDialog(false)}
                type="submit"
                className="z-20 mr-5 h-10 w-24 rounded-3xl bg-[#A1DD70] text-xl"
                value="action_write"
              >
                Save
              </button>
            </div>

            <div className="text-text-grey-500 relative flex h-[80%] w-[90%] justify-center">
              <Form
                id="create/update_event"
                method="POST"
                className=" flex w-full flex-col items-stretch justify-start" // add balck flex class
              >
                <span className="pl-4 text-text-grey-600">Event title</span>
                <input
                  maxLength={20}
                  type="text"
                  defaultValue={displayEvent?.title}
                  placeholder="Event title"
                  name="title"
                  id="title"
                  className="mb-2 h-14 rounded-full pb-1 text-center text-2xl opacity-85"
                />

                <span className="pl-4 text-text-grey-600">Classroom</span>
                <input
                  name="classroom"
                  type="text"
                  id="classroom"
                  readOnly
                  defaultValue={
                    displayEvent?.classroom || clickedCell.classroom
                  }
                  className="mb-2 h-14 rounded-full pb-1 text-center text-2xl opacity-85"
                />

                <span className="pl-4 text-text-grey-600">Time</span>
                <input
                  name="hour"
                  type="text"
                  id="hour"
                  readOnly
                  defaultValue={displayEvent?.hour || clickedCell.hour}
                  className="mb-2 h-14 rounded-full pb-1 text-center text-2xl opacity-85"//migration & zod
                />

                <span className="pl-4">Duration</span>
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

                <span className="pl-4 text-text-grey-600">Type</span>
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

                <span className="pl-4 text-text-grey-600">Note</span>
                <textarea
                  name="note"
                  placeholder="note..."
                  id="note"
                  rows={3}
                  defaultValue={displayEvent?.note}
                  className="rounded-3xl px-3 py-1 text-start text-2xl opacity-85"
                  maxLength={80}
                />
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
                  className="z-20 mr-5 flex h-10  w-24 items-center justify-center gap-1 rounded-3xl bg-[#A91D3A] text-xl text-[#FFAAAA]"
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
