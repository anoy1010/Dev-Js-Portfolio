import { View, Text } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { COLOR } from '../../../outils/const';
import ReserveRide from './ReserveRide';
import NoReserveRide from './NoReserveRide';

const Tab = createMaterialTopTabNavigator();

const PublishRide = () => {
  return (
    <Tab.Navigator
      style={{ paddingTop: 24 }}
      initialRouteName="RideReserve"
      screenOptions={({ route }) => ({
        tabBarLabel: ({ focused }) => {
          const backgroundColor = focused ? "#17A680" : 'white';
          const textColor = focused ? 'white' : 'black';
          const borderColor = focused ? 'transparent' : 'black';
          return (
            <View
              style={{
                backgroundColor,
                borderColor,
                borderWidth: 1,
                borderRadius: 10,
                paddingHorizontal: 15,
                paddingVertical: 15,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={{ color: textColor, fontSize: 12, fontFamily: 'Poppins_600SemiBold' }}>
                {route.name === 'RideReserve' ? 'Trajets réservés' : 'Trajets non-réservés'}
              </Text>
            </View>
          );
        },
        tabBarStyle: {
          backgroundColor: 'white',
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent',
        },
      })}
    >
      <Tab.Screen name="RideReserve" component={ReserveRide} />
      <Tab.Screen name="RideNoReserve" component={NoReserveRide} />
    </Tab.Navigator>
  );
}

export default PublishRide;
