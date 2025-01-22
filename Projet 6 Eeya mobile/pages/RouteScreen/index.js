import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { COLOR, PADDING, TEXT_SIZE } from "../../outils/const";
import Icon from 'react-native-vector-icons/MaterialIcons'; 

const RouteScreen = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handlePress = (button) => {
    setSelectedButton(button);
  };

  return (
    <View style={styles.contain}>
      <View style={styles.container}>
        <View>
          <Image
            source={require("./../../assets/traject.jpeg")}
            style={styles.image}
          />
        </View>
        <View>
          <Text style={styles.title}>
            Vous faites aussi le voyage retour ? Publiez votre trajet
            maintenant.
          </Text>
        </View>
        <View style={{ width: 300, justifyContent: 'space-between', rowGap: 24 }}>
          <TouchableOpacity
            style={[
              styles.button,
              selectedButton === 'ok' && styles.selectedButton
            ]}
            onPress={() => handlePress('ok')}
          >
            <Text
              style={[
                styles.buttonText,
                selectedButton === 'ok' && styles.selectedButtonText
              ]}
            >
              ok !
            </Text>
            <Icon name="arrow-forward-ios" size={20} color={selectedButton === 'ok' ? "#29abe2" : "#6a9198"} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              selectedButton === 'no' && styles.selectedButton
            ]}
            onPress={() => handlePress('no')}
          >
            <Text
              style={[
                styles.buttonText,
                selectedButton === 'no' && styles.selectedButtonText
              ]}
            >
              Non merci !
            </Text>
            <Icon name="arrow-forward-ios" size={20} color={selectedButton === 'no' ? "#29abe2" : "#6a9198"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    rowGap: 24,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 30,
  },
  title: {
    fontSize: TEXT_SIZE.first,
    fontFamily: 'Poppins_600SemiBold',
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: COLOR.grayColor,
    padding: 15,
    width: '100%',
  },
  buttonText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 18,
    textTransform: 'capitalize',
    color: COLOR.lessBlueColor
  },
  selectedButton: {
    transform: [{ scale: 1.1 }],
  },
  selectedButtonText: {
    color: '#29abe2',
    fontFamily:'Poppins_700Bold',
  },
});

export default RouteScreen;
