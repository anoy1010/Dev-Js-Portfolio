import { View } from 'react-native'
import React from 'react'
import HomeStyles from './style'
import ButtonNext from '../../comps/buttonNext';
import Carouselcomponent from './carouselcomponent';


export default function HomeScreen(params) {
  return (
    <View>
      <Carouselcomponent style={HomeStyles.contain}/>
    </View>
  )
}
