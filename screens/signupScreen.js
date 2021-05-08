import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import PassInput from "../items/passInput";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TextInput,
  Button,
} from "react-native";
import Bottomtext from "../items/idontknow";
import { ButtonS } from "../items/button";
export const SignUpScreen = ({ navigation }) => {
  const [pass, setPass] = useState("");
  const [user, setUser] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.start}>
        <Text style={styles.text}>Sign Up</Text>
      </View>
      <View style={styles.middle}>
        <PassInput
          style={styles.pass}
          placeHolder='Username'
          iconName='user'
          onChange={(text) => setUser(text)}
        />

        <PassInput
          placeHolder='Password'
          iconName='lock'
          isSecure={true}
          onChange={(text) => setPass(text)}
        />
      </View>
      <View style={styles.end0}>
        <ButtonS text='Sign up' />
      </View>
      <View style={styles.end}>
        <Bottomtext
          text="Don't have an account? "
          buttontitle='Sign in'
          onPress={() => navigation.navigate("Sign In")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    backgroundColor: "white",
  },

  login: {
    height: 40,
    width: 280,
    borderColor: "gray",
    borderBottomWidth: 2,
    paddingLeft: "6%",
    paddingRight: "6%",
    marginTop: 80,
    marginBottom: 10,
  },

  pass: {
    marginTop: 100,
    marginBottom: 20,
  },

  text: {
    fontSize: 40,
    marginTop: 150,
    width: 280,
    fontWeight: "bold",
  },
  start: {
    flex: 2,
  },
  middle: {
    flex: 2,
  },
  end: {
    flex: 1,
    justifyContent: "flex-end",
  },
  end0: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
