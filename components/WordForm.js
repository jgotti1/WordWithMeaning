import React, { useState } from "react";
import { View, Text, Alert, ScrollView } from "react-native";
import { Searchbar } from "react-native-paper";
import styles from "../Styles/WordFormStyle";
import Content from "../components/Content";
import Reset from "./Reset"

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

  const [definitions, setDefinitions] = useState([]);
  const [hideSearch, setHideSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSubmit = async () => {
    const definitionsURL = `${apiURL}/${searchQuery}/definitions`;
    const responseDefinitions = await fetch(definitionsURL, options);
    const resultDefinitions = await responseDefinitions.json();
    console.log(resultDefinitions.definitions);

    if (resultDefinitions.message === "word not found" && !hideSearch) {
      console.log("ERROR x" + definitions);
      setHideSearch(false);
      Alert.alert(`The word searched ${searchQuery} does not exist, please try again`);
      setSearchQuery("");
    } else {
      setDefinitions(resultDefinitions.definitions);
      setHideSearch(true);
      console.log("hey");
    }

    // const definitions = `${apiURL}/${searchQuery}/definitions`;
    const synonyms = `${apiURL}/${searchQuery}/synonyms`;
    const examples = `${apiURL}/${searchQuery}/examples`;
    const pronunciation = `${apiURL}/${searchQuery}/pronunciation`;

    // const responseDefinitions = await fetch(definitions, options);
    const responseSynonyms = await fetch(synonyms, options);
    const responseExamples = await fetch(examples, options);
    const responsePronunciation = await fetch(pronunciation, options);

    // const resultDefinitions = await responseDefinitions.json();
    const resultSynonyms = await responseSynonyms.json();
    const resultExamples = await responseExamples.json();
    const resultPronunciation = await responsePronunciation.json();

    // setDefinitions(resultDefinitions.definitions);

    // console.log("Prounciation " + resultPronunciation.pronunciation.all);

    // for (i = 0; i < resultDefinitions.definitions.length; i++) {
    //   console.log("Definetion " + (i + 1) + " " + resultDefinitions.definitions[i].definition);
    // }

    // for (i = 0; i < resultSynonyms.synonyms.length; i++) {
    //   console.log("Synonymon " + (i + 1) + " " + resultSynonyms.synonyms[i]);
    // }

    // for (i = 0; i < resultExamples.examples.length; i++) {
    //   console.log("example " + (i + 1) + " " + resultExamples.examples[i]);
    // }
    // setSearchQuery("");
  };
  return (
    <View>
      {hideSearch && <Text style={styles.searchWord}>You searched {searchQuery} ... </Text>}
      {hideSearch && <Reset />}
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
          {hideSearch && <Content data={definitions} dataType={"definition"} title={"Definition(s)"} />}
          {hideSearch && <Content data={definitions} dataType={"definition"} title={"Definition(s)"} />}
        </View>
      </ScrollView>
    </View>
  );
}

export default WordForm;
