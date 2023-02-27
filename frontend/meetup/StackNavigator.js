// import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="Events" component={EventScreen} /> */}
        <Stack.Screen name="Profile" component={ProfileScreen} />
        {/* <Stack.Screen name="Message" component={MessageScreen} /> */}
      </Stack.Navigator>
   
    
  )
}

export default StackNavigator