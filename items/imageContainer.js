import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

export const ImageContainer = ({ onPress, iconName, style, size }) => {
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
      <View style={styles.btnContainerStyle}>
        <Image
          style={{ width: 40, height: 40 }}
          source={{
            uri:
              "https://logos-world.net/wp-content/uploads/2020/04/KFC-Logo.png",
          }}
        />
      </View>
    </View>
  );
};
