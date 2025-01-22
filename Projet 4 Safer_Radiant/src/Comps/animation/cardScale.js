import React from 'react'
import { motion } from 'framer-motion'

function cardScale({children}) {
  return (
    <>
        <motion.div
        className="box"
        initial={{
            opacity:0,
            transform: 'translateY(-50px)',

        }}

        whileInView={{
            opacity:1,
            transform: 'translateY(0px)',
        }}
        transition={{
            duration:0.5,
            ease:'easeInOut',


        }}
        >
            <div>
                {children}
            </div>
        </motion.div>
    </>
  )
}

export default cardScale