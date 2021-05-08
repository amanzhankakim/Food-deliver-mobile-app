import React from "react";
import { ProfileScreen } from "./screens/profileScreen";
import { SearchScreen } from "./screens/searchScreen";
import { SettingsScreen } from "./screens/settingsScreen";
import { QrScreen } from "./screens/qrScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SignUpScreen } from "./screens/signupScreen";
import { SignInScreen } from "./screens/signinScreen";
import { MenuScreen } from "./screens/menuScreen";
import { CategoryScreen } from "./screens/categoryScreen";

const Tabs = createBottomTabNavigator();
const ProfileStack = createStackNavigator();
const QrStack = createStackNavigator();
const SearchStack = createStackNavigator();

const ProfileStackScreen = () => (
  <ProfileStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <ProfileStack.Screen name='Sign In' component={SignInScreen} />
    <ProfileStack.Screen name='Sign Up' component={SignUpScreen} />
    <ProfileStack.Screen name='Profile' component={ProfileScreen} />
  </ProfileStack.Navigator>
);

const SearchStackScreen = () => (
  <SearchStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <ProfileStack.Screen name='Search' component={SearchScreen} />
    <ProfileStack.Screen name='Menu' component={CategoryScreen} />
  </SearchStack.Navigator>
);

const QrStackScreen = () => (
  <QrStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <QrStack.Screen name='Qr' component={QrScreen} />
    <QrStack.Screen name='Sign In' component={SignInScreen} />
  </QrStack.Navigator>
);
export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name='Profile' component={ProfileStackScreen} />
        <Tabs.Screen name='QR' component={QrStackScreen} />
        <Tabs.Screen name='Search' component={SearchStackScreen} />
        <Tabs.Screen name='Settings' component={SettingsScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
