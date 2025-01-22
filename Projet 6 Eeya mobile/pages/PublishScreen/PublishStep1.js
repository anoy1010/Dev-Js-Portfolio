import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { COLOR, PADDING } from "../../outils/const";
import { Checkbox } from "react-native-paper";
import ButtonNext from "../../comps/buttonNext";
import { useNavigation } from "@react-navigation/native";


const PublishStep1 = () => {
    const [checkedA, setCheckedA] = useState(false); // State for Point A checkbox
    const [checkedB, setCheckedB] = useState(false); // State for Point B checkbox

    const navigation = useNavigation();
    const onNextPage = () => {
      navigation.navigate("PublishStep2"); // Remplacez 'NextScreen' par l'écran approprié
    };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>
          Ajoutez des étapes pour trouver plus de passagers
        </Text>
      </View>
      <View style={styles.groupePoint}>
        <Text style={styles.title}>Point A</Text>
        <Checkbox
          status={checkedA ? "checked" : "unchecked"}
          onPress={() => setCheckedA(!checkedA)}
          color={COLOR.orangeColor} // Couleur de la checkbox lorsqu'elle est cochée
        />
      </View>
      <View style={styles.groupePoint}>
        <Text style={styles.title}>Point B</Text>
        <Checkbox
          status={checkedB ? "checked" : "unchecked"}
          onPress={() => setCheckedB(!checkedB)}
          color={COLOR.orangeColor} // Couleur de la checkbox lorsqu'elle est cochée
        />
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btntext}>Ajoutez des étapes</Text>
      </TouchableOpacity>
      <ButtonNext onPress={onNextPage}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical:PADDING.vertical,
    paddingHorizontal: PADDING.horizontal,
  },
  text: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 22,
  },
  btn :{
    paddingVertical:PADDING.vertical,
  },
  btntext: {
    color: COLOR.orangeColor,
    fontFamily: "Poppins_600SemiBold",
    fontSize: 12,
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
  },
  groupePoint: {
    flexDirection: "row",
    width: "100",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    
  },
});
export default PublishStep1;
