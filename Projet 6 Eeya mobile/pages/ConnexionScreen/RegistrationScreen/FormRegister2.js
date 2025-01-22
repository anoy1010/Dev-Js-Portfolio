import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { RadioButton } from 'react-native-paper';
import ButtonNext from '../../../comps/buttonNext';
import { useNavigation } from '@react-navigation/native';
import FormStyle from './FormRegister/Style';



const { width } = Dimensions.get('window');

const FormRegister2 = () => {

    const navigation = useNavigation();

    const onNextPage = () => {
        navigation.navigate('StepRegister3'); // Remplacez 'NextScreen' par l'écran approprié
      };
    const [text, setText] = useState('');
  const [checked, setChecked] = useState(false);
   
  
    return (
      <View>
        <View style={FormStyle.contain}>
      <View style={{ width: "100%" }}>
        <Text style={FormStyle.titre}>Date de naissance</Text>
      </View>
      <View style={{width:"100%", rowGap:24,}}>
        <View style={FormStyle.groupInput}>
          <TextInput
            style={FormStyle.input}
            onChangeText={setText}
            value={text}
            placeholder="JJ/MM/AA"
            keyboardType="default"
          />
        </View>
      </View>
    </View>		
    <ButtonNext onPress={onNextPage}/>		
      </View>
    );
  };

export default FormRegister2;
