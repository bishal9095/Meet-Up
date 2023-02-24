import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Screens/HomeScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        // <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        // </NavigationContainer>
      );

}

export default StackNavigator
// "react-native-web": "~0.18.7",
// "react-native-screens": "~3.18.0",
    // "react-native-safe-area-context": "4.4.1"