"use client"

import React, {useRef, useEffect, useState} from 'react'

import Subtitle from '@/Comps/elem/Subtitle'
import Image from 'next/image'

import ButtonView from '@/Comps/elem/ButtonView'
import ButtonViewDark from '@/Comps/elem/buttonViewDark'
import Headtitle from '@/Comps/elem/Headtitle'
import ButtonViewBlue from '@/Comps/elem/ButtonViewBlue'
import security from 'public/securityalt.png'
import Link from 'next/link'

import traceur from 'public/traceur.jpg'
import Banner from '@/Comps/elem/Banner'
import {BsCheck2} from 'react-icons/bs'


import { motion, AnimatePresence, useInView,useAnimation } from "framer-motion"
import Header from '@/Comps/Header'
import Footer from '@/Comps/Footer'


import Loader from '@/Comps/Loader'

function Acceuil() {


  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const controls = useAnimation();

  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    // Simulez un chargement asynchrone (par exemple, une requête à un serveur)
    setTimeout(() => {
      setLoading(false);
    }, 6000); // Chargez pendant 3 secondes (à adapter selon vos besoins)
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const cardSlideXl = {
    hidden:{
      opacity: 0,
      transform: 'translateX(-500px)'
    },
    visible: {
      opacity:1,
      transform: 'translateX(0px)'
    }
  }
  const cardSlideXr = {
    hidden:{
      opacity: 0,
      transform: 'translateY(200px)'
    },
    visible: {
      opacity:1,
      transform: 'translateY(0px)'
    }
  }
  const boxVariantscard = {
      hidden: {
        opacity: 0,
        transform: 'translateY(-200px)',
      },
      visible: {
        opacity: 1,
        transform: 'translateY(0px)',
      },
  };
  
    const boxVariantsheros = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
   };
  return (
    <>{loading ? (
      <Loader />
    ) : (
    <AnimatePresence>
      <Header/>
        <section className='bg-black h-screen text-white px-[124px] gap-x-4 flex justify-between items-center'>
        
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={boxVariantsheros}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="box"
            >
              <div className='w-[550px] h-[500px] gap-y-8 flex flex-col justify-center'>
                <Subtitle title="Circle got smaller"/>
                <h1 className='font-bold uppercase text-5xl'>une large <span className='text-[#4556F5]'>Vision</span> DE la sécurite</h1>
                <p className='text-white font-normal'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita 
                </p>
                <div className='flex gap-x-[50px]'>
                  <motion.div
                     className="box"
                     whileHover={{ scale: 1.2 }}
                     whileTap={{ scale: 0.9 }}
                     
                     transition={{ type: "spring", stiffness: 400, damping: 17, }}
                  >
                    <ButtonView >Get started</ButtonView></motion.div>
                  <motion.div
                     className="box"
                     whileHover={{ scale: 1.2 }}
                     whileTap={{ scale: 0.9 }}
                     transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <ButtonViewDark text="MORE INFO"/>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={boxVariantsheros}
              transition={{ duration: 1, ease: 'easeInOut', delay: 1}}
              className="box"
            >
              <div className='w-[706px] h-[532px] bg-white'></div>
            </motion.div>
           
        </section>
        <section className='bg-black'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            exit={{ opacity: 0, transform:'translateY(500px)', transition:{ duration:1, ease:"easeInOut" } }}
            transition={{
              duration:1,
              type:'spring',
              delay:1,
              ease:'ease-in-out'
            }}
          >
            <Headtitle 
              title="SAFER désormait avec vous "
              text="ADT believes that in today’s world, connection is protection. That’s why we’re partnering with Google to bring the next generation of smart home security." 
            />
            <div className='flex justify-center h-[450px] mx-[75px]'>
              <div className='text-white  bg-[#4556F5] py-4 flex flex-col justify-around w-[400px] px-[60px]  gap-y-[14px]'>
                <h1 className='text-4xl font-semibold  '>Now ADT sells Nest products</h1>
                <h3 className='text-3xl'>ADT believes that in today’s world, connection is protection. </h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                <div className='flex justify-start'>
                <motion.div
                     className="box"
                     whileHover={{ scale: 1.2 }}
                     whileTap={{ scale: 0.9 }}
                     
                     transition={{ type: "spring", stiffness: 400, damping: 17, }}
                  >
                    <ButtonViewBlue text="Get Started"/>
                  </motion.div>
                </div>
              </div>   
              <div className='grid grid-cols-2 '>
              <div className='bg-white flex px-[41px] justify-center items-center ring-2 ring-[#707070]'>
                  <div>
                    <Image 
                    src={security}
                    width={80}
                    height={80}
                    />
                  </div>
                  <div className='px-4 flex flex-col gap-y-4'>
                    <h2 className='font-bold text-3xl'>512+</h2>
                    <p className='w-[233px]'>Lorem ipsum dolor sit amet, consetetur </p>
                  </div>
                </div>
                <div className='bg-white flex px-[41px] justify-center items-center ring-2 ring-[#707070]'>
                  <div>
                    <Image 
                    src={security}
                    width={80}
                    height={80}
                    />
                  </div>
                  <div className='px-4 flex flex-col gap-y-4'>
                    <h2 className='font-bold text-3xl'>512+</h2>
                    <p className='w-[233px]'>Lorem ipsum dolor sit amet, consetetur </p>
                  </div>
                </div>
                <div className='bg-white flex px-[41px] justify-center items-center ring-2 ring-[#707070]'>
                  <div>
                    <Image 
                    src={security}
                    width={80}
                    height={80}
                    />
                  </div>
                  <div className='px-4 flex flex-col gap-y-4'>
                    <h2 className='font-bold text-3xl'>512+</h2>
                    <p className='w-[233px]'>Lorem ipsum dolor sit amet, consetetur </p>
                  </div>
                </div>
                <div className='bg-white flex px-[41px] justify-center items-center ring-2 ring-[#707070]'>
                  <div>
                    <Image 
                    src={security}
                    width={80}
                    height={80}
                    />
                  </div>
                  <div className='px-4 flex flex-col gap-y-4'>
                    <h2 className='font-bold text-3xl'>512+</h2>
                    <p className='w-[233px]'>Lorem ipsum dolor sit amet, consetetur </p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </section>
        <section className='bg-black'>
          <Headtitle
            title="L'avantage de choisir SAFER" 
            text="ADT believes that in today’s world, connection is protection. That’s why we’re partnering with Google to bring the next generation of smart home security."
          />
          <div className='flex justify-center gap-x-32'>
            <motion.div
              ref={ref}
              initial="hidden"
              whileInView="visible"
              viewport={{once:true}}
              variants={boxVariantscard}
              transition={{ type: 'spring', duration: 1, ease: 'easeInOut'}}
              className="box"

            >
              <div className='flex flex-col gap-y-4'>
                <div className='flex justify-start items-center p-4'>
                  <Image 
                    src={traceur}
                    width={80}
                    height={80}
                  />
                </div>
                <div className='text-white flex flex-col gap-y-4 w-[300px]'>
                  <h2 className='text-3xl font-bold'>Now ADT sells Nest products</h2>
                  <p className='text-md '>ADT believes that in today’s world, connection is protection. That’s why we’re partnering with Google to bring the next generation of smart home security.</p>
                </div>
                
              </div>
            </motion.div>
            <motion.div
              ref={ref}
              initial={{opacity:0, transform:'translateY(-200px)'}}
              whileInView={{opacity:1, transform:"translateY(0px)"}}
              viewport={{once:true}}
              transition={{ type: 'spring', duration: 1, ease: 'easeInOut', delay: 1 }}
              className="box"

            >
              <div className='flex flex-col gap-y-4'>
                <div className='flex justify-start items-center p-4'>
                  <Image 
                    src={traceur}
                    width={80}
                    height={80}
                  />
                </div>
                <div className='text-white flex flex-col gap-y-4 w-[300px]'>
                  <h2 className='text-3xl font-bold'>Now ADT sells Nest products</h2>
                  <p className='text-md '>ADT believes that in today’s world, connection is protection. That’s why we’re partnering with Google to bring the next generation of smart home security.</p>
                </div>
                
              </div>
            </motion.div>
            <motion.div 
              ref={ref}
              initial={{opacity:0, transform:'translateY(-200px)'}}
              whileInView={{opacity:1, transform:"translateY(0px)"}}
              viewport={{once:true}}
              transition={{ type: 'spring', duration: 1, ease: 'easeInOut', delay: 3 }}
              className="box"

            >
              <div className='flex flex-col gap-y-4'>
                <div className='flex justify-start items-center p-4'>
                  <Image 
                    src={traceur}
                    width={80}
                    height={80}
                  />
                </div>
                <div className='text-white flex flex-col gap-y-4 w-[300px]'>
                  <h2 className='text-3xl font-bold'>Now ADT sells Nest products</h2>
                  <p className='text-md '>ADT believes that in today’s world, connection is protection. That’s why we’re partnering with Google to bring the next generation of smart home security.</p>
                </div>
                
              </div>
            </motion.div>
          </div>
          <div className='flex justify-center py-[50px]'>
            <p className='text-white text-center w-[50%] '>ADT believes that in today’s world, connection is protection. That’s why we’re partnering with Google to bring the next generation of smart home security.</p>
          </div>
        </section>
        <motion.div
          ref={ref}
          initial={{opacity:0, transform:'translateX(-1000px)'}}
          whileInView={{opacity:1, transform:"translateX(0px)"}}
          viewport={{once:true}}
          transition={{
            type:'spring',
            duration:1,
            delay:0.5,
            ease:'linear'
          }}
        >
          <Banner
            text="Vous voulez connaître votre besoin ?"
            buttonTitle="Essayer"
          />
        </motion.div>
          
        <section className='bg-black'>
          <div>
            <Headtitle 
              text="ADT believes that in today’s world, connection is protection. That’s why we’re
              partnering with Google to bring the next generation of smart home security."
            />
            <div className='grid grid-cols-2 bg-white px-32 gap-x-16 place-content-evenly place-items-center'>
              <div className='flex flex-col gap-y-4 text-white my-6 rounded-xl'>
                <Image />
                <motion.div
                  initial={{ opacity: 0, scale: 0.5}}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{once:true}}
                  variants={boxVariantsheros}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                  className="box"
                >
                  <div className=' flex flex-col bg-red-500 gap-y-4 items-center rounded-xl py-4'>
                    <h2 className=' font-bold text-2xl'>Installation SAFER-Standard</h2>
                    <p className='text-center'>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                      nonumy eirmod tempor invidunt ut labore et dolore magna
                    </p>
                    <ul>
                      <li className='flex justify-center items-center gap-x-4'><BsCheck2 className='text-3xl font-bold ' /> Appointments to fit your schedule</li>
                      <li className='flex justify-center items-center gap-x-4'> <BsCheck2 className='text-3xl font-bold ' />Appointments to fit your schedule</li>
                      <li className='flex justify-center items-center gap-x-4'> <BsCheck2 className='text-3xl font-bold ' />Appointments to fit your schedule</li>
                    </ul>
                    <motion.div                                 
                      className="box"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      
                      transition={{ type: "spring", stiffness: 400, damping: 17, }}
                    >
                      <ButtonViewDark text="Get started"/>
                    </motion.div>
                  </div>  
                </motion.div>
                  
              </div>
              <div className='flex flex-col gap-y-4 text-white my-6 rounded-xl'>
                <Image />
                <motion.div
                  initial={{ opacity: 0, scale: 0.5}}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{once:true}}
                  variants={boxVariantsheros}
                  transition={{ duration: 1, ease: 'easeInOut', delay:0.5 }}
                  className="box"
                >
                  <div className=' flex flex-col bg-red-500 gap-y-4 items-center rounded-xl py-4'>
                    <h2 className=' font-bold text-2xl'>Installation SAFER-Standard</h2>
                    <p className='text-center'>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                      nonumy eirmod tempor invidunt ut labore et dolore magna
                    </p>
                    <ul>
                      <li className='flex justify-center items-center gap-x-4'><BsCheck2 className='text-3xl font-bold ' /> Appointments to fit your schedule</li>
                      <li className='flex justify-center items-center gap-x-4'> <BsCheck2 className='text-3xl font-bold ' />Appointments to fit your schedule</li>
                      <li className='flex justify-center items-center gap-x-4'> <BsCheck2 className='text-3xl font-bold ' />Appointments to fit your schedule</li>
                    </ul>
                    <motion.div
                      className="box"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      
                      transition={{ type: "spring", stiffness: 400, damping: 17, }}
                    >
                      <ButtonViewDark text="Get started"/>
                    </motion.div>
                  </div>  
                </motion.div>
              </div>
            </div>
          </div>
        </section>





        <section className='bg-black'>
          <Headtitle title="Trouvez la meilleure protection pour votre besoin."/>
          <div className='flex flex-col gap-y-14'>
            <motion.div
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            variants={cardSlideXl}
            transition={{
              duration:1, ease:'easeInOut', type:'spring'
            }}
            >
              <div className='grid grid-cols-2 place-content-center place-items-center gap-x-4 '>
                <div className='bg-white flex-col mx-12 px-8 '>
                    <Image />
                    <div>
                      <div className='px-8'>
                        <h2 className=' text-2xl text-bold py-8'> Safer S-Home </h2>
                        <p className='py-4'>
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                        </p>
                        <ul>
                          <li className='flex justify-start items-center gap-x-4'><BsCheck2 className='text-3xl font-bold ' /> Appointments to fit your schedule</li>
                          <li className='flex justify-start items-center gap-x-4'> <BsCheck2 className='text-3xl font-bold ' />Appointments to fit your schedule</li>
                          <li className='flex justify-start items-center gap-x-4'> <BsCheck2 className='text-3xl font-bold ' />Appointments to fit your schedule</li>
                        </ul>
                        <div className='p-8 flex justify-center items-center'>
                          <motion.div
                            className="box"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            
                            transition={{ type: "spring", stiffness: 400, damping: 17, }}
                          >
                            <ButtonViewDark text="Get started"/>
                          </motion.div>
                          
                        </div>
                      </div>
                    </div>
                </div>
                <div className='flex flex-col gap-y-8 mx-12 px-8'>
                  <h2 className='text-3xl font-bold text-white'>une sécurité poour votre domicile</h2>
                  <p  className="text-white">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                    kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                    kasd
                  </p>
                </div>
              </div>
              </motion.div>
              <motion.div
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            variants={cardSlideXr}
            transition={{
              duration:1, ease:'easeInOut', type:'spring'
            }}
            >
              <div className='grid grid-cols-2 place-content-center place-items-center gap-x-4 '>
              <div className='flex flex-col gap-y-8 mx-12 px-8'>
                  <h2 className='text-3xl font-bold text-white'>une sécurité poour votre domicile</h2>
                  <p  className="text-white">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                    kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                    kasd
                  </p>
                </div>
                <div className='bg-white flex-col mx-12 px-8 '>
                    <Image />
                    <div>
                      <div className='px-8'>
                        <h2 className=' text-2xl text-bold py-8'> Safer S-Home </h2>
                        <p className='py-4'>
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                        </p>
                        <ul>
                          <li className='flex justify-start items-center gap-x-4'><BsCheck2 className='text-3xl font-bold ' /> Appointments to fit your schedule</li>
                          <li className='flex justify-start items-center gap-x-4'> <BsCheck2 className='text-3xl font-bold ' />Appointments to fit your schedule</li>
                          <li className='flex justify-start items-center gap-x-4'> <BsCheck2 className='text-3xl font-bold ' />Appointments to fit your schedule</li>
                        </ul>
                        <div className='p-8 flex justify-center items-center'>
                        <motion.div
                            className="box"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            
                            transition={{ type: "spring", stiffness: 400, damping: 17, }}
                          >
                            <ButtonViewDark text="Get started"/>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </motion.div>
            <motion.div
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            variants={cardSlideXl}
            transition={{
              duration:1, ease:'easeInOut', type:'spring'
            }}
            >
            <div className='grid grid-cols-2 place-content-center place-items-center gap-x-4 '>
              <div className='bg-white flex-col mx-12 px-8 '>
                  <Image />
                  <div>
                    <div className='px-8'>
                      <h2 className=' text-2xl text-bold py-8'> Safer S-Home </h2>
                      <p className='py-4'>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                      </p>
                      <ul>
                        <li className='flex justify-start items-center gap-x-4'><BsCheck2 className='text-3xl font-bold ' /> Appointments to fit your schedule</li>
                        <li className='flex justify-start items-center gap-x-4'> <BsCheck2 className='text-3xl font-bold ' />Appointments to fit your schedule</li>
                        <li className='flex justify-start items-center gap-x-4'> <BsCheck2 className='text-3xl font-bold ' />Appointments to fit your schedule</li>
                      </ul>
                      <div className='p-8 flex justify-center items-center'>
                      <motion.div
                            className="box"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            
                            transition={{ type: "spring", stiffness: 400, damping: 17, }}
                          >
                            <ButtonViewDark text="Get started"/>
                          </motion.div>
                      </div>
                    </div>
                  </div>
              </div>
              <div className='flex flex-col gap-y-8 mx-12 px-8'>
                <h2 className='text-3xl font-bold text-white'>une sécurité poour votre domicile</h2>
                <p  className="text-white">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                  kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                  kasd
                </p>
              </div>
            </div>
            </motion.div>
            <motion.div
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            variants={cardSlideXr}
            transition={{
              duration:1, ease:'easeInOut', type:'spring',
            }}
            >
            <div className='grid grid-cols-2 place-content-center place-items-center gap-x-4 '>
            <div className='flex flex-col gap-y-8 mx-12 px-8'>
                <h2 className='text-3xl font-bold text-white'>une sécurité poour votre domicile</h2>
                <p  className="text-white">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                  kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                  kasd
                </p>
              </div>
              <div className='bg-white flex-col mx-12 px-8 my-24 '>
                  <Image />
                  <div>
                    <div className='px-8'>
                      <h2 className=' text-2xl text-bold py-8'> Safer S-Home </h2>
                      <p className='py-4'>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                      </p>
                      <ul>
                        <li className='flex justify-start items-center gap-x-4'><BsCheck2 className='text-3xl font-bold ' /> Appointments to fit your schedule</li>
                        <li className='flex justify-start items-center gap-x-4'> <BsCheck2 className='text-3xl font-bold ' />Appointments to fit your schedule</li>
                        <li className='flex justify-start items-center gap-x-4'> <BsCheck2 className='text-3xl font-bold ' />Appointments to fit your schedule</li>
                      </ul>
                      <div className='p-8 flex justify-center items-center'>
                        <motion.div
                            className="box"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            
                            transition={{ type: "spring", stiffness: 400, damping: 17, }}
                          >
                            <ButtonViewDark text="Get started"/>
                        </motion.div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            </motion.div>
          </div>
        </section>



        <section className='bg-black text-white  h-screen'>
          <motion.div 
            ref={ref}
            initial={{opacity:0, transform:'translateY(-200px)'}}
            whileInView={{opacity:1, transform:"translateY(0px)"}}
            viewport={{once:true}}
            transition={{
              type:'spring',
              duration:1,
              delay:0.5,
              ease:'linear'
            }}
          >
            <div className='flex justify-between pl-24 pb-8'>
              <h1 className='font-semibold text-[56px]'>News</h1>
              <div className='bg-red-500 w-[50%] px-32'>
                <h2 className='font-semibold text-[56px]'>Nos produits</h2>
              </div>
            </div>
          </motion.div>
          <div className='py-12 px-24'>
            <p className='bg-none'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
              gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetet
            </p>
          </div>
          <div>
          <div className="relative isolate overflow-hidden  py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                <div className="max-w-xl lg:max-w-lg">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our newsletter.</h2>
                  <p className="mt-4 text-lg leading-8 text-gray-300">
                    Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
                    dolore.
                  </p>
                  <div className="mt-6 flex max-w-md gap-x-4">
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      placeholder="Enter your email"
                    />
                    <ButtonViewBlue
                    text="Subscribe"/>
                  </div>
                </div>
                <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                  <div className="flex flex-col items-start">
                    <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                      
                    </div>
                    <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
                    <dd className="mt-2 leading-7 text-gray-400">
                      Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
                    </dd>
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                      
                    </div>
                    <dt className="mt-4 font-semibold text-white">No spam</dt>
                    <dd className="mt-2 leading-7 text-gray-400">
                      Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
              <div
                className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#4556F5] to-[#52C6FF] opacity-30"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
          </div>
          </div>
          <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
                      <div>
                          <Link title="Buy me a beer" href="" target="_blank" class="block w-24 h-24 rounded-full transition-all shadowLinkhover:shadow-lg transform hover:scale-110 hover:rotate-12">
                              <Image 
                                width={500}
                                height={500}
                                class="object-cover object-center w-full h-full rounded-full" 
                                src="/RadiantLogo.png" 
                                alt="image" />
                          </Link>
                      </div>
                  </div>
        </section>
        <Footer/>
        </AnimatePresence>
      )}
    </>
  )

}


export default Acceuil 