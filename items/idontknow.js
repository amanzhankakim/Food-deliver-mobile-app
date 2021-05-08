import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const Bottomtext = ({ text, buttontitle, onPress }) => {
  return (
    <View style={styles.container}>
      <Text> {text} </Text>
      <Button title={buttontitle} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Bottomtext;
