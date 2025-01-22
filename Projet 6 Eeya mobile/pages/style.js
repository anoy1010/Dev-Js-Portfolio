import {StyleSheet} from 'react-native'
import { COLOR, PADDING, TEXT_SIZE } from '../outils/const';


const searchStyles = StyleSheet.create({
    Container: {
        flex:1,
        flexDirection:"column",
        alignItems:'center',
        paddingHorizontal: PADDING.horizontal,
        paddingVertical:PADDING.vertical,
        backgroundColor:'white',  

    },
    title: {
        paddingVertical:32,
        fontFamily: 'Poppins_600SemiBold',
        fontSize:TEXT_SIZE.title,
        textAlign:'center',
        

    },
    dateButton: {
        flex: 1,
        justifyContent: 'center',

      },
      dateText: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 18,
        color: 'black',
      },
    ContainImage:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    image: {
        resizeMode: 'cover', // Assurez-vous que l'image couvre toute la vue
      },
      inputContainer: {
        display:"flex",
        flexDirection:'column',
        justifyContent: 'center',
        alignItems:'center',
        width:'100%',
        height:100,
        bottom: 90,
        backgroundColor:'white',
        elevation: 5,
        borderTopLeftRadius:30,
            borderTopRightRadius:30,
      },
      fieldContain: {
        width:'100%',
        paddingHorizontal:24,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        columnGap:8,
        backgroundColor:'white',
        borderTopLeftRadius:30,
            borderTopRightRadius:30,


      
      },
    input:{
        flex: 1,
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 19,
        marginLeft: 10,
        color: 'black',
        backgroundColor:'white'

    },
    
      imageBackground: {
        width: '100%',
        height: 300, // Vous pouvez ajuster cette valeur selon vos besoins
        bottom:32,
        position:'fixed'
      },
      buttonSearch: {
        width:'100%',
        padding:10,
        backgroundColor:COLOR.orangeColor,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,

      },
      buttonText: {
        textAlign:'center',
        fontFamily: 'Poppins_700Bold',
        color:'white',
      }
});




export default searchStyles;