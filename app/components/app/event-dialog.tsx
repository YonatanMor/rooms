import { motion, AnimatePresence } from "framer-motion"
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
          className="w-screen h-full absolute flex flex-col justify-end z-50"
          onClick={() => setShowEventDialog(false)}
        >
          <div
            className="h-[93%] bg-slate-400 rounded-t-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <div
                onClick={() => setShowEventDialog(false)}
                className="text-7xl font-extralight ml-3 relative -top-1.5"
              >
                &times;
              </div>
              <button className="mr-5 h-10 rounded-3xl w-24 bg-btn-300 ">
                Save
              </button>
            </div>
            <form action="">
              <input type="text" />
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
