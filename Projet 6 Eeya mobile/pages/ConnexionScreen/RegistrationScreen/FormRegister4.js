import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { RadioButton } from 'react-native-paper';
import ButtonNext from '../../../comps/buttonNext';
import { useNavigation } from '@react-navigation/native';
import FormStyle from './FormRegister/Style';
import RegistrationStyle from './style';
import Ionicon from "react-native-vector-icons/Ionicons";
import { COLOR, PADDING } from "../../../outils/const";
import AntDesignIcon from "react-native-vector-icons/AntDesign";






const { width } = Dimensions.get('window');

const FormRegister4 = () => {

    const navigation = useNavigation();

    const onNextPage = () => {
        navigation.navigate('Bottoms'); // Remplacez 'NextScreen' par l'écran approprié
      };
    const [text, setText] = useState('');
  const [checked, setChecked] = useState(false);
   
  
    return (
      <View>
        <View style={FormStyle.contain}>
      <View style={{ width: "100%" }}>
        <Text style={FormStyle.titre2}>Confirmer votre numéro de téléphone </Text>
      </View>
      <View style={{ paddingVertical:PADDING.vertical, rowGap:24,}}>
      <View style={{width:"100%", rowGap:24,}}>
      <TouchableOpacity style={RegistrationStyle.path}>
          <View
            style={{
              flexDirection: "row",
              columnGap: 12,
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
           
          <View style={FormStyle.groupInput}>
          <TextInput
            style={FormStyle.input}
            onChangeText={setText}
            value={text}
            placeholder="+225 0707070707 "
            keyboardType="numeric"
          />
        </View>
          </View>
          <AntDesignIcon name="right" size={24} color="#898989" />
        </TouchableOpacity>
      </View>
      <View style={{width:"100%", rowGap:24,}}>
      <TouchableOpacity style={RegistrationStyle.path}>
            <Text style={{
                fontFamily:"Poppins_500Medium",
                fontSize:12,
                color:COLOR.lessGreenColor,
            }}>
                je le ferai plus tard             
            </Text>
        </TouchableOpacity>
      </View>
      
      </View>
    </View>		
    <ButtonNext onPress={onNextPage}/>		
      </View>
    );
  };

export default FormRegister4;
