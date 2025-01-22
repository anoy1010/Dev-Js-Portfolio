import { View, Text, TextInput, ScrollView, StyleSheet } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

import publishStyles from "./style";
import { COLOR, PADDING } from "../../outils/const";
import ButtonNext from "../../comps/buttonNext";
import { useNavigation } from "@react-navigation/native";
const Publish = () => {
  const navigation = useNavigation();
  const onNextPage = () => {
    navigation.navigate("PublishStep1"); // Remplacez 'NextScreen' par l'écran approprié
  };
  return (
   
      <View
        style={{
          
          flexDirection: "column",
          flex:1,
        backgroundColor: "white",
         
        }}
        
      >
       <ScrollView>
       <View style={publishStyles.container}>
          <Text style={publishStyles.titre}>D'où partez-vous ?</Text>
          <View style={publishStyles.inputContainer}>
            <AntDesign name="search1" size={18} color={COLOR.grayColor} />
            <TextInput
              placeholder="Saisissez l'adresse précise"
              keyboardType="text"
              placeholderTextColor={COLOR.grayColor}
              style={publishStyles.input}
            />
          </View>
        </View>
        <View style={publishStyles.container}>
          <Text style={publishStyles.titre}>
            Où souhaitez-vous récupérer vos passagers ?
          </Text>
          <View style={publishStyles.inputContainer}>
            <AntDesign name="search1" size={18} color={COLOR.grayColor} />
            <TextInput
              placeholder="Saisissez l'adresse précise"
              keyboardType="text"
              placeholderTextColor={COLOR.grayColor}
              style={publishStyles.input}
            />
          </View>
        </View>
        <View style={publishStyles.container}>
          <Text style={publishStyles.titre}>
            Où souhaitez-vous déposer vos passagers ?
          </Text>
          <View style={publishStyles.inputContainer}>
            <AntDesign name="search1" size={18} color={COLOR.grayColor} />
            <TextInput
              placeholder="Saisissez l'adresse précise"
              keyboardType="text"
              placeholderTextColor={COLOR.grayColor}
              style={publishStyles.input}
            />
          </View>
        </View>
        <View style={publishStyles.container}>
          <Text style={publishStyles.titre}>Type de bagage pris en charge</Text>
          <View style={publishStyles.inputContainer}>
            <AntDesign name="search1" size={18} color={COLOR.grayColor} />
            <TextInput
              placeholder="Saisissez l'adresse précise"
              keyboardType="text"
              placeholderTextColor={COLOR.grayColor}
              style={publishStyles.input}
            />
          </View>
        </View>
       </ScrollView>
       
      
      
        <ButtonNext onPress={onNextPage} />
        </View>
        
   
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    // Adjust padding as needed
  },
});

export default Publish;
