import { motion } from 'framer-motion'
import React from 'react'

 function SlideTwo({children}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                transform: 'translateX(-100px)',
            }}
            whileInView={{
                opacity:1,
                transform: 'translateX(0px)',
            }}
            transition={{
                ease:'easeOut',
                duration: 1.5,
                delay:1,
            }}
        >
            {children}
        </motion.div>
    )
    
 }

export default function SlideOne({children}) {
  return (
    <motion.div
    initial={{
        opacity: 0,
        transform: 'translateX(-100px)',
    }}
    whileInView={{
        opacity:1,
        transform: 'translateX(0px)',
    }}
    transition={{
        ease:'easeOut',
        duration: 1.5,
        
    }}
    >
        {children}
    </motion.div>
  )
};
export {SlideTwo};