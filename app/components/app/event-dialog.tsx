import { Form } from "@remix-run/react"
import { AnimatePresence, motion } from "framer-motion"
import { useContext } from "react"
import { AppContext } from "~/app-context"

const slideMenuVariants = {
  open: { y: 0 },
  closed: { y: "100%" },
}

export default function EventDialog() {
  const { showEventDialog, setShowEventDialog } = useContext(AppContext)

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
                type="submit"
                className="mr-5 h-10 w-24 rounded-3xl bg-btn-300 "
              >
                Save
              </button>
            </div>

            <div className="flex justify-center ">
              <Form
                id="event_dialog"
                method="post"
                className="mt-4 flex h-[300px]  w-3/4 flex-col items-stretch justify-start gap-2 bg-red-300"
              >
                <input
                  type="text"
                  placeholder="event title"
                  name="title"
                  id="title"
                />
                <select name="type" id="type" defaultValue={"Event type"}>
                  <option value="event">Event</option>
                  <option value="rehearsal">Rehearsal</option>
                  <option value="lesson">Lesson</option>
                </select>
                {/* <select name="type" id="type">
                  <option disabled selected>
                    Room
                  </option>
                  <option value="event">Event</option>
                  <option value="rehearsal">Rehearsal</option>
                  <option value="lesson">Lesson</option>
                </select>
                <select name="type" id="type">
                  <option disabled selected>
                    Time
                  </option>
                  <option value="event">Event</option>
                  <option value="rehearsal">Rehearsal</option>
                  <option value="lesson">Lesson</option>
                </select>
                <select name="type" id="type">
                  <option disabled selected>
                    Duration
                  </option>
                  <option value="event">Event</option>
                  <option value="rehearsal">Rehearsal</option>
                  <option value="lesson">Lesson</option>
                </select> */}
              </Form>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
