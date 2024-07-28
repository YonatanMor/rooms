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
  const [hideForm, setHideForm] = useState(false)
  const [displayEvent, setDisplayEvent] = useState({
    classroom: "",
    // createdAt: "",
    hour: "",
    id: "",
    title: "",
    type: "",
    // updatedAt: "",
    duration: "",
    note: "",
  })

  useEffect(() => {
    if (dbEvents && clickedCell) {
      const event = dbEvents.find(
        (e) =>
          e.hour === clickedCell.hour && e.classroom === clickedCell.classroom,
      )
      setDisplayEvent(
        event
          ? event
          : {
              classroom: "",
              hour: "",
              id: "",
              title: "",
              type: "",
              duration: "",
              note: "",
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
          {hideForm && (
            <div className="absolute z-10 h-[93%] w-full rounded-t-3xl bg-gradient-to-t from-[#484a4e] to-[#b9bcc1]"></div>
          )}
          <div
            className="flex h-[93%] flex-col items-center  rounded-t-3xl bg-gradient-to-t from-[#484a4e] to-[#b9bcc1]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex w-full items-center justify-between">
              <div
                onClick={() => setShowEventDialog(false)}
                className="relative -top-1.5 z-20 ml-3 text-7xl font-extralight text-text-gray-300"
              >
                &times;
              </div>
              <button
                form="create/update_event"
                onClick={() => setShowEventDialog(false)}
                type="submit"
                className="z-20 mr-5 h-10 w-24 rounded-3xl bg-white text-xl text-text-gray-300"
              >
                Save
              </button>
            </div>

            <div className="relative flex h-[80%] w-3/4 justify-center ">
              <Form
                id="create/update_event"
                method="POST"
                className="mt-4  flex h-[300px] w-full flex-col items-stretch justify-start gap-2" // add balck flex class
              >
                <input
                  maxLength={30}
                  type="text"
                  defaultValue={displayEvent.title}
                  // defaultValue={displayEvent.title}
                  // value={displayEvent ? displayEvent.title : ""}
                  // onChange={handleTitleChange}
                  placeholder="event title"
                  name="title"
                  id="title"
                />

                <input
                  name="classroom"
                  type="text"
                  id="classroom"
                  readOnly
                  value={clickedCell.classroom}
                />

                <input
                  name="hour"
                  type="text"
                  id="hour"
                  readOnly
                  value={clickedCell.hour}
                />

                <Select
                  setHideForm={setHideForm}
                  inputId={"duration"}
                  dbValue={displayEvent.duration}
                  options={[
                    { value: "0:30", disable: true },
                    { value: "1:00", disable: false },
                    { value: "1:30", disable: false },
                    { value: "2:00", disable: false },
                  ]}
                />

                <Select
                  setHideForm={setHideForm}
                  inputId={"type"}
                  dbValue={displayEvent.type}
                  options={[
                    { value: "Type", disable: true },
                    { value: "Event", disable: false },
                    { value: "Rehearsal", disable: false },
                    { value: "Lesson", disable: false },
                  ]}
                />

                <textarea
                  name="note"
                  id="note"
                  rows={3}
                  value={displayEvent ? displayEvent.note : ""}
                  onChange={handleNoteChange}
                />
              </Form>
            </div>

            <Form id="delete_event" method="DELETE">
              {displayEvent.id && (
                <button
                  name="action"
                  value={"action_delete"}
                  // form="delete_event"
                  onClick={() => setShowEventDialog(false)}
                  type="submit"
                  className="z-20 mr-5 h-10 w-24 rounded-3xl bg-white text-xl text-flag-red"
                >
                  Delete
                </button>
              )}
            </Form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
