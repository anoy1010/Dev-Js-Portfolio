import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { BookRideStyle } from "./style";
import { COLOR } from "../../../outils/const";
import { Counter } from "./counter";

const BookRide = () => {
  return (
    <View style={BookRideStyle.contain}>
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
      <View style={BookRideStyle.container2}>
        <Text style={BookRideStyle.Title2}>Infos sur le vehicule</Text>
        <Text style={BookRideStyle.Title1}>
          Combien de places vous-voulez reserver ?
        </Text>
        <View>
          <Counter />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: COLOR.lessGrayColor,
            borderRadius: 8,
            alignItems: "center",
            paddingVertical: 6,
          }}
        >
          <Text style={BookRideStyle.Text1}>10 500 F CFA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#00BFFF",
            borderRadius: 8,
            alignItems: "center",
            paddingVertical: 6,
          }}
        >
          <Text style={BookRideStyle.Text1w}>Payer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookRide;
