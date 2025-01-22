import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import SearchElementStyles from "./style";
import { PADDING } from "../../../outils/const";
import TabsElement from "./TabsElement";
import { useNavigation } from "@react-navigation/native";


const SearchElement = () => {
  const navigation = useNavigation();
  const onNextPage = () => {
    navigation.navigate('Book'); // Remplacez 'NextScreen' par l'écran approprié
  };

  return (
    <ScrollView style={{
      flex:1, 
    }}>
      <View style={SearchElementStyles.contain}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          borderColor: "black",

          borderRadius: 20,
          alignItems: "center",

          paddingHorizontal: PADDING.horizontal,
        }}
      >
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={SearchElementStyles.title}>
          <View style={SearchElementStyles.titleGroup}>
            <Text style={SearchElementStyles.text2}>Youpougon</Text>
            <Ionicons name="arrow-forward" size={20} color="gray" />
            <Text style={SearchElementStyles.text2}>Cocody saint jean</Text>
          </View>
          <Text style={SearchElementStyles.date}>
            Vendredi 19 Avril, 3 passagers
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 30,
          justifyContent: "center",
          alignItems: "center",
          // Pour iOS
          shadowColor: "#000",
          shadowOffset: { width: 20, height: 20 },
          shadowOpacity: 1,
          shadowRadius: 20,
          // Pour Android
          elevation: 20,
        }}
      >
        <View
          style={{
            width: "100%",
            paddingHorizontal: PADDING.horizontal,
            flexDirection: "column",

            justifyContent: "center",
            alignItems: "flex-start",
            paddingVertical: PADDING.horizontal,
            paddingHorizontal: PADDING.horizontal,
          }}
        >
          <View style={SearchElementStyles.groupA}>
            <Image
              source={require("./../../../assets/routeClip1.png")}
              style={SearchElementStyles.clip}
            />
            <View style={SearchElementStyles.group1a}>
              <View style={{ flexDirection: "column", rowGap: 12 }}>
                <Text style={SearchElementStyles.text2}>Yopougon Maroc</Text>
                <Text style={SearchElementStyles.text2}>Cocody Saint Jean</Text>
              </View>
              <Text style={SearchElementStyles.text2}>3500 F CFA</Text>
            </View>
          </View>
          <View style={SearchElementStyles.group1}>
            <Image
              source={require("./../../../assets/logo1.png")}
              style={SearchElementStyles.logo}
            />
            <View style={SearchElementStyles.group2}>
              <Text style={SearchElementStyles.text2}>
                6 trajet disponibles
              </Text>
              <TouchableOpacity onPress={onNextPage}>
                <Text style={SearchElementStyles.text2}>Reserver</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          width: "100%",
        }}
      >
        <TabsElement />
      </View>
    </View>
    </ScrollView>
  );
};

export default SearchElement;
