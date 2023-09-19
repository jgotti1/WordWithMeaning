import { useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

const Content = ({ data, dataType, title }) => {
  const renderDefinitionItem = ({ item, index }) => (
    <Text key={index} style={styles.textInfo}>
      <Text style={styles.textBold}>{index + 1}:</Text> {item.definition}
    </Text>
  );

  // console.log(data);
  return (
    <View style={styles.boxContainer}>
      <Text style={styles.titleContent}>{title}</Text>
      <View style={styles.contentTextContainer}>
        {dataType === "definition" && <FlatList data={data} renderItem={renderDefinitionItem} keyExtractor={(Item, index) => index.toString()} />}
        {dataType != "definition" && <Text> Hello it is time for bed</Text>}
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
    marginTop: 3.8,
    marginBottom: 3,
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
    marginBottom: 10,
  },
});

export default Content;
