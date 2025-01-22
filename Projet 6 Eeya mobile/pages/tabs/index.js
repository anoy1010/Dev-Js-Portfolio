import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Home from "../HomeScreen";
import Search from "../SearchScreen";
import Publish from "../PublishScreen";
import RouteScreen from "../RouteScreen";
import Message from "../MessageScreen";
import Profiles from "../ProfileScreen";
import { COLOR } from "../../outils/const";
import SearchElement from "../SearchScreen/SearchElement";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BookRide from "../SearchScreen/BookRide";
import AntDesign from "react-native-vector-icons/AntDesign";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Password from "../ProfileScreen/AccountScreen/Password";
import PaymentMethod from "../ProfileScreen/AccountScreen/PaymentMethod";
import Balance from "../ProfileScreen/AccountScreen/Balance";
import PublishRide from "../ProfileScreen/AccountScreen/PublishRide";
import BecomeDriver from "../ProfileScreen/AccountScreen/BecomeDriver";
import ConditionUse from "../ProfileScreen/AccountScreen/ConditionUse";
import Disconnect from "../ProfileScreen/AccountScreen/Disconnect";
import AddCar from "../ProfileScreen/AccountScreen/AddCar";
import Withdraw from "../ProfileScreen/AccountScreen/Withdraw";
import PublishStep1 from "../PublishScreen/PublishStep1";
import PublishStep2 from "../PublishScreen/PublishStep2";
import PublishStep3 from "../PublishScreen/PublishStep3";
import RouteStep1 from "../RouteScreen/RouteStep1";
import RouteStep2 from "../RouteScreen/RouteStep2";
import ReserveView from "../ProfileScreen/AccountScreen/ReserveView";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const RouteScreenStack = () => {
  const BackIcon = () => {
    const navigation = useNavigation();

    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={32} color={COLOR.orangeColor} />
      </TouchableOpacity>
    );
  };
  return (
    <Stack.Navigator>
      <Stack.Screen name="RouteStep1" component={RouteStep1} options={{
          headerShown: true,
          headerTitle: "Mes trajets réservés",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Poppins_600SemiBold",
            fontSize: 24,
            color: COLOR.orangeColor,
          },
          headerLeft: () => <BackIcon />,
        }} />
        <Stack.Screen name="RouteStep2" component={RouteStep2} options={{
          headerShown: true,
          headerTitle: "Mes trajets réservés",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Poppins_600SemiBold",
            fontSize: 24,
            color: COLOR.orangeColor,
          },
          headerLeft: () => <BackIcon />,
        }} />
    </Stack.Navigator>
  );
}

const SearchStack = () => {
  const BackIcon = () => {
    const navigation = useNavigation();

    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={32} color={COLOR.orangeColor} />
      </TouchableOpacity>
    );
  };
  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="SearchElement" component={SearchElement} />

      <Stack.Screen
        name="Book"
        component={BookRide}
        options={{
          headerShown: true,
          headerTitle: "Reserver un trajet",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Poppins_600SemiBold",
            fontSize: 24,
            color: COLOR.orangeColor,
          },
          headerLeft: () => <BackIcon />,
        }}
      />
    </Stack.Navigator>
  );
};

const PublishStack = () => {
  const BackIcon = () => {
    const navigation = useNavigation();

    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={32} color={COLOR.orangeColor} />
      </TouchableOpacity>
    );
  };
  return (
    <Stack.Navigator screenOptions={{
      tabBarActiveTintColor: "#4287f5",
      headerShown: false,
    }} initialRouteName="publier">
      <Stack.Screen name="Publier" component={Publish}  options={{
          headerShown: true,
          headerTitle: "Reserver un trajet",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Poppins_600SemiBold",
            fontSize: 24,
            color: COLOR.orangeColor,
          },
          headerLeft: () => <BackIcon />,
        }} />
      <Stack.Screen name="PublishStep1" component={PublishStep1}  options={{
          headerShown: true,
          headerTitle: "Publier un trajet",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Poppins_600SemiBold",
            fontSize: 24,
            color: COLOR.orangeColor,
          },
          headerLeft: () => <BackIcon />,
        }} />
        <Stack.Screen name="PublishStep2" component={PublishStep2}  options={{
          headerShown: true,
          headerTitle: "Publier un trajett",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Poppins_600SemiBold",
            fontSize: 24,
            color: COLOR.orangeColor,
          },
          headerLeft: () => <BackIcon />,
        }} />
        <Stack.Screen name="PublishStep3" component={PublishStep3}  options={{
          headerShown: true,
          headerTitle: "Publier un trajet",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Poppins_600SemiBold",
            fontSize: 24,
            color: COLOR.orangeColor,
          },
          headerLeft: () => <BackIcon />,
        }} />
    </Stack.Navigator>
  );
};

const SettingStack = () => {
  const BackIcon = () => {
    const navigation = useNavigation();

    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={32} color={COLOR.orangeColor} />
      </TouchableOpacity>
    );
  };
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Profile" component={Profiles} />
      <Stack.Screen name="Password" component={Password} />
      <Stack.Screen
        name="Withdraw"
        component={Withdraw}
        options={{
          headerShown: true,
          headerTitle: "Retirait de solde",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Poppins_600SemiBold",
            fontSize: 24,
            color: COLOR.orangeColor,
          },
          headerLeft: () => <BackIcon />,
        }}
      />

      <Stack.Screen
        name="Payment"
        component={PaymentMethod}
        options={{
          headerShown: true,
          headerTitle: "Mode de paiement",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Poppins_600SemiBold",
            fontSize: 24,
            color: COLOR.orangeColor,
          },
          headerLeft: () => <BackIcon />,
        }}
      />
      <Stack.Screen
        name="Balance"
        component={Balance}
        options={{
          headerShown: true,
          headerTitle: "Mon solde",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Poppins_600SemiBold",
            fontSize: 24,
            color: COLOR.orangeColor,
          },
          headerLeft: () => <BackIcon />,
        }}
      />
      <Stack.Screen
        name="ReserveView"
        component={ReserveView}
        options={{
          headerShown: true,
          headerTitle: "Trajets publiés",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Poppins_600SemiBold",
            fontSize: 24,
            color: COLOR.orangeColor,
          },
          headerLeft: () => <BackIcon />,
        }}
      />
      <Stack.Screen name="PublishRide" component={PublishRide} options={{
          headerShown: true,
          headerTitle: "Trajets publiés",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Poppins_600SemiBold",
            fontSize: 24,
            color: COLOR.orangeColor,
          },
          headerLeft: () => <BackIcon />,
        }}/>
      <Stack.Screen
        name="AddCar"
        component={AddCar}
        options={{
          headerShown: true,
          headerTitle: "Ajouter un vehicule",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Poppins_600SemiBold",
            fontSize: 24,
            color: COLOR.orangeColor,
          },
          headerLeft: () => <BackIcon />,
        }}
      />

      <Stack.Screen
        name="BecomeDriver"
        component={BecomeDriver}
        options={{
          headerShown: true,
          headerTitle: "Devenir chauffeur",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Poppins_600SemiBold",
            fontSize: 24,
            color: COLOR.lessGreenColor,
          },
          headerLeft: () => <BackIcon />,
        }}
      />

      <Stack.Screen name="ConditionUse" component={ConditionUse} />
      <Stack.Screen name="Disconnect" component={Disconnect} />

      <Stack.Screen
        name="Book"
        component={BookRide}
        options={{
          headerShown: true,
          headerTitle: "Reserver un trajet",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Poppins_600SemiBold",
            fontSize: 24,
            color: COLOR.orangeColor,
          },
          headerLeft: () => <BackIcon />,
        }}
      />
    </Stack.Navigator>
  );
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Publier"
      screenOptions={{
        tabBarActiveTintColor: "#4287f5",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarLabel: "Rechercher",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Publier"
        component={PublishStack}
        options={{
        // Afficher le titre de la page
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="add-circle-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Route"
        component={RouteScreenStack}
        options={{
          tabBarLabel: "Trajet",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="route" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarLabel: "message",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="message" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profiles"
        component={SettingStack}
        options={{
          tabBarLabel: "profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="account-circle" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
