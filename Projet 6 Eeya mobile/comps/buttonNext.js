import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign";
import { COLOR } from '../outils/const';

const ButtonNext = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
    <AntDesign name='arrowright' size={32} color="white"/>
  </TouchableOpacity>
  )
}

const styles =  StyleSheet.create({
    button: {
        width: 50,
        height: 50,
        alignItems:"center",
        justifyContent:'center',
        borderRadius:100,
        backgroundColor: COLOR.orangeColor,
        position:"absolute",
        bottom:0,
        right:20,
      },
})

export default ButtonNext