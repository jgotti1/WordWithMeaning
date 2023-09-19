import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Reset = ({ onPress }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(true);
    // onPress(); // Call the provided onPress function to trigger a refresh
    console.log('refresh')
    
  };

  return (
    <TouchableOpacity style={[styles.button, isPressed && styles.buttonPressed]} onPress={handlePress}>
      <Text style={[styles.text, isPressed && styles.textPressed]}>Reset</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "darkblue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPressed: {
    backgroundColor: "darkblue",
  },
  text: {
    color: "darkblue",
    fontWeight: "bold",
  },
  textPressed: {
    color: "white",
  },
});

export default Reset;
