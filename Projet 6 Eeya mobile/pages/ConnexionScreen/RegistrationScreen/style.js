import { StyleSheet } from "react-native";
import { PADDING,COLOR } from "../../../outils/const";


const RegistrationStyle = StyleSheet.create ({
    contain : {
        flex: 1, 
        justifyContent:"flex-start",
        alignItems: "flex-start",
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.vertical,
        backgroundColor:"white"
    },
    titre : {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 28,
        color:COLOR.lessGreenColor,
    },
    titre2 : {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 28,
        color:COLOR.lessGreenColor,
        width:"100%",
    },
    groupPath :{
        paddingVertical:32,
        rowGap:24
    },
    path :{
        width:"100%",
        flexDirection:"row",
        columnGap:8,
        justifyContent:"space-between",
        alignItems:'center',
        
    },
    pathText :{
        color:"black",
        width:"80%",
        fontFamily: "Poppins_600SemiBold",
        fontSize:18,
    },
    button: {
        rowGap:8,
    },
    textDeja: {
        fontFamily: "Poppins_600SemiBold",
        fontSize:20,
        color:COLOR.grayColor,
    },
    textConnexion: {
        fontFamily: "Poppins_600SemiBold",
        fontSize:16,
        color:COLOR.orangeColor,
    }
})

export default RegistrationStyle;