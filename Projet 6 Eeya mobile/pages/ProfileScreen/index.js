import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Account from "./AccountScreen";
import About from "./AboutScreen";
import { COLOR } from "../../outils/const";

const Tab = createMaterialTopTabNavigator();

const Profiles = () => {
  return (
    <Tab.Navigator
      style={{ paddingTop: 24, }}
      initialRouteName="Account"
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 16,
          color: COLOR.lessGreenColor,
          fontFamily:'Poppins_500Medium',
          textTransform:'capitalize',
        },
        tabBarIndicatorStyle: {
          backgroundColor: COLOR.lessGreenColor
        },
      }}
    >
      <Tab.Screen name="A propos de vous" component={About} />
      <Tab.Screen name="Compte" component={Account} />
    </Tab.Navigator>
  );
};

export default Profiles;
