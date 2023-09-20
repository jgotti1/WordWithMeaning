import React, { useState } from "react";
import { View, Text, Alert, ScrollView } from "react-native";
import { Searchbar } from "react-native-paper";
import styles from "../Styles/WordFormStyle";
import Content from "../components/Content";
import Reset from "./Reset";

function WordForm() {
  const apiURL = process.env.EXPO_PUBLIC_API_URL;
  const apiKEY = process.env.EXPO_PUBLIC_API_KEY;
  const apiHOST = process.env.EXPO_PUBLIC_API_HOST;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKEY,
      "X-RapidAPI-Host": apiHOST,
    },
  };
  const [exampleData, setExampleData] = useState([]);
  const [prounciation, setProunciation] = useState([]);
  const [definitions, setDefinitions] = useState([]);
  const [synonymData, setSynonymData] = useState([]);
  const [hideSearch, setHideSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSubmit = async () => {
    if (!searchQuery) {
      Alert.alert("Please enter a word to search.");
      return; // Exit the function early if searchQuery is undefined
    }

    // definition logic
    const definitionsURL = `${apiURL}/${searchQuery}/definitions`;
    const responseDefinitions = await fetch(definitionsURL, options);
    const resultDefinitions = await responseDefinitions.json();

    // pronunciation logic
    const pronunciationURL = `${apiURL}/${searchQuery}/pronunciation`;
    const responsePronunciation = await fetch(pronunciationURL, options);
    const resultPronunciation = await responsePronunciation.json();

    // synonymslogic
    const synonymsURL = `${apiURL}/${searchQuery}/synonyms`;
    const responseSynonyms = await fetch(synonymsURL, options);
    const resultSynonym = await responseSynonyms.json();

    // usage examples
    const examples = `${apiURL}/${searchQuery}/examples`;
    const responseExamples = await fetch(examples, options);
    const resultExamples = await responseExamples.json();

    if (resultDefinitions.message === "word not found" && !hideSearch) {
      console.log("ERROR x" + definitions);
      setHideSearch(false);
      Alert.alert(`The word searched ${searchQuery} is not a valid word, please try again`);
      setSearchQuery("");
    } else {
      setDefinitions(resultDefinitions.definitions);
      setProunciation(resultPronunciation.pronunciation.all);
      setSynonymData(resultSynonym);
      setExampleData(resultExamples);
      setHideSearch(true);
      console.log("hey");
    }
    
  };
  console.log(exampleData);
  return (
    <View>
      {hideSearch && <Text style={styles.searchWord}>You searched {searchQuery} ... </Text>}
      {hideSearch && <Reset setSearchQuery={setSearchQuery} setDefinitions={setDefinitions} />}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            {!hideSearch && (
              <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                onSubmitEditing={handleSubmit}
                selectionColor={"blue"}
                autoCorrect={false}
                spellCheck={false}
              />
            )}
          </View>
          {hideSearch && prounciation && <Content data={prounciation} dataType={"prounciation"} title={"Prounciation"} />}
          {hideSearch && <Content data={definitions} dataType={"definition"} title={"Definition(s)"} />}
          {hideSearch && exampleData.examples.length > 0 && <Content data={exampleData.examples} dataType={"examples"} title={"Example Usage"} />}
          {hideSearch && synonymData.synonyms.length > 0 && <Content data={synonymData.synonyms} dataType={"synonyms"} title={"Synonyms"} />}
        </View>
      </ScrollView>
    </View>
  );
}

export default WordForm;
