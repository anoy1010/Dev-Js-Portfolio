import { StyleSheet } from "react-native";
import { COLOR, PADDING, TEXT_SIZE } from "../../outils/const";

const publishStyles = StyleSheet.create({
  contain: {},
  container: {
    paddingHorizontal: PADDING.horizontal,
    width:"100%",
    display:'flex',
    paddingVertical:10,
    flexDirection:"column",
    
  },
  titre: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: TEXT_SIZE.first,
  },
  text: {
    color:COLOR.grayColor,

  },
  button: {},
  inputContainer:{
    
        width:'100%',
        display:'flex',
        flexDirection:'row',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius:30,
        paddingVertical: 8,
        paddingHorizontal: 5,
        columnGap:8,
        backgroundColor:COLOR.lessGRayColor
        
  },
  input: {
    flex: 1,
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 12,
        marginLeft: 10,
        color: COLOR.grayColor,
  },
  icon: {},
});
export default publishStyles;
