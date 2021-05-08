import React from "react";
import {
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import { SquareButton } from "./buttons";
import { ImageContainer } from "./imageContainer";

const Res = ({ style, onPress, name, adress }) => {
  return (
    <View style={style}>
      <TouchableOpacity style={styles.ContainerStyle} onPress={onPress}>
        <View style={styles.image}>
          <ImageContainer size={40} />
        </View>
        <View style={styles.content}>
          <View style={styles.name}>
            <Text style={styles.nameText}>{name}</Text>
          </View>
          <View style={styles.adress}>
            <Text style={styles.adressText}>{adress}</Text>
          </View>
        </View>
        <View style={styles.button}>
          <SquareButton size={30} iconName='plus' />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ContainerStyle: {
    backgroundColor: "white",
    height: 80,
    width: 350,
    borderRadius: 10,
    borderColor: "grey",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    flexDirection: "row",
  },

  button: {
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    height: "100%",
    flex: 3,
  },
  image: {
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  adress: {
    width: "100%",
    flex: 11,
  },

  name: {
    width: "100%",
    justifyContent: "flex-end",
    flex: 9,
  },

  nameText: {
    fontSize: 20,
  },

  adressText: {
    fontSize: 13,
    color: "grey",
  },
});

export default Res;
