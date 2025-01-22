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
import Headtitle, { Headtitle1 } from '@/Comps/elem/Headtitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faFlagCheckered, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import CardSlideY from '@/Comps/animation/cardSlideY'
import HeadScale from '@/Comps/animation/headScale'
import { SlideTwo } from '@/Comps/animation/slideOne'
import SlideOne from '@/Comps/animation/slideOne'
import Link from 'next/link'

function Health() {

    const [loading, setLoading] = useState(true); 
    useEffect(() => {
      // Simulez un chargement asynchrone (par exemple, une requête à un serveur)
      setTimeout(() => {
        setLoading(false);
      }, 3000); // Chargez pendant 3 secondes (à adapter selon vos besoins)
    }, []);

    const features = [
        {
          name: 'Trained monitoring professional.',
          description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
          
        },
        {
          name: 'your Guarantee.',
          description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
          
        },
        {
          name: 'Fast response.',
          description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
          
        },
        {
            name: 'Simple usually.',
            description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
            
          },
      ]
  return (
    <>{loading ? (
        <Loader />
      ) : (
     <div> 
    <Header/>
    <section className=''>
       
        <div className='grid grid-cols-2 pl-8 place-content-start w-full h-full'>
            
            <HeroScale>
                <div className='flex flex-col justify-center py-8 gap-y-4 items-start'>
                    <h3 className='font- text-lg uppercase'> Special Medical alert</h3>
                    <h1 className='font-bold text-5xl text-blue-600'>50% off fall detection monitoring</h1>

                    <p className='w-[50%] font-semibold'>Gagner gratutement deux jours de shopping avec le bon de reduction : SAFER</p>

                    <div className='py-8'>
                        <ButtonView> Get started </ButtonView>
                        <p className='font-light text-sm py-4 w-[90%]'>lorem ipsum agner gratutement deux jours de shopping avec le bon de reduction  agner gratutement deux jours de shopping avec le bon de reduction  v agner gratutement deux jours de shopping avec le bon de reduction </p>
                    </div>
                </div>
            </HeroScale>
            <HeroScale1>
                <div>
                    <Image 
                        width={1500}
                        height={1500} 
                        src='/secu.jpg' 
                        alt='secure'
                    />
                </div>
            </HeroScale1>
        </div>
    </section>
    <section className='mx-24 relative -top-12'>
        <div className='grid grid-cols-5 place-items-center bg-white shadow-2xl  py-8 '>
            <CardSlideY>
                <div className='flex flex-col items-center'> <FontAwesomeIcon icon={faEye} className='text-6xl text-blue-600' /> <h3 className='font-bold text-lg text-blue-600'>Alert ambulance</h3> </div>
            </CardSlideY>
            <CardSlideY>
                <div className='flex flex-col items-center'> <FontAwesomeIcon icon={faEye} className='text-6xl text-blue-600' /> <h3 className='font-bold text-lg text-blue-600'>Alert ambulance</h3> </div>
            </CardSlideY>
            <CardSlideY>
                <div className='flex flex-col items-center'> <FontAwesomeIcon icon={faEye} className='text-6xl text-blue-600' /> <h3 className='font-bold text-lg text-blue-600'>Alert ambulance</h3> </div>
            </CardSlideY>
            <CardSlideY>
                <div className='flex flex-col items-center'> <FontAwesomeIcon icon={faEye} className='text-6xl text-blue-600' /> <h3 className='font-bold text-lg text-blue-600'>Alert ambulance</h3> </div>
            </CardSlideY>
            <CardSlideY>
                <div className='flex flex-col items-center'> <FontAwesomeIcon icon={faEye} className='text-6xl text-blue-600' /> <h3 className='font-bold text-lg text-blue-600'>Alert ambulance</h3> </div>
            </CardSlideY>

        </div>
    </section>
    <section>
        <div className='mb-12'> 
            
            <HeadScale>
                <Headtitle1 
                    title="Add even more wellbeing  "
                    text="to your SAFER medical alert"
                />
            </HeadScale>
            <div className=' px-8 mx-8'>
                
               <Carousel cols={3} rows={1} gap={10} loop className='flex items-center justify-center'>
                    <Carousel.Item>
                        <div className='flex flex-col max-w-sm justify-center items-center text-center gap-y-4 py-8  rounded-3xl border shadow-2xl border-gray-300'>
                            <img src='objet2.png' className='w-24' alt='secure'/>
                            <h2 className=' font-semibold text-2xl'>Fall Detection pendant</h2>
                            <p className=' w-[80%]'>ADT can automatically be started after a fall even if you can t press the button on the fail detection pendant yourself. Avaible with Medical Alert Plus and On-the GO System </p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='flex flex-col max-w-sm justify-center items-center text-center gap-y-4 py-8  rounded-3xl border shadow-2xl border-gray-300'>
                            <img src='objet2.png' className='w-24' alt='secure'/>
                            <h2 className=' font-semibold text-2xl'>Fall Detection pendant</h2>
                            <p className=' w-[80%]'>ADT can automatically be started after a fall even if you can t press the button on the fail detection pendant yourself. Avaible with Medical Alert Plus and On-the GO System </p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='flex flex-col max-w-sm justify-center items-center text-center gap-y-4 py-8  rounded-3xl border shadow-2xl border-gray-300'>
                            <img src='objet2.png' className='w-24' alt='secure'/>
                            <h2 className=' font-semibold text-2xl'>Fall Detection pendant</h2>
                            <p className=' w-[80%]'>ADT can automatically be started after a fall even if you can t press the button on the fail detection pendant yourself. Avaible with Medical Alert Plus and On-the GO System </p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='flex flex-col max-w-sm justify-center items-center text-center gap-y-4 py-8  rounded-3xl border shadow-2xl border-gray-300'>
                            <img src='objet2.png' className='w-24' alt='secure'/>
                            <h2 className=' font-semibold text-2xl'>Fall Detection pendant</h2>
                            <p className=' w-[80%]'>ADT can automatically be started after a fall even if you can t press the button on the fail detection pendant yourself. Avaible with Medical Alert Plus and On-the GO System </p>
                        </div>
                    </Carousel.Item>
               </Carousel>
                
            </div>
            <div className='my-8 py-12 px-8 flex justify-center gap-x-8 items-center bg-slate-200'>
                <FontAwesomeIcon icon={faFlagCheckered} className='text-2xl' />
                <p className='text-center'>SAFER Health emergency response monetoring centers are S-Based and company owned & operated</p>
            </div>
        </div>
    </section>
    <section className=''>
        <div className='px-14 '>
            <div className="overflow-hidden bg-white py-12 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <SlideOne>
                            <div className="lg:max-w-lg">
                                <h2 className="text-base font-semibold leading-7 text-blue-600">Secure your life</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                                    iste dolor cupiditate blanditiis ratione.
                                </p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                    {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9 ">
                                        <dt className="inline font-semibold text-gray-900">
                                        
                                        {feature.name}
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                    ))}
                                </dl>
                                </div>
                            </SlideOne>
                            </div>
                            
                            <SlideTwo>
                                <Image
                                    src="/secu.jpg"
                                    alt="Product screenshot"
                                    className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                                    width={2432}
                                    height={1442}
                                />
                            </SlideTwo>
                            
                            </div>
                        </div>
                    </div>
                
                </div>
            <div>
            
        </div>
    </section>
    <section>
        <HeadScale>
            <Headtitle1
                title='The SAFER Health Difference'
                text='Learn more about how SAFER health works to keep you safe, secu and connected to help whenervr you need it'
            />
        </HeadScale>
        <div className='mb-24 flex gap-12 justify-around items-center'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl pb-12 transform transition duration-500  hover:scale-125 cursor-pointer">
                <figure><img src="secu.jpg" alt="secu" /></figure>
                <div className="card-body gap-y-8">
                    <h2 className="card-title">SAFER Medical Alert Recognized with Caregiver Friendly Award</h2>

                    <div className="card-actions justify-start">
                        <div className='flex gap-x-8 font-bold text-blue-600 justify-center items-center'>
                            <p >learn more</p> 
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl pb-12 transform transition duration-500  hover:scale-125 cursor-pointer">
                <figure><img src="secu.jpg" alt="secu" /></figure>
                <div className="card-body gap-y-8">
                    <h2 className="card-title">SAFER Medical Alert Recognized with giver Friendly Award</h2>

                    <div className="card-actions justify-start">
                        <div className='flex gap-x-8 font-bold text-blue-600 justify-center items-center'>
                            <p >learn more</p> 
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl pb-12 transform transition duration-500  hover:scale-125 cursor-pointer">
                <figure><img src="secu.jpg" alt="secu" /></figure>
                <div className="card-body gap-y-8 ">
                    <h2 className="card-title">SAFER Medical Alert Recognized with Caregiver Friendly Award</h2>

                    <div className="card-actions justify-start">
                        <div className='flex gap-x-8 font-bold text-blue-600 justify-center items-center'>
                            <p >learn more</p> 
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
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
        </div>
    </section>

    <Footer/>
   </div>
   )}
    </>
  )
}

export default Health