import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { Text, View } from 'react-native';

export default function App() {
  return (
    // <View style={styles.container}>
      <View className="flex-1 items-center justify-center bg-[#10b981]">
      <Text>Awesome</Text>
      <Text>So this is how i can make apps</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
