import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Content = ({ data, titleText, title}) => {
  console.log(data);
  return (
    <View style={styles.boxContainer}>
      <Text style={styles.titleContent}>{title}</Text>
      <View style={styles.contentTextContainer}>
        {/* <Text style={styles.textBold}>{titleText}</Text> */}
        {/* <Text style={styles.textInfo}> The text is here and here and here and here and here and here and here and here </Text> */}
        {/* {data.map((data) => (
          <Text key={index} style={styles.textInfo}>
            {data}
          </Text>
        ))} */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    // flex: 1,
    backgroundColor: "rgba(255, 255,255, 0.7)", // Slightly transparent background
    margin: 20, // Add padding for better appearance
    minHeight: 100, // Minimum height of 100px
    borderRadius: 3,
    borderColor: "white",
    borderWidth: 3,
    borderRadius: 15,
    borderColor: "rgba(255, 255,255, 0.5)",
  },

  titleContent: {
    textAlign: "center",
    fontFamily: "Inter-Black",
    fontSize: 13,
    marginTop: 3,
  },
  contentTextContainer: {
    flexDirection: "row",
    margin: 5,
  },
  textBold: {
    fontFamily: "Roboto-Bold",
    marginRight: 15,
  },

  textInfo: {
    flexWrap: "wrap",
    maxWidth: "98%",
    marginLeft: 4,
  },
});

export default Content;
