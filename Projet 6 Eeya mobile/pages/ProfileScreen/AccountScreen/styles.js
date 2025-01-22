import {StyleSheet} from 'react-native'
import { COLOR, PADDING } from '../../../outils/const';
import { Container } from "@mui/material";

const accountStyles = StyleSheet.create({
    Container :{
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.vertical,
        width:"100%",
        rowGap:4,
    },
    accountTouch :{
        flexDirection: 'row',
        backgroundColor:'white',
        padding:10,
        marginBottom:20,
        borderRadius:15,
        justifyContent:'space-between',
        
         
    }, 
    accountText :{
        fontFamily: 'Poppins_600SemiBold',
        fontSize:20,
        color:COLOR.orangeColor,
    }
})

export default accountStyles;