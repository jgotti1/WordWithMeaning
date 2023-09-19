import { useState } from "react";
import { View, StyleSheet, Text, FlatList, ScrollView } from "react-native";
import Reset from "./Reset";

const Content = ({ data, dataType, title }) => {
  const renderDefinitionItem = ({ item, index }) => (
    <Text key={index} style={styles.textInfo}>
      <Text style={styles.textBold}>{index + 1}:</Text> {item.definition}
    </Text>
  );
  
  return (
    <View>
      <View style={styles.boxContainer}>
        <Text style={styles.titleContent}>{title}</Text>
        <View style={styles.contentTextContainer}>
          {/* {dataType === "definition" && <FlatList data={data} renderItem={renderDefinitionItem} keyExtractor={(Item, index) => index.toString()} />} */}
          {dataType === "definition" && (
            <View>
              {data.map((item, index) => (
                <View key={index}>{renderDefinitionItem({ item, index })}</View>
              ))}
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    // flex: 1,
    backgroundColor: "rgba(255, 255,255, 0.7)",
    marginTop: 20,
    margin: 20, 
    minHeight: 100, 
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
