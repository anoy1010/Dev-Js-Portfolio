import React from 'react'
import { motion } from 'framer-motion'

function cardSlideY({children}) {
  return (
    <>
        <motion.div
        initial={{
            opacity:0,
            transform: 'translateY(-100px)'
        }}
        animate={{
            opacity:1,
            transform: 'translateY(0px)'
        }}
        transition={{
            type:'spring',
            duration:2,
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

function CardSlideYview({children}) {
    return (
      <>
          <motion.div
          className='box'
          initial={{
              opacity:0,
              transform: 'translateY(-100px)'
          }}
          whileInView={{
              opacity:1,
              transform: 'translateY(0px)'
          }}
          viewport={{once:true}}
          transition={{
              type:'spring',
              duration:2,
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

export default cardSlideY;
export {CardSlideYview}