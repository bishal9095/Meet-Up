import { NavigationContainer } from '@react-navigation/native';
//import { StyleSheet } from 'react-native';
import StackNavigator from './StackNavigator';
export default function App() {
  return (
    <NavigationContainer>
        <StackNavigator/>
    </NavigationContainer>
    
  );
};
