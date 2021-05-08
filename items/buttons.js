import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

export const SquareButton = ({ onPress, iconName, style, size }) => {
  const styles = StyleSheet.create({
    btnContainerStyle: {
      height: size,
      width: size,
      borderRadius: size / 3,
      borderWidth: 2,
      borderColor: "grey",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <View style={style}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.btnContainerStyle}>
          <Icon name={iconName} size={size / 1.5} color='grey' />
        </View>
      </TouchableOpacity>
    </View>
  );
};
