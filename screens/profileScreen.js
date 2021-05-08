
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, View} from 'react-native';
import { SignInScreen } from './signinScreen';
import { SignUpScreen } from './signupScreen';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator }  from '@react-navigation/stack';



export const ProfileScreen = ({navigation}) => {

    return (
        <SignInScreen navigation = {navigation}/>
    );
} 

