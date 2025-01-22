import { View, TouchableOpacity, Text, StyleSheet, Button } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, { version } from 'react'
import { COLOR, PADDING } from '../../../outils/const';
import { useNavigation } from "@react-navigation/native";


const BecomeDriver = () => {
  const navigation = useNavigation();
  const onNextaddCar = () => {
    navigation.navigate('AddCar'); // Remplacez 'NextScreen' par l'écran approprié
  };
  const handleAddIdentity = () => {
    // Fonction pour ajouter une pièce d'identité
    console.log('Ajouter une pièce d\'identité');
  };

  const handleAddMiniBio = () => {
    // Fonction pour ajouter une mini-bio
    console.log('Ajouter une mini-bio');
  };

  const handleAddVehicle = () => {
    // Fonction pour ajouter un véhicule
    console.log('Ajouter un véhicule');
  };

  const handleAddMotorcycle = () => {
    // Fonction pour ajouter une moto
    console.log('Ajouter une moto');
  };

  const handleSubmit = () => {
    // Fonction pour soumettre les documents
    console.log('Soumettre les documents');
  };
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <TouchableOpacity style={styles.iconButton} onPress={handleAddIdentity}>
          <AntDesign name="pluscircleo" size={25} color={COLOR.orangeColor} />
          <Text style={styles.iconText}>Ajouter une pièce d'identité</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={handleAddMiniBio}>
          <AntDesign name="pluscircleo" size={25} color={COLOR.orangeColor} />
          <Text style={styles.iconText}>Ajouter une mini-bio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={onNextaddCar}>
          <AntDesign name="pluscircleo" size={25} color={COLOR.orangeColor} />
          <Text style={styles.iconText}>Ajouter un véhicule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={handleAddMotorcycle}>
          <AntDesign name="pluscircleo" size={25} color={COLOR.orangeColor} />
          <Text style={styles.iconText}>Ajouter une moto</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Soumettre</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal:PADDING.horizontal,
    paddingVertical:PADDING.vertical,
    backgroundColor: "white",
  },
  section: {
    width:"100%",
    flexDirection: 'column',
    alignItems:"flex-start",
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  iconButton: {
    width:"100%",
   
    columnGap:14,
    alignItems: 'center',
    marginBottom: 20,
    flexDirection:'row',
  },
  iconText: {
    
    textAlign: 'center',
    fontFamily: "Poppins_600SemiBold",
    color:COLOR.orangeColor,
  },
  submitButton: {
    backgroundColor: '#2196F3',
    borderRadius: 10, // Bordures arrondies
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default BecomeDriver