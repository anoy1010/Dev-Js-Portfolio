import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import { COLOR, PADDING } from "../../../outils/const";
import { LinearGradient } from 'expo-linear-gradient';


const Balance = () => {
  return (
    <View style={styles.Container}>
      <View
        style={{
          paddingHorizontal: PADDING.horizontal,
        }}
      >
        <LinearGradient 
        colors={['#007bff', '#ff63c3']}  
        style={styles.CartContainer}
        start={{ x: 0, y: 0 }} 
          end={{ x: 1, y: 0 }} 
        
        >
          <Text style={styles.Montant}>1.000.000 F CFA</Text>
          <TouchableOpacity style={styles.btnRetrait}>
            <Text style={styles.btntext}>Retirer</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <ScrollView>
        <View style={styles.notificatonGroup}>
          <View style={styles.notificaton}>
            <Text style={styles.textNotif}>Retrait</Text>
            <Text style={styles.dateNotif}>1 janvier 2024, 10:30</Text>
          </View>
          <Text style={styles.MontantNotif}>200 000 F CFA</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "white",
  },
  CartContainer: {
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
    width: "100%",
    height: 150,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "linear-gradient(to right, #007bff, #ff63c3)",
    borderRadius: 15,
  },
  notificaton: {
    flexDirection: "column",
    rowGap: 4,
  },
  notificatonGroup: {
    marginVertical: 24,
    paddingVertical: PADDING.vertical,
    paddingHorizontal: PADDING.horizontal,
    borderTopWidth: 1,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexDirection: "row",
  },
  Montant: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 32,
    color:"white"
  },
  btnRetrait: {
    backgroundColor: "white",
    paddingHorizontal: 48,
    paddingVertical: 4,
    borderRadius: 10,
  },
  btntext: {
    color: COLOR.orangeColor,
    fontFamily: "Poppins_700Bold",
    fontSize: 14,
  },
  textNotif: {
    fontFamily: "Poppins_700Bold",
  },
  MontantNotif: {
    fontFamily: "Poppins_700Bold",
  },
  dateNotif: {
    color: "black",
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
  },
});
export default Balance;
