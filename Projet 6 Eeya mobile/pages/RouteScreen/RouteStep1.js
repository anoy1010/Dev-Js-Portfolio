import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { COLOR, PADDING } from "../../outils/const";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";


const RouteStep1 = () => {
    const navigation = useNavigation();

    const onNextPage = () => {
      navigation.navigate("RouteStep2");
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
        <Text style={Styles.textGray}>3 passagers</Text>
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
  button: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: COLOR.orangeColor,
  },
});
export default RouteStep1;
