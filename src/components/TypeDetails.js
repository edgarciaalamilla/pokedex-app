import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Type from "./Type";

const TypeDetails = ({ type }) => {
  return (
    <View style={styles.container}>
      <Type displayType={type[0].type.name} />
      {type.length == 2 ? <Type displayType={type[1].type.name} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 5,
    width: 130,
  },
});

export default TypeDetails;
