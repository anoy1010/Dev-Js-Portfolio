// pages/step3.js
"use client"

import Link from 'next/link';
import Button from '@/Comps/elem/Button';
import React, { useState, useEffect } from 'react';
import LoadingPage from '@/Comps/Loadingpage/LoadingPage';
import Headtitle from '@/Comps/elem/Headtitle';

function Step3() {
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
            <Headtitle 
                title="Combien d&apos;étage avez-vous ?"
                text="Select one apply"
            />
            <form>
              {/* Formulaire pour l'étape 1 */}
                <div className='flex justify-center py-8'>
                    <select className="select select-bordered w-full max-w-xs bg-white text-black">
                        <option disabled selected>Combien d étage avez-vous ?</option>
                        <option>1 étage</option>
                        <option>duplex</option>
                        <option>triplex</option>
                        <option>quadruplex</option>
                     
                    </select>
                </div>
            </form>
            
        </div>
      )}
    </div>
  );
};

export default Step3;
