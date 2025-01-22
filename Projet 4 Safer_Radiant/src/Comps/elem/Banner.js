"use client";

import React,{useState} from 'react'
import Button from './Button';
import Link from 'next/link';

function Banner({text,buttonTitle}) {

   
  return (
    <div className='flex justify-center items-center gap-x-32 py-6'>
        <p className='text-3xl capitalize text-[#52C6FF] font-semibold'>{text}</p>
        <button
        className="font-semibold p-4 bg-[#52C6FF] capitalize text-xl text-white"
        onClick={() => document.getElementById('my_modal_5').showModal()}
      >
        essayer
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
                <Link href="./components/elements/form/process">
                    <Button 
                    text="continuer"
                    />
                </Link>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default Banner