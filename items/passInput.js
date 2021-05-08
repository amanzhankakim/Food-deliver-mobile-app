import React from "react";
import { TextInput, View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

const PassInput = ({ style, placeHolder, iconName, isSecure, onChange }) => {
  const styles = StyleSheet.create({
    pass: {
      height: 50,
      width: "80%",
      paddingLeft: "3%",
    },
    box: {
      display: "flex",
      flexDirection: "row",
      borderRadius: 10,
      backgroundColor: "#EAEBF6",
    },
    icon: {
      alignItems: "center",
      justifyContent: "center",
      paddingLeft: "1%",
    },

    line: {
      height: 25,
      borderColor: "gray",
      borderRightWidth: 1,
    },

    line2: {
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return (
    <View style={style}>
      <View style={styles.box}>
        <View style={styles.icon}>
          <Icon name={iconName} size={35} color='gray' />
        </View>

        <View style={styles.line2}>
          <View style={styles.line}></View>
        </View>

        <TextInput
          placeholder={placeHolder}
          placeholderTextColor='gray'
          style={styles.pass}
          secureTextEntry={isSecure}
          onChangeText={onChange}
        />
      </View>
    </View>
  );
};

export default PassInput;
