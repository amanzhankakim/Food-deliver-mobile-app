import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

export const ButtonS = ({ onPress, style, text }) => {
  const styles = StyleSheet.create({
    btnContainerStyle: {
      height: 50,
      width: 340,
      borderRadius: 10,
      borderColor: "grey",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#EAEBF6",
    },
    text: {
      fontSize: 20,
    },
  });

  return (
    <View style={style}>
      <TouchableOpacity onPress={onPress} style={styles.btnContainerStyle}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};
