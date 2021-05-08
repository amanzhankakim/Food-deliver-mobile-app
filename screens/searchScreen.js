import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import PassInput from "../items/passInput";
import Res from "../items/restaurant";

export const SearchScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <PassInput iconName='search' placeHolder='Search...' />
      </View>
      <View style={styles.resStack}>
        <Res
          onPress={() => navigation.navigate("Menu")}
          name='KFC'
          adress='Almaty city'
          style={styles.res}
        />
        <Res
          onPress={() => navigation.navigate("Menu")}
          name='Burger King'
          adress='Nursultan city'
          style={styles.res}
        />
        <Res
          onPress={() => navigation.navigate("Menu")}
          name='Gippo'
          adress='Atyrau city'
          style={styles.res}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    backgroundColor: "white",
  },
  res: {
    marginBottom: 20,
  },
  search: {
    flex: 0.5,
    justifyContent: "center",
  },
  resStack: {
    flex: 2,
  },
});
