// pages/step1.js

"use client"
import Link from 'next/link';
import Button from '@/Comps/elem/Button';
import React, { useState, useEffect } from 'react';
import LoadingPage from '@/Comps/Loadingpage/LoadingPage';

import Headtitle from '@/Comps/elem/Headtitle';


function Step1 () {
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
                title="Who and what do you want to protect?"
                text="Select all that apply"
              />
              <form className='grid grid-cols-2 px-2  py-4 gap-y-8 place-content-center place-items-center'>
                {/* Formulaire pour l'étape 1 */}
                <div className="form-control w-[50%] rounded-lg py-4 bg-white text-black">
                  <label className="label cursor-pointer flex gap-x-4 justify-start ">
                    <input type="checkbox" checked="checked" className="checkbox" />
                    <span className="label-text">Remember me</span>
                  </label>
                </div>
                <div className="form-control w-[50%] rounded-lg py-4 bg-white text-black">
                  <label className="label cursor-pointer flex gap-x-4 justify-start ">
                    <input type="checkbox" checked="checked" className="checkbox" />
                    <span className="label-text">Remember me</span>
                  </label>
                </div>
                <div className="form-control w-[50%] rounded-lg py-4 bg-white text-black">
                  <label className="label cursor-pointer flex gap-x-4 justify-start ">
                    <input type="checkbox" checked="checked" className="checkbox" />
                    <span className="label-text">Remember me</span>
                  </label>
                </div>
                <div className="form-control w-[50%] rounded-lg py-4 bg-white text-black">
                  <label className="label cursor-pointer flex gap-x-4 justify-start "> 
                    <input type="checkbox" checked="checked" className="checkbox" />
                    <span className="label-text">Remember me</span>
                  </label>
                </div>
                <div className="form-control w-[50%] rounded-lg py-4 bg-white text-black">
                  <label className="label cursor-pointer flex gap-x-4 justify-start ">
                    <input type="checkbox" checked="checked" className="checkbox" />
                    <span className="label-text">Remember me</span>
                  </label>
                </div><div className="form-control w-[50%] rounded-lg py-4 bg-white text-black">
                  <label className="label cursor-pointer flex gap-x-4 justify-start ">
                    <input type="checkbox" checked="checked" className="checkbox" />
                    <span className="label-text">Remember me</span>
                  </label>
                </div>
              </form>
            </div>
        </div>
      )}
    </div>
  );
};

export default Step1;
