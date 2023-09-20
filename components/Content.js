import { View, StyleSheet, Text } from "react-native";

const Content = ({ data, dataType, title }) => {
  const renderDefinitionItem = ({ item, index }) => (
    <Text key={index} style={styles.textInfo}>
      <Text style={styles.textBold}>{index + 1}</Text>: {item.definition}
    </Text>
  );

  const renderSynonyms = ({ item, index }) => (
    <Text key={index} style={styles.textInfo}>
      <Text style={styles.textBold}>{index + 1}:</Text> {item}
    </Text>
  );

    const renderExamples = ({ item, index }) => (
      <Text key={index} style={styles.textInfo}>
        <Text style={styles.textBold}>{index + 1}:</Text> {item}
      </Text>
    );
  
  return (
    <View>
      <View style={styles.boxContainer}>
        <Text style={styles.titleContent}>{title}</Text>
        <View style={styles.contentTextContainer}>
          {/* definition */}
          {dataType === "definition" && (
            <View style={styles.textExContainer}>
              {data.map((item, index) => (
                <View key={index}>{renderDefinitionItem({ item, index })}</View>
              ))}
            </View>
          )}
          {/* pronunciation */}
          {dataType === "prounciation" && (
            <View style={styles.textProContainer}>
              <Text style={styles.textPro}> {data}</Text>
            </View>
          )}
          {/* Synonyms */}
          {dataType === "synonyms" && (
            <View style={styles.textSynContainer}>
              {data.map((item, index) => (
                <View key={index}>{renderSynonyms({ item, index })}</View>
              ))}
            </View>
          )}
          {/* Examples */}
          {dataType === "examples" && (
            <View style={styles.textExContainer}>
              {data.map((item, index) => (
                <View key={index}>{renderSynonyms({ item, index })}</View>
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
    backgroundColor: "rgba(255, 255,255, 0.7)",
    paddingBottom: 30,

    marginBottom: 20,
    minHeight: 40,
    borderRadius: 3,
    borderColor: "white",
    borderWidth: 3,
    borderRadius: 15,
    borderColor: "rgba(255, 255,255, 0.5)",
  },

  titleContent: {
    textAlign: "center",
    fontFamily: "Inter-Black",
    fontSize: 18,
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
    marginBottom: 14,
  },
  textProContainer: {
    flex: 1,
  },
  textExContainer: {
    flex: 1,
    marginTop: 15,
  },
  textSynContainer: {
    flex: 1,
    marginTop: 15,
  },
  textPro: {
    fontSize: 36,
    textAlign: "center",
  },
});

export default Content;
