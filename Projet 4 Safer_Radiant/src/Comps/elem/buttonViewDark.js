import React from 'react'
import ButtonTap from '@/Comps/animation/buttonTap'

function ButtonViewDark({children}) {
  return (
    <ButtonTap>
      <button className='font-bold bg-black text-white w-[168px] p-[19px]  flex items-center justify-center'>{children}</button>
    </ButtonTap>
    )

}

export default ButtonViewDark