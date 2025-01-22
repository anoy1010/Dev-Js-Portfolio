import React from 'react'
import { motion } from 'framer-motion'

function ButtonView({children}) {
  return (
    <>
      <motion.div
         whileHover={{scale:1.1}}
         whileTap={{ scale: 0.9 }}
         transition={{ type: "spring", stiffness: 400 }}
      >
        <button className='font-bold bg-[#4556F5] w-[168px] text-white p-[19px] flex items-center justify-center'>{children}</button>
      </motion.div>
    </>
  )
}

export default ButtonView