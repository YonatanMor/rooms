import TopBar from "~/components/app/top-bar"
import Table from "~/components/app/table"
import Flags from "~/components/app/flags"
import { motion } from "framer-motion"

const slideMenuVariants = {
  open: { x: 0 },
  closed: { x: "-100%" },
}

export default function EventDialog() {

  return (
    <div className="flex flex-col h-screen">
      <TopBar />
      <Table />
      <Flags />
      <motion.div
        variants={slideMenuVariants}
        initial="closed"
        animate="open"
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 400,
        }}
        className="w-full h-full absolute flex flex-col justify-end"
      >
        <div className="h-[93%] bg-slate-400 rounded-t-3xl ">
          <div className="flex justify-between items-center">
            <div className="text-7xl font-extralight ml-3 relative -top-1.5">
              &times;
            </div>
            <button className="mr-5 h-10 rounded-3xl w-24 bg-btn-300 ">
              Save
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
