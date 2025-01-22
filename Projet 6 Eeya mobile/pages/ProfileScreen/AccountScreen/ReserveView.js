import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
import { BookRideStyle } from "../../SearchScreen/BookRide/style";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { PADDING } from "../../../outils/const";

const ReserveView = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.contain}>
        <View
          style={{
            backgroundColor: "white",
            padding: 18,
            width: "100%",
            borderRadius: 8,
            justifyContent: "space-around",
            rowGap: 32,
          }}
        >
          <View style={BookRideStyle.container1}>
            <Text style={BookRideStyle.Text2}> Yopougon Maroc</Text>
          </View>
          <View style={BookRideStyle.container1}>
            <Text style={BookRideStyle.Text2}> Cocody Saint Jean </Text>
          </View>
        </View>
        <View
          style={{
            borderRadius: 8,
            width: "100%",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            paddingVertical: 4,
          }}
        >
          <View style={BookRideStyle.items}>
            <Text style={BookRideStyle.Text3}> Heure de depart</Text>
            <Text style={BookRideStyle.Text1}> 08 : 00</Text>
          </View>
          <View style={BookRideStyle.items}>
            <Text style={BookRideStyle.Text3}> prix par places</Text>
            <Text style={BookRideStyle.Text1}> 3 500 FCFA</Text>
          </View>
          <View style={BookRideStyle.items}>
            <Text style={BookRideStyle.Text3}> places disponibles</Text>
            <Text style={BookRideStyle.Text2}> 3</Text>
          </View>
          <View style={BookRideStyle.items}>
            <Text style={BookRideStyle.Text3}> Bagage pris en charge</Text>
            <Text style={BookRideStyle.Text2}> .......</Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            backgroundColor: "white",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={BookRideStyle.Text3}> Etapes</Text>
          <Text style={BookRideStyle.Text2}>Point A - Point B - Point C </Text>
        </View>
      </View>
      <View style={Styles.contain1}>
        <View style={Styles.group1}>
          <Text style={BookRideStyle.Text1}>Disponibles</Text>
          <ScrollView>
            <View style={Styles.section}>
              <View style={Styles.section1}>
                <Image
                  source={require("./../../../assets/profiles_img.png")}
                  style={Styles.img}
                />
                <View>
                  <Text style={Styles.text}>Kouamé Jean</Text>
                  <Text style={Styles.text1}>+225 0102030405</Text>
                </View>
              </View>
              <View style={Styles.ButtonPhone}>
                <FontAwesome name="phone" size={20} color="white" />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  contain: {
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
  },
  contain1: {
    flex: 1,
    backgroundColor: "white",
  },
  group1: {
    paddingHorizontal: PADDING.horizontal,
  },
  section: {
    flexDirection: "row",
    justifyContent:"space-between",
    marginVertical:14,
  },
  text: {
    fontSize: 15,
    fontFamily: "Poppins_600SemiBold",
  },
  text1: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
  },
  ButtonPhone: {
    backgroundColor: "#F25D1C",
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 90 / 2,
    marginRight: 15,
  },
  section1:{
    flexDirection: "row",
    
  }
});

export default ReserveView;
