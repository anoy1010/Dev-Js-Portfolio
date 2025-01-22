import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { PADDING, COLOR } from "../../outils/const";
import { useNavigation } from "@react-navigation/native";


const PublishStep3 = () => {

    const navigation = useNavigation();

    const onNextvalidation = () => {
      navigation.navigate(''); // Remplacez 'NextScreen' par l'écran approprié
    };
  const [selectedPayment, setSelectedPayment] = useState("Mobile Money");

  return (
    <View style={Styles.Container}>
      <View>
        <Text style={Styles.text}>Selectionnez un mode de paiement :</Text>
        <TouchableOpacity
          style={Styles.paymentOption}
          onPress={() => setSelectedPayment("Espèces")}
        >
          <Ionicons
            name={
              selectedPayment === "Espèces"
                ? "radio-button-on"
                : "radio-button-off"
            }
            size={24}
            color={selectedPayment === "Espèces" ? "orange" : "gray"}
          />
          <Text style={Styles.optionText}>Espèces</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Styles.paymentOption}
          onPress={() => setSelectedPayment("Mobile Money")}
        >
          <Ionicons
            name={
              selectedPayment === "Mobile Money"
                ? "radio-button-on"
                : "radio-button-off"
            }
            size={24}
            color={selectedPayment === "Mobile Money" ? "orange" : "gray"}
          />
          <Text style={Styles.optionText}>Mobile Money</Text>
        </TouchableOpacity>
        <View>
        <Text style={Styles.text}>Cout du trajet par passager :</Text>
        <View style={Styles.inputContainer}>
          <TextInput
            style={Styles.input}
            placeholder="3500 Fcfa"
            placeholderTextColor="#888"
          />
        </View>
      </View>
      </View>
      
      <View>
      <TouchableOpacity style={Styles.saveButton} onPress={onNextvalidation}>
                <Text style={Styles.saveButtonText}>Valider</Text>
              </TouchableOpacity>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingHorizontal: PADDING.horizontal,
    backgroundColor: "white",
    paddingVertical: PADDING.vertical,
    justifyContent:"space-between",
  },
  text: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    marginBottom: 20,
  },
  paymentOption: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 10,
  },
  optionText: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
  },
  inputContainer: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 5,
    backgroundColor: COLOR.lessGrayColor,
  },
  input: {
    width: "100%",
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

export default PublishStep3;
