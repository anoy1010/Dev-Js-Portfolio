import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { COLOR, PADDING } from '../../../outils/const';
import { useNavigation } from "@react-navigation/native";


const Withdraw = () => {
    const navigation = useNavigation();

    const onNextvalidation = () => {
      navigation.navigate(''); // Remplacez 'NextScreen' par l'écran approprié
    };
    
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.text}>Montant à retirer *</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder=""
              placeholderTextColor="#888"
            />
          </View>
        </View>
        <TouchableOpacity style={styles.saveButton} onPress={onNextvalidation}>
                <Text style={styles.saveButtonText}>Valider</Text>
              </TouchableOpacity>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      paddingHorizontal: 20,
      justifyContent:"space-between",
      paddingVertical:PADDING.vertical,
      width: "100%",
    },
    section : {
      paddingVertical:PADDING.vertical,
      justifyContent:"center",
      alignItems:"flex-start",
      width:"100%",
    },
    inputContainer: {
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#ccc",
      width:"100%",
      borderRadius: 8,
      paddingHorizontal: 10,
      marginTop: 5,
      backgroundColor: COLOR.lessGrayColor,
    },
    text: {
      fontFamily:"Poppins_600SemiBold",
    },
    input: {
      width:"100%",
      height: 40,
      paddingHorizontal: 10,
      backgroundColor: COLOR.lessGrayColor,
    },
    saveButton: {
      backgroundColor: "#2196F3",
      paddingVertical: 10,
      paddingHorizontal: 40,
      borderRadius: 15,
      marginTop: 10,
    },
    saveButtonText: {
      color: "white",
      fontSize: 16,
      textAlign: "center",
    },
  });
  

export default Withdraw