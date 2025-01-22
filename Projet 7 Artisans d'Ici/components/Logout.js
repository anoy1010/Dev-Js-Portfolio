
import React from 'react';
import { logout } from '../firebase';

export default function Logout({ navigation }) {
  
  logout().then(() => navigation.navigate('Onboarding')).catch((error) => {console.log(error)});

  return null;
  
}


