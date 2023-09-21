import React, { useEffect, useState } from "react";
import { Image, Animated, Easing, View } from "react-native";

const CenterImage= () => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    const fadeInAnimation = Animated.timing(fadeAnim, {
      toValue: 0.9,
      duration: 3000, // Adjust the duration as needed
      easing: Easing.linear,
      useNativeDriver: true, // Add this line for better performance
    });

    const fadeOutAnimation = Animated.timing(fadeAnim, {
      toValue: 0.43,
      duration: 1500, // Adjust the duration as needed
      easing: Easing.linear,
      useNativeDriver: true, // Add this line for better performance
    });

    // Combine the animations into a sequence
    const sequence = Animated.sequence([fadeInAnimation, fadeOutAnimation]);

    // Start the sequence
    sequence.start();
  }, []);

  return (
    <View style={{ alignItems: "center", justifyContent: "center", marginTop: 80 }}>
      <Animated.Image
        source={require("../assets/images/whats.png")}
        style={{
          width: 400,
          height: 400,
          resizeMode: "contain",
          opacity: fadeAnim, // Apply the opacity from the Animated.Value
          borderRadius: 60,
          borderColor: "white",
          borderWidth: 2,
        }}
      />
    </View>
  );
};

export default CenterImage;
