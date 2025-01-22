import React from "react"
import { motion } from "framer-motion"

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
  export default CardSlidesYview