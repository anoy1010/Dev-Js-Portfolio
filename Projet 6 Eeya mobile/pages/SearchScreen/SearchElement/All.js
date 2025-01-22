import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { StyleSheet } from "react-native";
import SearchElementStyles from "./style";
import { COLOR, PADDING } from "../../../outils/const";
import { green } from "@mui/material/colors";
import aboutStyles from "../../ProfileScreen/AboutScreen/styles";
import zIndex from "@mui/material/styles/zIndex";

const All = () => {
  return (
    <View style={Styles.contain}>
      <View style={Styles.groupA}>
        <FontAwesome name="bell" size={32} color={COLOR.lessGreenColor} />
        <View style={Styles.groupB}>
          <Text style={SearchElementStyles.text3}>
            Trajet très demandé ! vous devriez réserver sans attendre
          </Text>
          <Text style={SearchElementStyles.text4}>
            50% des trajet sont réservés.
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: '#fff',
          borderRadius:30,
    justifyContent: 'center',
    alignItems: 'center',
    // Pour iOS
    shadowColor: '#000',
    shadowOffset: { width: 20, height: 20 },
    shadowOpacity: 1,
    shadowRadius: 20,
    // Pour Android
    elevation: 20,
          
        }}
      >
        <View style={{
          flexDirection: "column",
          rowGap: 32,
          justiftContent:"center",
          alignItems:"center",
          shadowColor: "#babecc",
          paddingHorizontal:4,
          borderRadius: 30,
          paddingVertical:8,


         
        }}>
        <View style={Styles.groupC}>
          <View style={Styles.groupC1}>
            <Text style={SearchElementStyles.text3}>14 : 00</Text>
            <Text style={SearchElementStyles.text4}>00h20</Text>
            <Text style={SearchElementStyles.text3}>14 : 20</Text>
          </View>
          <View style={Styles.element}>
            <Image
              source={require("./../../../assets/routeClip1.png")}
              style={Styles.clip}
            />
          </View>
          <View style={Styles.element}>
            <View style={SearchElementStyles.group1a}>
              <View style={{ flexDirection: "column", rowGap: 12 }}>
                <Text style={SearchElementStyles.text2}>Yopougon Maroc</Text>
                <View style={Styles.groupIcon}>
                  <View style={Styles.walkingSucces}>
                    <FontAwesome5 name="walking" size={20} color="white" />
                  </View>
                  <View style={Styles.walkingNoSucces}>
                    <FontAwesome5 name="walking" size={20} color="white" />
                  </View>
                  <View style={Styles.walkingNoSucces}>
                    <FontAwesome5 name="walking" size={20} color="white" />
                  </View>
                </View>
                <Text style={SearchElementStyles.text2}>Cocody Saint Jean</Text>
                <View style={Styles.groupIcon}>
                  <View style={Styles.walkingNoSucces}>
                    <FontAwesome5 name="walking" size={20} color="white" />
                  </View>
                  <View style={Styles.walkingLoad}>
                    <FontAwesome5 name="walking" size={20} color="white" />
                  </View>
                  <View style={Styles.walkingNoSucces}>
                    <FontAwesome5 name="walking" size={20} color="white" />
                  </View>
                </View>
              </View>
              <Text style={SearchElementStyles.text2}>3500 F CFA</Text>
            </View>
          </View>
        </View>

        <View style={Styles.groupE}>
          <View style={Styles.groupE1}>
            <View style={Styles.imgBg}>
              <Image
                source={require("./../../../assets/profiles_img.png")}
                style={Styles.img}
              />
              <Image
                source={require("./../../../assets/iconVerify.png")}
                style={{
                  width: 20,
                  height: 20,
                  position: "absolute",
                  bottom: -10,
                  right: 0,
                  zIndex: 1,
                }}
              />
            </View>
            <View>
              <Text style={SearchElementStyles.text2}>Kouame Jean </Text>
              <View>
                <FontAwesome name="star" size={20} color="gray" />
                <Text style={SearchElementStyles.text4}>4,5 </Text>
              </View>
            </View>
          </View>

          <View style={Styles.groupE2}>
            <TouchableOpacity style={Styles.iconPay}>
              <FontAwesome name="money" size={30} color="gray" />
              <Text style={Styles.text2}>Espèce</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.iconPay}>
              <Image
                source={require("./../../../assets/mobpay.png")}
                style={{ width: 30, height: 30 }}
              />
              <Text style={Styles.text2}>Mobile Money</Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  contain: {
    flex: 1,
    flexDirection: "column",
    rowGap: 48,
    justiftContent: "space-around",
    alignItems: "center",
    paddingVertical: 32,
    paddingHorizontal: PADDING.horizontal,
    width: "100%",
    height: "100%",
  },
  element: {
    margin:0,
    padding:0,
    
  },
  groupA: {
    columnGap: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
  },
  groupB: {
    flex: 1,
    width: "100%",
    flexWrap: "wrap",
  },
  groupC: {
    flexDirection: "row",
    
    alignItems:"flex-start"
  },
  groupC1: {
    rowGap: 12,
  },
  clip: {
    width: 30,
    height: 85,
  },
  groupIcon: {
    flexDirection: "row",
    columnGap: 8,
  },
  walkingSucces: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "green",
    width: 20,
  },
  walkingNoSucces: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: COLOR.lessGrayColor,
    width: 20,
  },
  walkingLoad: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "orange",
    width: 20,
  },
  groupE: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  groupE1: {
    flexDirection: "row",
    columnGap: 8,
    justiftContent: "center",
    alignItems: "center",
  },
  groupE2: {
    flexDirection: "row",
    justifyContent: "flex-start",
    columnGap: 8,
  },
  text1: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
  },
  text2: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 12,
    flexWrap: "wrap",
  },
  imgBg: {
    zIndex: 0,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 50,
    height: 50,
  },
  iconPay: {
    flexDirection: "column",
    width: 60,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 8,
  },
});
export default All;
