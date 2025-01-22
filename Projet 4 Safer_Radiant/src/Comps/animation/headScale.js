import React from 'react'
import { motion } from 'framer-motion'

function headScale({children}) {
  return (
    <motion.div
         className="box"
         initial= {{
            opacity:0,
            scale: 0.5,
         }}
         whileInView={{
            opacity:1,
            scale: 1
         }}
        
         transition={{ 
            duration:1,
            ease:'easeInOut',
            delay:0.5
            }}
        >
        <div>
            {children}
        </div>
    </motion.div>

  )
}

export default headScale