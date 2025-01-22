import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import ConnexionStyles from "./style";
import { useNavigation } from '@react-navigation/native';


const Connexion = () => {

  const navigation = useNavigation();

  const onNextLogin = () => {
    navigation.navigate('LoginScreen'); // Correction: Fonction anonyme nécessaire ici
  }

  const onNextRegister = () => {
    navigation.navigate('Registration');
  }
  return (
    <View style={ConnexionStyles.contain}>
      <View style={ConnexionStyles.viewimage}>
        <Image
          source={require("./../../assets/logo.png")}
          style={ConnexionStyles.logo}
        />
      </View>
      <View style={ConnexionStyles.viewImg}>
        <Image
          source={require("./../../assets/picConnexion.jpg")}
          style={ConnexionStyles.img}
        />
      </View>
      <View>
        <Text style={ConnexionStyles.text}>
          Un vaste choix de trajet à petit prix
        </Text>
      </View>
      <View>
        <View style={ConnexionStyles.button}>
          <TouchableOpacity style={ConnexionStyles.buttonRegister} onPress={onNextRegister}>
            <Text style={ConnexionStyles.textRegister} >Insccription</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ConnexionStyles.buttonSign} onPress={onNextLogin}>
            <Text style={ConnexionStyles.textSign}>Connexion</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Connexion;
