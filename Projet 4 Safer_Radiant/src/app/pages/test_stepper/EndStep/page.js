// pages/step1.js
"use client"
import Link from 'next/link';
import Button from '@/Comps/elem/Button';
import React, { useState, useEffect } from 'react'
import LoadingPage from '@/Comps/Loadingpage/LoadingPage'

function EndStep() {
    const [loading, setLoading] = useState(true); 
  useEffect(() => {
    // Simulez un chargement asynchrone (par exemple, une requête à un serveur)
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Chargez pendant 3 secondes (à adapter selon vos besoins)
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingPage />
      ) : (
        <div>
            <h2>Étape  final</h2>
            <form>
              {/* Formulaire pour l'étape 1 */}

            </form>
        </div>
      )}
    </div>
  );
};

export default EndStep;
