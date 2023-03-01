import React from "react";
import { VStack, Box, Divider,HStack,Text,Pressable,Image , Center} from 'native-base';

export default function CardItem () {
  return (
    <Box py="5" px="3">
      <Center py="5">
      <Text fontSize="sm" color="yellow.450">Today @ 9PM</Text>
      </Center>
    
      <Box bg="yellow.400" py="4" px="3" height={800} maxHeight="100%" borderRadius="10" rounded="10" width={390} maxWidth="100%">
        
        <HStack justifyContent="space-between">
          <Box justifyContent="space-between" py="10">
            <VStack space="20">
              
              <Text color="white" fontSize="xl">
                Let's talk about avatar!
              </Text>
            </VStack>
            <Pressable rounded="xs" bg="primary.400" alignSelf="flex-start" py="1" px="3">
              <Text textTransform="uppercase" fontSize="sm" fontWeight="bold" color="white">
                Remind me
              </Text>
            </Pressable>
          </Box>
          <Image source={{
          uri: 'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg'
        }} alt="Aang flying and surrounded by clouds" maxHeight="100" rounded="full" width="100" />
        </HStack>
      </Box>
      </Box>
  );
};
