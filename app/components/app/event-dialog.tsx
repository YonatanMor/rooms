import { Form } from "@remix-run/react"
import { AnimatePresence, motion } from "framer-motion"
import { useContext } from "react"
import { AppContext } from "~/app-context"

const slideMenuVariants = {
  open: { y: 0 },
  closed: { y: "100%" },
}



export default function EventDialog({ cellData, dbEvents }) {
  const { showEventDialog, setShowEventDialog } = useContext(AppContext)
  let displayEvent
  console.log("dbEvents: ", dbEvents)
  console.log("cellData: ", cellData)
  if (dbEvents && cellData) {
    displayEvent = dbEvents.find(
      (e) => e.hour === cellData.hour && e.classroom === cellData.classroom,
    )
    console.log(displayEvent)
  }

// const handleChange = (e)=>{}

  console.log(cellData)
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
            className="h-[93%] rounded-t-3xl bg-slate-400"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div
                onClick={() => setShowEventDialog(false)}
                className="relative -top-1.5 ml-3 text-7xl font-extralight"
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

            <div className="flex justify-center ">
              <Form
                id="event_dialog"
                method="POST"
                className="mt-4 flex h-[300px]  w-3/4 flex-col items-stretch justify-start gap-2 bg-red-300"
              >
                <input
                  type="text"
                  value={displayEvent ? displayEvent.title : ""}
                  placeholder="event title"
                  name="title"
                  id="title"
                />

                <select
                  name="type"
                  id="type"
                  defaultValue={"Event type"}
                  value={displayEvent ? displayEvent.type : ""}
                >
                  <option value="event">Event</option>
                  <option value="rehearsal">Rehearsal</option>
                  <option value="lesson">Lesson</option>
                </select>

                <input
                  name="hour"
                  type="text"
                  id="hour"
                  readOnly
                  value={cellData.hour}
                />

                <input
                  name="classroom"
                  type="text"
                  id="classroom"
                  readOnly
                  value={cellData.classroom}
                  // onChange={handleChange}
                />

                <textarea name="notes" id="notes" rows="3" 
                // value={displayEvent?displayEvent.note} 
                />
              </Form>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
