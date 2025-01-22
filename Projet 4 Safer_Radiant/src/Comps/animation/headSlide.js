import React from 'react'
import { motion } from 'framer-motion'

function headSlide({children}) {
    return (
        <motion.div
             className="box"
             initial= {{
                opacity:0,
                transform: "translateX(-1000px)",
             }}
             whileInView={{
                opacity:1,
                transform: "translateX(0px)",
             }}
            
             transition={{ 
                duration:0.5,
                ease:'easeIn',
                
                }}
            >
            <div>
                {children}
            </div>
        </motion.div>
    
      )
    }

export default headSlide