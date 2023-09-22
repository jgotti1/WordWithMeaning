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
  const [rhymesData, setRhymesData] = useState([]);
  const [prounciation, setProunciation] = useState([]);
  const [definitions, setDefinitions] = useState([]);
  const [synonymData, setSynonymData] = useState([]);
  const [hideSearch, setHideSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [syllablesData, setSyllablesData] = useState("");

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
    const examplesURL = `${apiURL}/${searchQuery}/examples`;
    const responseExamples = await fetch(examplesURL, options);
    const resultExamples = await responseExamples.json();

    // syllables
    const syllablesURL = `${apiURL}/${searchQuery}/syllables`;
    const responseSyllables = await fetch(syllablesURL, options);
    const resultSyllables = await responseSyllables.json();

    // syllables
    const rhymesURL = `${apiURL}/${searchQuery}/rhymes`;
    const responseRhymes = await fetch(rhymesURL, options);
    const resultRhymes = await responseRhymes.json();

    if (resultDefinitions.message === "word not found" && !hideSearch) {
      setHideSearch(false);
      Alert.alert(`The word searched ${searchQuery} is not a valid word, please try again`);
      setSearchQuery("");
    } else {
      setDefinitions(resultDefinitions.definitions);
      setProunciation(resultPronunciation.pronunciation.all);
      setSynonymData(resultSynonym);
      setSyllablesData(resultSyllables.syllables.count);
      setRhymesData(resultRhymes.rhymes.all);
      setExampleData(resultExamples);
      setHideSearch(true);
    }
  };
  console.log(rhymesData)
  console.log(typeof rhymesData)
  console.log(typeof definitions)
  return (
    <View>
      {hideSearch && <Text style={styles.searchWord}>You searched {searchQuery} ... </Text>}
      {hideSearch && <Reset setHideSearch={setHideSearch} setSearchQuery={setSearchQuery} />}
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
          {hideSearch && prounciation && <Content data={prounciation} dataType={"prounciation"} title={"Prounciation"} syllable={syllablesData} />}
          {hideSearch && <Content data={definitions} dataType={"definition"} title={"Definition(s)"} setDefinitions={setDefinitions} />}
          {hideSearch && exampleData.examples.length > 0 && <Content data={exampleData.examples} dataType={"examples"} title={"Example Usage"} />}
          {hideSearch && synonymData.synonyms.length > 0 && <Content data={synonymData.synonyms} dataType={"synonyms"} title={"Synonyms"} />}
          {hideSearch && rhymesData.length > 0 && <Content data={rhymesData} dataType={"rhymes"} title={"Rhymes With"} />}
          {hideSearch && <View style={styles.bottom}></View>}
        </View>
      </ScrollView>
    </View>
  );
}

export default WordForm;
