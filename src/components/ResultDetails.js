import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import TypeDetails from "./TypeDetails";

const ResultDetails = ({ name, id, sprite, typing, stats }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.spriteStyle} source={{ uri: sprite }} />

      <Text style={styles.idStyle}>#{id}</Text>
      <Text style={styles.nameStyle}>{name.toUpperCase()}</Text>
      <TypeDetails type={typing} />
      {/* <StatDetails stats={stats} /> */}
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
  },
  idStyle: {
    fontSize: 24,
  },
  nameStyle: {
    fontWeight: "bold",
    fontSize: 24,
  },
  typeStyle: {},
});

export default ResultDetails;
