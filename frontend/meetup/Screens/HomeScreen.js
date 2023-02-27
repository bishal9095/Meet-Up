import { View, Text } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = () => {
  return (
    // <View style={styles.container}>
      <View className="flex-1 items-center justify-center bg-[#10b981]">
      <Text>Awesome</Text>
      <Text>So this is how i can make apps</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default HomeScreen