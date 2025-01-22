import React from 'react'
import Image from 'next/image'

function Loader() {
  return (
    <div className='Loading-page flex justify-center items-center h-screen bg-black'>
        <div className='Loader'>
            <Image
            className=''
                src="/loader2.gif"
                width={500}
                height={500}
                alt='Chargement'
            />
        </div>

    </div>
  )
}

export default Loader