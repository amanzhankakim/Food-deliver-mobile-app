import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";

export const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This Settings Screen is not finished.</Text>
      <Text>It will be ready soon :)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9999",
  },
});
