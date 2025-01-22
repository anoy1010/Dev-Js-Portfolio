import { create } from "@mui/material/styles/createTransitions";
import { StyleSheet } from "react-native";
import { COLOR, PADDING } from "../../../outils/const";
import { TabView } from "react-native-tab-view";

const SearchElementStyles = StyleSheet.create({
  contain: {
    flex:1,
   
    paddingVertical:PADDING.vertical,
    justifyContent: "center",
    rowGap:24,
    alignItems: "center",
    backgroundColor: "white",
  },
  tripOverview: {
    width: "100%",
    
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingVertical: PADDING.Vertical,
    marginVertical: 10,
  },
  tabContainer: {
    width: "100%",
    flex: 1,
    backgroundColor: "white",
  },

  text1: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 24,
  },
  text2: {
    fontFamily:"Poppins_600SemiBold",
    fontSize: 16,
  },
  text3: {
    fontFamily:"Poppins_500Medium",
    fontSize: 16,
    color:COLOR.lessGreenColor,
    width:"100%",
  },
  text4: {
    fontFamily:"Poppins_600SemiBold",
    fontSize: 14,
    color:COLOR.grayColor,
  },
  titre1: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 24,
    color: COLOR.lessGreenColor,
  },
  titre2: {
    fontFamily: "Poppins_400Regular",
    fontSize: 20,
    color: COLOR.lessGreenColor,
  },
  title: {
    flexDirection: "column",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  date: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
    color: COLOR.lessGrayColor,
    width: "100%",
  },
  titleGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingRight: 32,
  },
  clip: {
    width: 40,
    height: 40,
  },
  logo: {
    width: 60,
    height: 60,

    padding: 0,
  },
  groupA: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius:30,
  },
  group1a: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    columnGap: 32,
  },
  group1: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  group2: {
    flexDirection: "column",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    borderColor: "black",
    borderWidth: 0.5,
    borderRadius: 20,
    alignItems: "center",
    paddingVertical: PADDING.horizontal,
    paddingHorizontal: PADDING.horizontal,
    
  },
  
});

export default SearchElementStyles;
