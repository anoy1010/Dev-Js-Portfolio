import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { BookRideStyle } from "../SearchScreen/BookRide/style";
import { PADDING } from "../../outils/const";

const RouteStep2 = () => {
  return (
    <View  style={Styles.container}>
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
          <View style={BookRideStyle.items}>
            <Text style={BookRideStyle.Text3}>Mode de paiement</Text>
            <Text style={BookRideStyle.Text2}> Mobile Money</Text>
          </View>
          <View style={BookRideStyle.items}>
            <Text style={BookRideStyle.Text3}> Date</Text>
            <Text style={BookRideStyle.Text2}> 15/02/2024</Text>
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
      <View style={Styles.section}>

      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
    container: {
      flex: 1,
     
      paddingVertical: PADDING.vertical,
      rowGap:12,
    },
    contain :{
        paddingHorizontal: PADDING.horizontal,
    },
    section: {
        flex:1,
        backgroundColor:"white",
    }

});

export default RouteStep2;
