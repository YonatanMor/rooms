import { motion } from "framer-motion"

export default function EventDialog() {
  return (
    <motion.div className="w-full h-full absolute flex flex-col justify-end">
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
  )
}
