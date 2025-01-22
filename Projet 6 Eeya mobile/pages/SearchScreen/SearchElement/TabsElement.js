import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import All from "./All";
import Covoiturage from "./Covoiturage";
import Bus from "./Bus";
import { COLOR, PADDING } from "../../../outils/const";

const routes = [
  { key: "all", title: "All", component: All, number: "1" },
  {
    key: "covoiturage",
    title: "Covoiturage",
    component: Covoiturage,
    icon: "car",
    number: "1",
  },
  {
    key: "bus",
    title: "Bus",
    component: Bus,
    icon: "bus",
    number: "-",
  },
];

const TabsElement = () => {
  const [index, setIndex] = React.useState(0);

  const renderScene = SceneMap({
    all: All,
    covoiturage: Covoiturage,
    bus: Bus,
  });

  const renderTabBar = (props) => {
    return (
      <TabBar
      
        {...props}
        indicatorStyle={{ backgroundColor: COLOR.lessGreenColor }} // Change indicator color to white
        style={{ backgroundColor: "white" }}
       
        getLabelText={({ route }) => (<Text>{route.number}</Text>)}
        renderLabel={({ route, focused }) => (
          <View style={{justifyContent:"center", alignItems:"center"}}>
          <Text style={{ color: COLOR.lessGreenColor, margin: 8 }}>
            {route.title}
          </Text>
          <View style={{flexDirection:"row", columnGap:8}}>
          <FontAwesome
            name={route.icon}
            color={COLOR.lessGreenColor}
            fontSize={32}
          />
          <Text style={{ color: COLOR.lessGreenColor, flexDirection:"row", columnGap:8}}>
            {route.number}
          </Text>
          </View>
          
          </View>
        )}
       
        // Change tab bar background color to pink
      />
    );
  };

  return (
    <View
      style={{
        width: "100%",
        height: 500,
      }}
    >
      <TabView
        style={Styles.Tab}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        initialLayout={{ width: Dimensions.get("window").width }}
        indicatorStyle={{ backgroundColor: "black", height: 3 }}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  Tab: {
    
  },
});

export default TabsElement;
