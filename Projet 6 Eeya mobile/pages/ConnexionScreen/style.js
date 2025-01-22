import { StyleSheet } from "react-native";
import { PADDING, COLOR } from "../../outils/const";


const ConnexionStyles = StyleSheet.create ({
    contain: {
        height: "100%",
        display: "",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor:"white"
      },
      viewimage: {
        paddingHorizontal: PADDING.horizontal,
      },
      viewImg: {
        width: 300,
        height: 350,
        borderRadius:30,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        // Pour iOS
        shadowColor: '#000',
        shadowOffset: { width: 20, height: 20 },
        shadowOpacity: 1,
        shadowRadius: 20,
        // Pour Android
        elevation: 20,
      },
      logo: {
        width: 200,
        height: 200,
      },
      img: {
        width: 300,
        height: 350,
        borderRadius: 30,
        shadowColor: "#babecc",
        shadowOpacity: 8,
        elevation: 20,
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 20,
      },
      text: {
        textAlign:'center',
        paddingVertical:8,
        fontFamily: "Poppins_600SemiBold",
        fontSize: 32,
      },
      textRegister: {
        textAlign:'center', 
        fontFamily: "Poppins_600SemiBold",
        fontSize: 24,
        color:'white'
      },
      textSign: {
        textAlign:'center', 
        fontFamily: "Poppins_600SemiBold",
        fontSize: 24,
        color:COLOR.orangeColor,
      },
     button :{
        rowGap:24,
        paddingVertical:PADDING.vertical,
     }, 
      buttonRegister: { 
        alignItems:"center",
        justifyContent:'center',
        borderRadius:30,
        width:300,
        backgroundColor: COLOR.orangeColor,
      },
      buttonSign: { 
        alignItems:"center",
        justifyContent:'center',
        borderRadius:30,
        width:300,
        backgroundColor: COLOR.lessGRayColor,
        borderRadius: 30,
        shadowColor: "#babecc",
        shadowOpacity: 8,
        elevation: 20,
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 20,
      },
     
})

export default ConnexionStyles;