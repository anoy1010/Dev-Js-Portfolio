import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLOR } from "../../../outils/const";

export const Counter = () => {
  const [count, setCount] = useState(0); // État local pour le compteur, valeur par défaut à 0

  const incrementCount = () => {
    setCount(count + 1); // Augmenter le compteur de 1
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1); // Diminuer le compteur de 1 seulement si count est supérieur à 0
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={decrementCount}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.count}>{count}</Text>
      <TouchableOpacity style={styles.button} onPress={incrementCount}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 100,
    borderColor:COLOR.orangeColor,
    borderWidth:3,
    marginHorizontal: 10,
  },
  buttonText: {
    color: COLOR.orangeColor,
    fontSize: 24,
    fontWeight: "bold",
  },
  count: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
