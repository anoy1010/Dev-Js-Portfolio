import React from 'react'
import { motion } from 'framer-motion'

export default function Button({children}) {
  return (
    <>
      <motion.div
         whileHover={{scale:1.1}}
         whileTap={{ scale: 0.9 }}
         transition={{ type: "spring", stiffness: 400 }}
      >
        <button className='font-bold h-full bg-[#4556F5] text-white hover:bg-[#8A95FF]  transition ease-in-out duration-200 px-[28px] flex items-center justify-center'>{children}</button>
        
      </motion.div>
    </>
  )
}

