import { Form } from "@remix-run/react"
import { AnimatePresence, motion } from "framer-motion"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "~/app-context"
import Select from "../common/select"

const slideMenuVariants = {
  open: { y: 0 },
  closed: { y: "100%" },
}

export default function EventDialog({ clickedCell, dbEvents }) {
  const { showEventDialog, setShowEventDialog } = useContext(AppContext)
  const [displayEvent, setDisplayEvent] = useState({
    classroom: "",
    createdAt: "d",
    hour: "d",
    id: "d",
    title: "d",
    type: "d",
    updatedAt: "d",
    duration: "d",
  })

  useEffect(() => {
    if (dbEvents && clickedCell) {
      const val = dbEvents.find(
        (e) =>
          e.hour === clickedCell.hour && e.classroom === clickedCell.classroom,
      )
      setDisplayEvent(
        val
          ? val
          : {
              classroom: "",
              hour: "",
              id: "",
              title: "",
              type: "",
              duration: "",
            },
      )
    }
  }, [clickedCell])

  const handleTitleChange = (e) => {
    setDisplayEvent((prev) => {
      if (prev) {
        return { ...prev, title: e.target.value }
      } else
        return {
          // prev,
          classroom: "",
          createdAt: "",
          hour: "",
          id: "",
          title: "",
          type: "",
          updatedAt: "",
          duration: "",
        }
    })
  }

  // const handleTypeChange = (e) => {
  //   setDisplayEvent((prev) => {
  //     if (prev) {
  //       return { ...prev, type: e.target.value }
  //     } else {
  //       return prev
  //     }
  //   })
  // }

  const handleNoteChange = (e) => {
    setDisplayEvent((prev) => {
      if (prev) {
        return { ...prev, note: e.target.value }
      } else {
        return prev
      }
    })
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
          <div
            className="flex h-[93%] flex-col items-center  rounded-t-3xl bg-gradient-to-t from-[#484a4e] to-[#b9bcc1]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex w-full items-center justify-between">
              <div
                onClick={() => setShowEventDialog(false)}
                className="relative -top-1.5 ml-3 text-7xl font-extralight text-text-gray-300"
              >
                &times;
              </div>
              <button
                form="event_dialog"
                onClick={() => setShowEventDialog(false)}
                type="submit"
                className="mr-5 h-10 w-24 rounded-3xl bg-btn-300 "
              >
                Save
              </button>
            </div>

            <div className="relative flex h-[80%] w-3/4 justify-center bg-black">
              <Form
                id="event_dialog"
                method="POST"
                className="mt-4 flex h-[300px] w-3/4 flex-col items-stretch justify-start gap-2 "
              >
                <input
                  type="text"
                  // value={"gdfg"}
                  value={displayEvent ? displayEvent.title : ""}
                  onChange={handleTitleChange}
                  placeholder="event title"
                  name="title"
                  id="title"
                />

                {/* <select
                  name="type"
                  id="type"
                  // defaultValue={"Event type"}
                  value={displayEvent ? displayEvent.type : ""}
                  onChange={handleTypeChange}
                >
                  <option value="" disabled>
                    Select a type
                  </option>
                  <option value="event">Event</option>
                  <option value="rehearsal">Rehearsal</option>
                  <option value="lesson">Lesson</option>
                </select> */}

                <input
                  name="classroom"
                  type="text"
                  id="classroom"
                  readOnly
                  value={clickedCell.classroom}
                  // onChange={handleChange}
                />

                <input
                  name="hour"
                  type="text"
                  id="hour"
                  readOnly
                  value={clickedCell.hour}
                />

                <Select
                  inputId={"duration"}
                  dbValue={displayEvent.duration}
                  options={[
                    { value: "0:30", disable: true },
                    { value: "1:00", disable: false },
                    { value: "1:30", disable: false },
                    { value: "2:00", disable: false },
                  ]}
                />

                <textarea
                  name="note"
                  id="note"
                  rows={3}
                  value={displayEvent ? displayEvent.note : ""}
                  onChange={handleNoteChange}
                />

                <Select
                  inputId={"type"}
                  dbValue={displayEvent.type}
                  options={[
                    { value: "Type", disable: true },
                    { value: "Event", disable: false },
                    { value: "Rehearsal", disable: false },
                    { value: "Lesson", disable: false },
                  ]}
                />
              </Form>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
