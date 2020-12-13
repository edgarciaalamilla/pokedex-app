import React from "react";
import { Text, View, StyleSheet } from "react-native";

const typeColor = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

const Type = ({ displayType }) => {
  return (
    <View
      style={{
        backgroundColor: `${typeColor[displayType]}`,
        height: 20,
        width: 60,
        borderRadius: 5,
      }}
    >
      <Text style={styles.textStyle}>{displayType}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "center",
    color: "white",
  },
});

export default Type;
