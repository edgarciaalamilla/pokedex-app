import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import TypeDetails from "./TypeDetails";

const ResultDetails = ({ name, id, sprite }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.spriteStyle} source={{ uri: sprite }} />

      <Text style={styles.idStyle}>#{id}</Text>
      <Text style={styles.nameStyle}>{name.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
  spriteStyle: {
    height: 200,
    width: 200,
    borderColor: "black",
    borderWidth: 5,
    borderRadius: 15,
  },
  idStyle: {
    fontSize: 24,
    marginVertical: 15,
  },
  nameStyle: {
    fontWeight: "bold",
    fontSize: 24,
    alignSelf: "center",
  },
});

export default ResultDetails;
