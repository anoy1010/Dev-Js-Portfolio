import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { RadioButton } from 'react-native-paper';
import FormStyle from "./Style";
import ButtonNext from "../../../../comps/buttonNext";
import { useNavigation } from '@react-navigation/native';



const { width } = Dimensions.get('window');

const FormRegisters = () => {

    const navigation = useNavigation();

    const onNextPage = () => {
        navigation.navigate('StepRegister2'); // Remplacez 'NextScreen' par l'écran approprié
      };
    const [text, setText] = useState('');
  const [checked, setChecked] = useState(false);
   
  
    return (
      <View>
        <View style={FormStyle.contain}>
      <View style={{ width: "100%" }}>
        <Text style={FormStyle.titre}>Comment vous appeler vous ?</Text>
      </View>
      <View style={{width:"100%", rowGap:24,}}>
        <View style={FormStyle.groupInput}>
          <TextInput
            style={FormStyle.input}
            onChangeText={setText}
            value={text}
            placeholder="Nom"
            keyboardType="default"
          />
        </View>
        <View style={FormStyle.groupInput}>
          <TextInput
            style={FormStyle.input}
            onChangeText={setText}
            value={text}
            placeholder="Prenom"
            keyboardType="default"
          />
        </View>
        <View style={FormStyle.groupInput}>
          <TextInput
            style={FormStyle.input}
            onChangeText={setText}
            value={text}
            placeholder="Alias (non obligatoire)"
            keyboardType="default"
          />
        </View>
      </View>
    </View>		
    <ButtonNext onPress={onNextPage}/>		
      </View>
    );
  };

export default FormRegisters;
