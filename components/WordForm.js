import React, { useState } from "react";
import { View, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import styles from "../Styles/WordFormStyle";
import Content from "../components/Content";

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
  
  const [hideSearch, setHideSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };
  const [definitions, setDefinitions] = useState([]);

  const handleSubmit = async () => {
    setHideSearch(true)
    const definitions = `${apiURL}/${searchQuery}/definitions`;
    const synonyms = `${apiURL}/${searchQuery}/synonyms`;
    const examples = `${apiURL}/${searchQuery}/examples`;
    const pronunciation = `${apiURL}/${searchQuery}/pronunciation`;

    const responseDefinitions = await fetch(definitions, options);
    const responseSynonyms = await fetch(synonyms, options);
    const responseExamples = await fetch(examples, options);
    const responsePronunciation = await fetch(pronunciation, options);

    const resultDefinitions = await responseDefinitions.json();
    const resultSynonyms = await responseSynonyms.json();
    const resultExamples = await responseExamples.json();
    const resultPronunciation = await responsePronunciation.json();

    setDefinitions(resultDefinitions.definitions);

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
      <View style={styles.inputContainer}>
        {!hideSearch && <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} onSubmitEditing={handleSubmit} selectionColor={"blue"} />}
        {hideSearch && <Text style={styles.searchWord}>You searched {searchQuery} ... </Text>}
      </View>
      {definitions.length > 0 && <Content data={definitions} titleText={"Definition:"} title={"Definitions"} />}
    </View>
  );
}

export default WordForm;
