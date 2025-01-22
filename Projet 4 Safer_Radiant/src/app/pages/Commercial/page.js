"use client"

import React, {useRef, useEffect, useState} from 'react'
import Carousel from 'better-react-carousel'
import Header from '@/Comps/Header'
import Footer from '@/Comps/Footer'
import HeroScale from '@/Comps/animation/heroScale'
import { HeroScale1 } from '@/Comps/animation/heroScale'
import Image from 'next/image'


import Loader from '@/Comps/Loader'

import ButtonView from '@/Comps/elem/ButtonView'
import ButtonViewDark from '@/Comps/elem/buttonViewDark'

import Headtitle, { Headtitle1, Headtitle2 } from '@/Comps/elem/Headtitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faFlagCheckered, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import CardSlideYview from '@/Comps/animation/cardSlideY'
import CardSlide from '@/Comps/animation/cardSlideY'
import CardSlidesYview from '@/Comps/animation/cardSlidesY'
import CardSlidesY from '@/Comps/animation/cardSlidesY'

import CardScale from '@/Comps/animation/cardScale'

import HeadScale from '@/Comps/animation/headScale'
import { SlideTwo } from '@/Comps/animation/slideOne'
import SlideOne from '@/Comps/animation/slideOne'
import Link from 'next/link'

function Commercial() {
    const [loading, setLoading] = useState(true); 
  useEffect(() => {
    // Simulez un chargement asynchrone (par exemple, une requête à un serveur)
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Chargez pendant 3 secondes (à adapter selon vos besoins)
  }, []);
    return (
      <>{loading ? (
        <Loader />
      ) : (
         <div>
         <Header/>
          <section className='bg-[#187BF7]'>
              <div className='grid grid-cols-2 py-8 px-24'>
                  <div className='py-24 flex  px-8 mx-auto flex-col justify-center items-start '>
                     <h1 className='text-5xl uppercase font-bold py-4  text-white'>Découvrez nos services de securité.</h1>
                     <h2 className='text-xl text-white'>Sécurité de Confiance : Votre Partenaire pour une Protection Inégalée explorez Nos Services Exclusifs. <br></br> <u> Votre Sécurité, Notre Priorité.</u></h2>
                     <div className='flex gap-8 py-8'>
                          <ButtonViewDark>lorem ipsum</ButtonViewDark>
                          <ButtonViewDark>lorem ipsum</ButtonViewDark>
                     </div>
                  </div>
                  <div>
                      <Image
                       src='/CCTV.gif'
                       width={1000}
                       height={1000}
                       alt="image" />
                  </div>
              </div>
          </section>
  
          <section>
              <div className='pb-8'>
                  <Headtitle2 
                      title="Produits de Sécurité de Haute Technologie : Votre Garantie de Protection"
                      text=""
                  />
                  <div>
                      <div className="grid grid-cols-3 px-24 mx-4 gap-8">
                          <div className="max-w-2xl mx-auto">
                              
                              <div className="bg-white cursor-pointer transition hover:-translate-x-6 transform duration-300 hover:text-white  hover:bg-[#187BF7] shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                                  <a href="">
                                      <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="image" />
                                  </a>
                                  <div class="p-5">
                                      <a href="#">
                                          <h5 className=" font-bold text-2xl tracking-tight mb-2 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                      </a>
                                      <p className="font-normal  mb-3 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                      
                                  </div>
                              </div>
                          </div>
                          <div className="max-w-2xl mx-auto">
                              
                              <div className="bg-white cursor-pointer transition hover:-translate-x-6 transform duration-300 hover:text-white  hover:bg-[#187BF7] shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                                  <a href="">
                                      <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="image" />
                                  </a>
                                  <div class="p-5">
                                      <a href="#">
                                          <h5 className=" font-bold text-2xl tracking-tight mb-2 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                      </a>
                                      <p className="font-normal  mb-3 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                      
                                  </div>
                              </div>
                          </div>
                          <div className="max-w-2xl mx-auto">
                              
                              <div className="bg-white cursor-pointer transition hover:-translate-x-6 transform duration-300 hover:text-white  hover:bg-[#187BF7] shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                                  <a href="">
                                      <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="image" />
                                  </a>
                                  <div class="p-5">
                                      <a href="#">
                                          <h5 className=" font-bold text-2xl tracking-tight mb-2 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                      </a>
                                      <p className="font-normal  mb-3 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                      
                                  </div>
                              </div>
                          </div>
                          <div className="max-w-2xl mx-auto">
                              
                              <div className="bg-white cursor-pointer transition hover:-translate-x-6 transform duration-300 hover:text-white  hover:bg-[#187BF7] shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                                  <a href="">
                                      <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="image" />
                                  </a>
                                  <div class="p-5">
                                      <a href="#">
                                          <h5 className=" font-bold text-2xl tracking-tight mb-2 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                      </a>
                                      <p className="font-normal  mb-3 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                      
                                  </div>
                              </div>
                          </div>
                          <div className="max-w-2xl mx-auto">
                              
                              <div className="bg-white cursor-pointer transition hover:-translate-x-6 transform duration-300 hover:text-white  hover:bg-[#187BF7] shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                                  <a href="">
                                      <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="image"/>
                                  </a>
                                  <div class="p-5">
                                      <a href="#">
                                          <h5 className=" font-bold text-2xl tracking-tight mb-2 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                      </a>
                                      <p className="font-normal  mb-3 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                      
                                  </div>
                              </div>
                          </div>
                          <div className="max-w-2xl mx-auto">
                              
                              <div className="bg-white cursor-pointer transition hover:-translate-x-6 transform duration-300 hover:text-white  hover:bg-[#187BF7] shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                                  <a href="">
                                      <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="image"/>
                                  </a>
                                  <div class="p-5">
                                      <a href="#">
                                          <h5 className=" font-bold text-2xl tracking-tight mb-2 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                      </a>
                                      <p className="font-normal  mb-3 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                      
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section className='bg-[#187BF7] grid grid-cols-2 mx-auto px-24 items-center py-24'>
            <SlideOne>
                <div className='flex justify-center px-8 flex-col items-start gap-8'>
                    <h1 className='text-5xl font-semibold text-white w-[80%]'>Essayez-nous Avant de Vous Engager : Demandez Votre Test Gratuit</h1>
                    <p className='font-light text-white w-[70%]'>Explorez nos services de sécurité privée et découvrez l efficacité de nos solutions de pointe. Profitez d un test gratuit pour évaluer notre expertise et notre engagement envers votre protection. Faites le premier pas vers une sécurité inégalée avec <span className='font-extrabold text-2xl animate-pulse text-black'>SAFER</span></p>
                    <ButtonView>
                        <Link href="/pages/test_stepper/process"><p>Faire un test</p></Link>
                    </ButtonView>
                </div>
            </SlideOne>
            <SlideTwo>
                <div className="flex items-center">
                    <div className="mx-auto  max-w-sm rounded-2xl overflow-hidden  hover:shadow-4xl transition duration-300">
                            <Image 
                                className="rounded-full" 
                                src="/lamp.gif"
                                alt="image" 
                                width={500}
                                height={500}
                            />
                    </div>
                </div>
            </SlideTwo>
          </section>
          <section>
              <div className=''>
                  <CardScale>
                  <div class="min-w-screen min-h-screen bg-white flex items-center justify-center py-5">
                      <div class="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
                          <div class="w-full max-w-6xl mx-auto">
                              <div class="text-center max-w-xl mx-auto">
                                  <h1 class="text-6xl md:text-7xl font-bold mb-5 text-black">What people <br></br>are saying.</h1>
                                  <h3 class="text-xl mb-5 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                                  <div class="text-center mb-10">
                                      <span class="inline-block w-1 h-1 rounded-full bg-[#187BF7] ml-1"></span>
                                      <span class="inline-block w-3 h-1 rounded-full bg-[#187BF7] ml-1"></span>
                                      <span class="inline-block w-40 h-1 rounded-full bg-[#187BF7]"></span>
                                      <span class="inline-block w-3 h-1 rounded-full bg-[#187BF7] ml-1"></span>
                                      <span class="inline-block w-1 h-1 rounded-full bg-[#187BF7] ml-1"></span>
                                  </div>
                              </div>
                              <div class="-mx-3 md:flex items-start">
                                  <div class="px-3 md:w-1/3">
                                      <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                          <div class="w-full flex mb-4 items-center">
                                              <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                  <img src="https://i.pravatar.cc/100?img=1" alt="image"/>
                                              </div>
                                              <div class="flex-grow pl-3">
                                                  <h6 class="font-bold text-sm uppercase text-gray-600">Kenzie Edgar.</h6>
                                              </div>
                                          </div>
                                          <div class="w-full">
                                              <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.<span class="text-lg leading-none italic font-bold text-gray-400 ml-1"></span></p>
                                          </div>
                                      </div>
                                      <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                          <div class="w-full flex mb-4 items-center">
                                              <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                  <img src="https://i.pravatar.cc/100?img=2" alt="image"/>
                                              </div>
                                              <div class="flex-grow pl-3">
                                                  <h6 class="font-bold text-sm uppercase text-gray-600">Stevie Tifft.</h6>
                                              </div>
                                          </div>
                                          <div class="w-full">
                                              <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel.<span class="text-lg leading-none italic font-bold text-gray-400 ml-1"></span></p>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="px-3 md:w-1/3">
                                      <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                          <div class="w-full flex mb-4 items-center">
                                              <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                  <img src="https://i.pravatar.cc/100?img=3" alt="image"/>
                                              </div>
                                              <div class="flex-grow pl-3">
                                                  <h6 class="font-bold text-sm uppercase text-gray-600">Tommie Ewart.</h6>
                                              </div>
                                          </div>
                                          <div class="w-full">
                                              <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, obcaecati ullam excepturi dicta error deleniti sequi.<span class="text-lg leading-none italic font-bold text-gray-400 ml-1"></span></p>
                                          </div>
                                      </div>
                                      <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                          <div class="w-full flex mb-4 items-center">
                                              <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                  <img src="https://i.pravatar.cc/100?img=4" alt="image"/>
                                              </div>
                                              <div class="flex-grow pl-3">
                                                  <h6 class="font-bold text-sm uppercase text-gray-600">Charlie Howse.</h6>
                                              </div>
                                          </div>
                                          <div class="w-full">
                                              <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatum nostrum atque, corrupti, vitae esse id accusamus dignissimos neque reprehenderit natus, hic sequi itaque dicta nisi voluptatem! Culpa, iusto.<span class="text-lg leading-none italic font-bold text-gray-400 ml-1"></span></p>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="px-3 md:w-1/3">
                                      <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                          <div class="w-full flex mb-4 items-center">
                                              <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                  <img src="https://i.pravatar.cc/100?img=5" alt="image"/>
                                              </div>
                                              <div class="flex-grow pl-3">
                                                  <h6 class="font-bold text-sm uppercase text-gray-600">Nevada Herbertson.</h6>
                                              </div>
                                          </div>
                                          <div class="w-full">
                                              <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatem porro obcaecati dicta, quibusdam sunt ipsum, laboriosam nostrum facere exercitationem pariatur deserunt tempora molestiae assumenda nesciunt alias eius? Illo, autem!<span class="text-lg leading-none italic font-bold text-gray-400 ml-1"></span></p>
                                          </div>
                                      </div>
                                      <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                          <div class="w-full flex mb-4 items-center">
                                              <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                  <img src="https://i.pravatar.cc/100?img=6" alt="image" />
                                              </div>
                                              <div class="flex-grow pl-3">
                                                  <h6 class="font-bold text-sm uppercase text-gray-600">Kris Stanton.</h6>
                                              </div>
                                          </div>
                                          <div class="w-full">
                                              <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto, explicabo, cupiditate quas totam!<span class="text-lg leading-none italic font-bold text-gray-400 ml-1"></span></p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  </CardScale>
  
  
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
              </div>
          </section>
  
          <Footer/>
         </div>
         )}
      </>
    )
  }
  
  export default Commercial