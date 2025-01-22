import {StyleSheet} from 'react-native'
import { COLOR, PADDING } from '../../../outils/const';

const aboutStyles = StyleSheet.create({
    profilesContainer: {
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        width:"100%",
    },
    profilesCard :{
        flexDirection: 'row',
        backgroundColor:'white',
        elevation:5,
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.vertical,
        marginBottom:20,
        borderRadius:15,
        justifyContent:"center",
        alignItems:'center',
        
    }, img : {
        width:100,
        height:100,
        borderRadius:90/2,
        marginRight:15,
    },
    profilesInfo :{
        flexDirection:'column',
    }, 
    profilesName: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize:24,
        color: COLOR.orangeColor
    },
    profilesButton :{
        borderRadius: 30,
    },
    profilesButtonText :{
        fontSize: 18,
        fontFamily: 'Poppins_500Medium',
        color:COLOR.grayColor,
    },
    inputContainer :{
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.vertical,
    },
    Input:{
        borderWidth:0.5,
        borderRadius:80/2,
        fontFamily: 'Poppins_600SemiBold',
        padding:10,
        borderColor:COLOR.grayColor,
        fontSize: 18,
        color: COLOR.grayColor,
    },
    labelInput :{
        fontFamily: 'Poppins_600SemiBold',
        fontSize:20,
        color:COLOR.orangeColor,
    }

})

export default aboutStyles;