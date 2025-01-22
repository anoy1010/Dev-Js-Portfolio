import React from 'react'
import { motion } from 'framer-motion'

function heroScale({children}) {
    const boxVariantsheros = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1 },
       };
  return (
    <>
        <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={boxVariantsheros}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="box"
            >
                {children}
            </motion.div>
    </>
  )
}
function HeroScale1({children}) {
    const boxVariantsheros = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1 },
       };
  return (
    <>
        <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={boxVariantsheros}
              transition={{ duration: 1, ease: 'easeInOut', delay:1 }}
              className="box"
            >
                {children}
            </motion.div>
    </>
  )
}

export default heroScale;
export {HeroScale1};