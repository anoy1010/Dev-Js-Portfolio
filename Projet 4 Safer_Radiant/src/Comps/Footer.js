import React from 'react'
import logoblack from 'public/logo_black.png'
import Image from 'next/image'
import {FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaWhatsappSquare} from 'react-icons/fa'

function Footer() {
  return (
    <footer className='bg-[#E6E7E8] px-[150px]'>
        <div className='flex justify-between  py-[50px]'>
            <div className=' flex flex-col'>
                <Image
                    src={logoblack}
                    width={250}
                    height={108}
                    alt='Safer'
                />
                <p className='text-xl font-semibold flex justify-end'>BE Safe, Be Smart</p>
            </div>
            <div className='text-sm font-normal w-[493px]'>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd</p>
            </div>
        </div>
        <div className='flex justify-between'>
            <div>
                <h3 className='text-xl'>Follow us :</h3>
                <ul className='flex py-4 gap-x-4'>
                    <li className='hover:bg-[#939598] transition ease-in-out duration-300 cursor-pointer rounded-xl p-2'><FaFacebookSquare color="black" fontSize="37" /></li>
                    <li className='hover:bg-[#939598] transition ease-in-out duration-300 cursor-pointer rounded-xl p-2'><FaTwitterSquare color="black" fontSize="37" /></li>
                    <li className='hover:bg-[#939598] transition ease-in-out duration-300 cursor-pointer rounded-xl p-2'><FaWhatsappSquare color="black" fontSize="37" /></li>
                    <li className='hover:bg-[#939598] transition ease-in-out duration-300 cursor-pointer rounded-xl p-2'><FaInstagramSquare color="black" fontSize="37" /></li>
                </ul>
            </div>
            <div>
                <h3 className='text-xl font-bold pb-[20px]'>Product Categories</h3>
                <ul className='flex gap-y-[10px] flex-col '>
                    <li className='hover:text-[#939598] transition ease-in-out duration-300 cursor-pointer rounded-md py-2'>Home Security</li>
                    <li className='hover:text-[#939598] transition ease-in-out duration-300 cursor-pointer rounded-md py-2'>Smart Home Automation</li>
                    <li className='hover:text-[#939598] transition ease-in-out duration-300 cursor-pointer rounded-md py-2'>Security Cameras</li>
                    <li className='hover:text-[#939598] transition ease-in-out duration-300 cursor-pointer rounded-md py-2'>Business Security</li>
                </ul>
            </div>
            <div>
                <h3 className='text-xl font-bold pb-[20px]'>Product Categories</h3>
                <ul className='flex  gap-y-[10px] flex-col '>
                    <li className='hover:text-[#939598] transition ease-in-out duration-300 cursor-pointer rounded-md py-2'>Home Security</li>
                    <li className='hover:text-[#939598] transition ease-in-out duration-300 cursor-pointer rounded-md py-2'>Smart Home Automation</li>
                    <li className='hover:text-[#939598] transition ease-in-out duration-300 cursor-pointer rounded-md py-2'>Security Cameras</li>
                    <li className='hover:text-[#939598] transition ease-in-out duration-300 cursor-pointer rounded-md py-2'>Business Security</li>
                    <li className='hover:text-[#939598] transition ease-in-out duration-300 cursor-pointer rounded-md py-2'>Commercial</li>

                </ul>
            </div>
            <div>
                <h3 className='text-xl font-bold pb-[20px]'>Product Categories</h3>
                <ul className='flex  gap-y-[10px] flex-col '>
                    <li className='hover:text-[#939598] transition ease-in-out duration-300 cursor-pointer rounded-md py-2'>Home Security</li>
                    <li className='hover:text-[#939598] transition ease-in-out duration-300 cursor-pointer rounded-md py-2'>Smart Home Automation</li>
                    <li className='hover:text-[#939598] transition ease-in-out duration-300 cursor-pointer rounded-md py-2'>Security Cameras</li>
                    <li className='hover:text-[#939598] transition ease-in-out duration-300 cursor-pointer rounded-md py-2'>Commercial</li>
                    <li className='hover:text-[#939598] transition ease-in-out duration-300 cursor-pointer rounded-md py-2'>Commercial</li>

                </ul>
            </div>
        </div>
        <p className='text-center text-md font-semibold pt-[125px] pb-8'>© 2023 ADT. All rights reserved. The product/service names listed in this document are marks and/or registered marks of their respective owners and used under license. Unauthorized use strictly prohibited. Ptoducted by <span className='text-xl font-bold uppercase '>Kognitiv</span>.
        </p>
    </footer>
  )
}

export default Footer

