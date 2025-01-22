import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { COLOR, PADDING } from '../../../outils/const';

const ReserveRide = () => {

    const navigation = useNavigation();

    const onNextPage = () => {
      navigation.navigate("ReserveView");
    };

  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>14/04/2024</Text>
      <ScrollView style ={Styles.Scroller}>
      <View style={Styles.contain}>
        <View style={Styles.group}>
          <Text style={Styles.text1}>Youpougon maroc</Text>
          <AntDesign name="arrowright" size={14} color="black" />
          <Text style={Styles.text1}>Cocody saint jean</Text>
          <TouchableOpacity style={Styles.button} onPress={onNextPage}>
            <AntDesign name="arrowright" size={18} color="white" />
          </TouchableOpacity>
        </View>
        <View style={Styles.group1}>
        <Text style={Styles.textGray}>3 passagers</Text>
        <View style={Styles.group2}>
            <Text style={Styles.text2}>Prix du trajet: 3500 F</Text>
        </View>
        </View>
      </View>
      <View style={Styles.contain}>
        <View style={Styles.group}>
          <Text style={Styles.text1}>Youpougon maroc</Text>
          <AntDesign name="arrowright" size={14} color="black" />
          <Text style={Styles.text1}>Cocody saint jean</Text>
          <TouchableOpacity style={Styles.button}>
            <AntDesign name="arrowright" size={18} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={Styles.textGray}>3 passagers</Text>
      </View>
      </ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
    rowGap:12,
  },
  Scroller: {
    flexDirection:"column",
    rowGap:24,
  },
  contain: {
    padding: 14,
    backgroundColor: COLOR.lessGrayColor,
    borderRadius: 10,
    marginVertical:8,
    
  },
  text: {
    fontFamily: "Poppins_500Medium",
  },
  text1: {
    fontFamily: "Poppins_600SemiBold",
    width:90,
  },
  text2: {
    fontFamily: "Poppins_600SemiBold",
    color:"white",
    fontSize:10,
  },
  textGray: {
    color: COLOR.grayColor,
    fontSize:10, 
    fontFamily:"Poppins_700Bold"
  },
  group: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
  group1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
  group2: {
    
    justifyContent: "center",
    alignItems: "center",
    borderRadius:10,
    paddingHorizontal:8,
    paddingVertical:3,
    borderRadius:8,
    backgroundColor:"#29ABE2"
  },
  button: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: COLOR.orangeColor,
  },
});

export default ReserveRide