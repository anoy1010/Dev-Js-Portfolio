"use client"

import { Navbar } from '@/Comps/Header'
import React from 'react'



function Errorpage() {
  return (
    <div className='md:h-screen h-auto'>
        <Navbar/>
        <section className='bg-black'>
            <div className='flex items-center justify-center h-screen&&'>
                <img
                    src='error_eyes.gif'
                    alt="background"
                />
                <div className=' text-center flex flex-col absolute text-white font-bold max-md:top-32 '>
                    <h1 className='text-3xl md:text-6xl uppercase '> Site en maintenance</h1>
                    <h2 className='text-xl md:text-4xl '>We are in the works ... coming soon!</h2>
                    <p className='py-8 max-sm:text-sm max-sm:px-8' >le site est en construction pour toute information veuillez nous contacter ultérieurement. </p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Errorpage