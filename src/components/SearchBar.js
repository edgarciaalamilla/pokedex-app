import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SearchBar = ({ pokemon, onQueryUpdate, onQuerySubmit }) => {
  return (
    <View style={styles.container}>
      <FontAwesome name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        autoCorrect={false}
        placeholder="Search for a Pokémon"
        value={pokemon}
        onChangeText={onQueryUpdate}
        onEndEditing={onQuerySubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,

    margin: 15,

    backgroundColor: "#F0EEEE",
    borderRadius: 5,

    flexDirection: "row",
  },

  iconStyle: {
    fontSize: 30,
    color: "black",
    alignSelf: "center",

    marginHorizontal: 15,
  },
  inputStyle: {
    fontSize: 24,
    flex: 1,
  },
});

export default SearchBar;
