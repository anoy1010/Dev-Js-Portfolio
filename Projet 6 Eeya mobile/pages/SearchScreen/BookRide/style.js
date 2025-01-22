import { StyleSheet } from "react-native";
import { COLOR, PADDING } from "../../../outils/const";

export const BookRideStyle = StyleSheet.create({
  contain: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: PADDING.horizontal,
    position:"relative"
  },
  container2: {
    width:"100%",
    marginVertical:4,
    paddingVertical:8,
    height:"auto",
    rowGap:16,
    justifyContent:"space-around",
    flexDirection:'column',

    


  },
  container1: {
    borderColor: "black",
    borderWidth: 0.3,
  },
  Title1: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 24,
  },
  Title2: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 12,
    color:COLOR.orangeColor,
  },
  Text1: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 18,
  },Text1w: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 18,
    color:"white",
  },
  Text2: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 12,
  },
  Text3: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 10,
    color:"gray",
  },
  items: {
    width:"45%", // 48% pour que deux colonnes s'adaptent avec une marge entre elles
    marginBottom: 6, // Marge entre les lignes
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    paddingVertical: 4,
    backgroundColor: "white",
  },
});
