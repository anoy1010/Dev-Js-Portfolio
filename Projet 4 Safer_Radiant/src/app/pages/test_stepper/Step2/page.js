// pages/step1.js
"use client"

import Link from 'next/link';
import Button from '@/Comps/elem/Button';
import React, { useState, useEffect } from 'react';
import LoadingPage from '@/Comps/Loadingpage/LoadingPage';
import Headtitle from '@/Comps/elem/Headtitle';


function Step2() {
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    // Simulez un chargement asynchrone (par exemple, une requête à un serveur)
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Chargez pendant 3 secondes (à adapter selon vos besoins)
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className='py-8 my-4 bg-black p-4 rounded-xl'>
            <div>
              <Headtitle 
                title="Tu détient ou tu loue ?"
                text="Select one apply"
              />
              <form className='grid grid-cols-2 px-2  py-4 gap-y-8 place-content-center place-items-center'>
                {/* Formulaire pour l'étape 1 */}
                <button className='px-20 py-4 rounded-2xl  transition ease-in duration-200 hover:text-white hover:bg-[#4556F5] text-2xl text-black bg-white'> propre</button>
                <button className='px-20 py-4 rounded-2xl  transition ease-in duration-200 hover:text-white hover:bg-[#4556F5] text-2xl text-black bg-white'> louer</button> 

              </form>
            </div>
        </div>
      )}
    </div>
  );
};

export default Step2;
