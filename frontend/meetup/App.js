import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import EventScreen from "./Screens/EventScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import LoginScreen from "./Screens/LoginScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import CardItem from "./Components/CardItem";

//const Stack = createNativeStackNavigator();

import { VStack, Box, Divider, NativeBaseProvider } from "native-base";
import Navbar from "./Components/Navbar";

import {Dimensions} from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //   <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
    //   <Stack.Screen name="Event" component={EventScreen} options={{headerShown:false}} />
    //   <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}} />
    //   <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
    //   <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown:false}} />

    //   </Stack.Navigator>
    // </NavigationContainer>
  
    <NativeBaseProvider>
      <Box safeAreaBottom border="1" borderRadius="md" py ="5" height={windowHeight}>
        <CardItem/>
        <Navbar/>
      </Box>
    </NativeBaseProvider>

  );
}
