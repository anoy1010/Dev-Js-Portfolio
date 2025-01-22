import { StyleSheet } from "react-native";
import { PADDING,COLOR } from "../../../../outils/const";

const FormStyle = StyleSheet.create ({
    contain: {
        justifyContent:'flex-start',
        alignItems:"flex-start",
        backgroundColor:'white',
        paddingVertical:PADDING.vertical,
        paddingHorizontal:PADDING.horizontal,
        height:"100%",
    },
    titre : {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 28,
        color:COLOR.lessGreenColor,
        width:"70%",
        paddingVertical:PADDING.vertical,
    },
    titre2 : {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 28,
        color:COLOR.lessGreenColor,
        width:"100%",
        paddingVertical:PADDING.vertical,
   
    },
    groupInput: {
        width:"100%",
        backgroundColor:COLOR.lessGrayColor,
        shadowColor: "#babecc",
        shadowOpacity: 8,
        elevation: 20,
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 20,
        flexDirection:"row",
        borderRadius:20,
        padding:8,
        justifyContent:'space-between',
        paddingHorizontal:PADDING.horizontal,
    },
    input : {
        fontFamily:"Poppins_500Medium",
        fontSize:18,
        color:COLOR.grayColor,
        paddind:8,
        width:"70%",
    },
})

export default FormStyle;