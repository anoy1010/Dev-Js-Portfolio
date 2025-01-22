import { StyleSheet } from "react-native";
import { PADDING, COLOR } from "../../../../outils/const";


const RMStyle = StyleSheet.create({
    contain : {
        flex:1,
        justifyContent:"flex-start",
        alignItems:"flex-start",
        paddingVertical:PADDING.vertical,
        paddingHorizontal:PADDING.horizontal,
        backgroundColor:"white"
    },
    titre : {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 28,
        color:COLOR.lessGreenColor,
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
        flexDirection:'row',
        borderRadius:20,
        padding:8,
        justifyContent:'space-between',
        paddingHorizontal:PADDING.horizontal,
    },
    input : {
        fontFamily:"Poppins_500Medium",
        fontSize:18,
        color:COLOR.grayColor,
        width:"70%"
    },
    Checkgroup :{
        flexDirection:"row",
        paddingVertical:PADDING.vertical,
        justifyContent:"space-between",
        width:"100%",
    },
    CheckText : {
        fontFamily:"Poppins_600SemiBold",
        width:"70%",
        fontSize:18,
        
    },
    sousTitre: {
        fontFamily:"Poppins_600SemiBold",
        fontSize:12,
        paddingVertical:PADDING.vertical
    }
})
export default RMStyle;