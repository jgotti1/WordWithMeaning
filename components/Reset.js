import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { NativeModules } from "react-native";

const Reset = ({setHideSearch, setSearchQuery }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(true);
    setHideSearch(false);
    setSearchQuery('')
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={[styles.button, isPressed && styles.buttonPressed]} onPress={handlePress}>
        <Text style={[styles.text, isPressed && styles.textPressed]}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(255, 255,255, 0.2)",
    borderWidth: 1,
    borderColor: "#e4e4e9",
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 40,
    marginTop: 10,
  },
  // buttonPressed: {
  //   backgroundColor: "#ececef",
  // },
  text: {
    color: "#f2f2f7",
    fontWeight: "bold",
  },
  textPressed: {
    color: "white",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Reset;
