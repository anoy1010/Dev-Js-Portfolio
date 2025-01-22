import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "../pages/tabs";
import HomeScreen from "../pages/HomeScreen";
import CarouselComponent from "../pages/HomeScreen/carouselcomponent";
import Connexion from "../pages/ConnexionScreen";
import AntDesign from "react-native-vector-icons/AntDesign";
import Registration from "../pages/ConnexionScreen/RegistrationScreen";
import LoginScreen from "../pages/ConnexionScreen/LoginScreen";
import { COLOR } from "../outils/const";
import RMail from "../pages/ConnexionScreen/RegistrationScreen/R_mail";
import RNumber from "../pages/ConnexionScreen/RegistrationScreen/R_number";
import FormRegister from "../pages/ConnexionScreen/RegistrationScreen/FormRegister";
import FormRegister2 from "../pages/ConnexionScreen/RegistrationScreen/FormRegister2";
import FormRegister3 from "../pages/ConnexionScreen/RegistrationScreen/FormRegister3";
import FormRegister4 from "../pages/ConnexionScreen/RegistrationScreen/FormRegister4";
import SearchElement from "../pages/SearchScreen/SearchElement";

const Stack = createNativeStackNavigator();

const Routes = () => {
  const CloseIcon = () => {
    const navigation = useNavigation();

    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="close" size={32} color={COLOR.orangeColor} />
      </TouchableOpacity>
    );
  };

  const BackIcon = () => {
    const navigation = useNavigation();

    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={32} color={COLOR.orangeColor} />
      </TouchableOpacity>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Bottoms"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Bottoms" component={BottomTabs} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Carousel" component={CarouselComponent} />
        <Stack.Screen name="ConnexionScreen" component={Connexion} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SearchElement" component={SearchElement} />
        <Stack.Screen
          name="StepRegister2"
          component={FormRegister2}
          options={{
            headerShown: true,
            headerTitle: "",
            headerLeft: () => <BackIcon />,
          }}
        />
        <Stack.Screen
          name="StepRegister3"
          component={FormRegister3}
          options={{
            headerShown: true,
            headerTitle: "",
            headerLeft: () => <BackIcon />,
          }}
        />
        <Stack.Screen
          name="StepRegister4"
          component={FormRegister4}
          options={{
            headerShown: true,
            headerTitle: "",
            headerLeft: () => <BackIcon />,
          }}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{
            headerShown: true,
            headerTitle: "",
            headerLeft: () => <CloseIcon />,
          }}
        />
        <Stack.Screen
          name="RegisterMail"
          component={RMail}
          options={{
            headerShown: true,
            headerTitle: "",
            headerLeft: () => <BackIcon />,
          }}
        />
        <Stack.Screen
          name="RegisterNumber"
          component={RNumber}
          options={{
            headerShown: true,
            headerTitle: "",
            headerLeft: () => <BackIcon />,
          }}
        />
        <Stack.Screen
          name="Formulaire"
          component={FormRegister}
          options={{
            headerShown: true,
            headerTitle: "",
            headerLeft: () => <BackIcon />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
