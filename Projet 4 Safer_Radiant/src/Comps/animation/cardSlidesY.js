import React from 'react'
import { motion } from 'framer-motion'

function cardSlidesY({children}) {
  return (
    <>
        <motion.div
        initial={{
            opacity:0,
            transform: 'translateY(100px)'
        }}
        animate={{
            opacity:1,
            transform: 'translateY(0px)'
        }}
        transition={{
            type:'spring',
            duration:2,
            ease:'easeIn',

        }}
        >
            <div>
                {children}
            </div>
        </motion.div>
    </>
  )
}

function CardSlidesYview({children}) {
    return (
      <>
            <motion.div
            className='box'
                initial={{
                    opacity:0,
                    transform: 'translateY(100px)',
                }}
                exit={none}
                whileInView={{
                    opacity:1,
                    transform: 'translateY(0px)',
                }}
                viewport={{
                    once:true
                }}
                transition={{
                    duration:1,
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
export default cardSlidesY;
export {CardSlidesYview};