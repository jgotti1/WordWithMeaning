import React, { useState } from "react";
import { View, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import styles from "../Styles/WordFormStyle";

function WordForm() {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSubmit = (props) => {
    console.log(searchQuery);
    setSearchQuery("");
  };
  return (
    <View style={styles.inputContainer}>
      <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} onSubmitEditing={handleSubmit} selectionColor={"blue"}  />
    </View>
  );
}

export default WordForm;
