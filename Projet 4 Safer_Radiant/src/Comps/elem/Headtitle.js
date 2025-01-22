import React from 'react'

function Headtitle({title, text}) {
  return (
    <div className='text-white text-center py-[75px]'>
        <h1 className='font-semibold text-[56px]'>{title}</h1>
        <p className='font-medium text-[18px] px-[350px]'>{text}</p>
    </div>
  )
}

function Headtitle1({title, text}) {
  return (
    <div className=' text-center py-[75px]'>
        <h1 className='text-[#4556F5] font-semibold text-[56px]'>{title}</h1>
        <p className=' text-black font-light text-[18px] px-[350px]'>{text}</p>
    </div>
  )
}

function Headtitle2({title, text}) {
  return (
    <div className=' text-center py-[75px]'>
        <h1 className='text-[#187BF7] font-semibold text-[36px]'>{title}</h1>
        <p className=' text-black font-light text-[18px] px-[350px]'>{text}</p>
    </div>
  )
}

export default Headtitle;
export {Headtitle1};
export {Headtitle2};
