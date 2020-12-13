import React from "react";
import { Text, View, StyleSheet } from "react-native";

const StatDetails = ({ stats }) => {
  return (
    <View>
      <Text style={styles.statStyle}>HP: {stats[0].base_stat}</Text>
      <Text style={styles.statStyle}>ATK: {stats[1].base_stat}</Text>
      <Text style={styles.statStyle}>DEF: {stats[2].base_stat}</Text>
      <Text style={styles.statStyle}>SP. ATK: {stats[3].base_stat}</Text>
      <Text style={styles.statStyle}>SP. DEF: {stats[4].base_stat}</Text>
      <Text style={styles.statStyle}>SPE: {stats[5].base_stat}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  statStyle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default StatDetails;
