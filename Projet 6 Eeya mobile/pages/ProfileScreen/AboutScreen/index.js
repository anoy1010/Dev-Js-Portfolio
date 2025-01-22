import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import React from "react";
import aboutStyles from "./styles";

const About = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <View style={aboutStyles.profilesContainer}>
        <View style={aboutStyles.profilesCard}>
          <Image
            source={require("./../../../assets/profiles_img.jpg")}
            style={aboutStyles.img}
          />
          <View style={aboutStyles.profilesInfo}>
            <Text style={aboutStyles.profilesName}>Kouassi Jules</Text>
            <TouchableOpacity style={aboutStyles.profilesButton}>
              <Text style={aboutStyles.profilesButtonText}>Modifier</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={aboutStyles.inputContainer}>
          <View>
            <Text style={aboutStyles.labelInput}>Nom et Prénom</Text>
            <TextInput
              placeholder="Kouassi Jules"
              keyboardType="text"
              style={aboutStyles.Input}
            />
          </View>
          <View>
            <Text style={aboutStyles.labelInput}>Adresse mail</Text>
            <TextInput
              placeholder="Kouassijules@eyaa.ci"
              keyboardType="text"
              style={aboutStyles.Input}
            />
          </View>
          <View>
            <Text style={aboutStyles.labelInput}>Numéro de Téléphone</Text>
            <TextInput
              placeholder="+225 0749205818"
              keyboardType="numeric"
              style={aboutStyles.Input}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default About;
