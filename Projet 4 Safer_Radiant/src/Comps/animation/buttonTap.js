import React from 'react'
import { motion } from 'framer-motion'

function buttonTap({children}) {
  return (
   
    <motion.div
         className="box"
         whileHover={{scale:1.1}}
         whileTap={{ scale: 0.9 }}
         transition={{ type: "spring", stiffness: 400 }}
    >
        <div>
            {children}
        </div>
    </motion.div>

  )
}

export default buttonTap