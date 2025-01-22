import React from 'react'
import ButtonTap from '@/Comps/animation/buttonTap'

function ButtonViewBlue({text}) {
  return (
    <ButtonTap>
      <button className='font-bold bg-[#52C6FF]  text-white px-[19px] py-[8px] flex items-center justify-center'>{text}</button>
    </ButtonTap>
  )
}

export default ButtonViewBlue