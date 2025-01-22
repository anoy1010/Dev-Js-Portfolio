import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import RegistrationStyle from "./style";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import Ionicon from "react-native-vector-icons/Ionicons";
import { COLOR } from "../../../outils/const";
import { useNavigation } from '@react-navigation/native';


const Registration = () => {

  const navigation = useNavigation();

  const onNextMail = () => {
    navigation.navigate('RegisterMail'); // Correction: Fonction anonyme nécessaire ici
  }

  const onNextNumber = () => {
    navigation.navigate('RegisterNumber');
  }

  return (
    <View style={RegistrationStyle.contain}>
      <View>
        <Text style={RegistrationStyle.titre}>
          Comment Souhaitez-vous vous inscrire ?
        </Text>
      </View>
      <View style={RegistrationStyle.groupPath}>
        <TouchableOpacity style={RegistrationStyle.path} onPress={onNextMail}>
          <View
            style={{
              flexDirection: "row",
              columnGap: 12,
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Ionicon name="mail-outline" size={32} color={COLOR.grayColor} />
            <Text style={RegistrationStyle.pathText}>
              Continuer avec une adresse email
            </Text>
          </View>
          <AntDesignIcon name="right" size={24} color="#898989" />
        </TouchableOpacity>
        <TouchableOpacity style={RegistrationStyle.path}>
          <View
            style={{
              flexDirection: "row",
              columnGap: 12,
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Ionicon name="call" size={32} color={COLOR.grayColor} />
            <Text style={RegistrationStyle.pathText}>
              Continuer avec un numéro de téléphone
            </Text>
          </View>
          <AntDesignIcon name="right" size={24} color="#898989" />
        </TouchableOpacity>
      </View>

      <View style={RegistrationStyle.button}>
        <TouchableOpacity>
          <Text style={RegistrationStyle.textDeja}>Déjà membre ?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={RegistrationStyle.textConnexion}>Connexion</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Registration;
