import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import searchStyles from "../style"; // Assurez-vous que ce chemin est correct
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "react-native-modal-datetime-picker";

const Search = () => {
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onNextPage = () => {
    navigation.navigate('SearchElement'); // Remplacez 'NextScreen' par l'écran approprié
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <View style={searchStyles.container}>
      <View>
        <Text style={searchStyles.title}>
          Un vaste choix de trajets à petit prix
        </Text>
      </View>
      <ImageBackground
        source={require("./../../assets/im2.jpeg")}
        style={searchStyles.imageBackground}
      ></ImageBackground>
      <View style={searchStyles.inputContainer}>
        <View
          style={{
            flex: 1,
            width: "100%",
            paddingBottom: 12,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            alignItems: "center",
          }}
        >
          <SafeAreaView style={searchStyles.fieldContain}>
            <FontAwesome name="circle-o" color="black" size={18} />
            <TextInput
              style={searchStyles.input}
              placeholder="Départ"
              keyboardType="default"
              color="black"
              placeholderTextColor="black"
            />
          </SafeAreaView>
          <SafeAreaView style={searchStyles.fieldContain}>
            <FontAwesome
              name="circle-o"
              color="black"
              size={18}
              style={searchStyles.icon}
            />
            <TextInput
              style={searchStyles.input}
              placeholder="Destination"
              keyboardType="default"
              color="black"
              placeholderTextColor="black"
            />
          </SafeAreaView>
          <SafeAreaView style={searchStyles.fieldContain}>
            <FontAwesome
              name="calendar"
              color="black"
              size={24}
              style={searchStyles.icon}
            />
            <TouchableOpacity
              onPress={showDatepicker}
              style={searchStyles.dateButton}
            >
              <Text style={searchStyles.dateText}>{date.toDateString()}</Text>
            </TouchableOpacity>
          </SafeAreaView>
          {show && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onChange}
            />
          )}
          <SafeAreaView style={searchStyles.fieldContain}>
            <MaterialCommunityIcons
              name="account-group"
              color="black"
              size={32}
              style={searchStyles.icon}
            />
            <TextInput
              style={searchStyles.input}
              placeholder="Nombre de places"
              keyboardType="numeric"
              placeholderTextColor="black"
            />
          </SafeAreaView>
          <TouchableOpacity style={searchStyles.buttonSearch} onPress={onNextPage}>
            <Text style={searchStyles.buttonText}>Rechercher</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Search;
