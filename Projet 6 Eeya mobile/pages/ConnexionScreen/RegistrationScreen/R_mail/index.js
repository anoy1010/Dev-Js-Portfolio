import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import RMStyle from "./style";
import AntDesign from "react-native-vector-icons/AntDesign";
import { COLOR } from "../../../../outils/const";
import { Checkbox } from "react-native-paper";
import ButtonNext from "../../../../comps/buttonNext";
import { useNavigation } from "@react-navigation/native";

const RMail = () => {
    const navigation = useNavigation();



    const onNextPage = () => {
    navigation.navigate('Formulaire'); // Correction: Fonction anonyme nécessaire ici
  }


  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);

  const onChangeText = (value) => {
    setText(value);
  };

  return (
    <View style={RMStyle.contain}>
      <View>
        <Text style={RMStyle.titre}>Votre adresse e-mail ?</Text>
      </View>
      <View style={RMStyle.groupInput}>
        <TextInput
          style={RMStyle.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="test@gmail.com"
          keyboardType="default"
        />

        <AntDesign name="close" size={20} color={COLOR.grayColor} />
      </View>
      <View>
        <View style={RMStyle.Checkgroup}>
          <Text style={RMStyle.CheckText}>
            Je souhaite recevoir des informations, de bons plans et de cadeaux
            de Eyaa
          </Text>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={() => setChecked(!checked)}
            color={COLOR.orangeColor} // Couleur de la checkbox lorsqu'elle est cochée
          />
        </View>
        <Text style={RMStyle.sousTitre}>
          En tant que abonnéè(e), je peux me désinscrire à tout moment en
          contactant Eyaa ou en cliquant sur le lien dans la newsletter
        </Text>
      </View>
      <ButtonNext onPress={onNextPage}/>
    </View>
  );
};

export default RMail;
