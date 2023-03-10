import { View, Text } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import CardItem from '../Components/CardItem';


// import { Fragment } from 'react'
// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const HomeScreen = () => {
  
  return (
      <View className="flex-1 items-center justify-center bg-[#fde047]">

     
      
      
      <Text>Awesome</Text>
      <Text className="text-white">You needed to just clear the cache</Text>
      {/* <Text>So this is how i can make apps</Text> */}
      <StatusBar style="auto" />
    </View>
    
  );
}

export default HomeScreen;