import React,{useState} from 'react';
import {Box,HStack,Pressable,Center,Icon,Text} from 'native-base';
import {MaterialCommunityIcons,MaterialIcons} from "react-native-vector-icons";
 
function Navbar() {
    const [selected, setSelected] = useState(1);
    return (
            <Box bg="white" width="100%" maxW="390" alignSelf="center">
              
              <HStack bg="white" alignItems="center" safeAreaBottom ={0}>
                <Pressable cursor="pointer" opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => setSelected(0)}>
                  <Center>
                    <Icon mb="1" as={<MaterialCommunityIcons name={selected === 0 ? 'home' : 'home-outline'} />} color="black" size="sm" />
                    <Text color="black" fontSize="12">
                      Home
                    </Text>
                  </Center>
                </Pressable>
                <Pressable cursor="pointer" opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(1)}>
                  <Center>
                    <Icon mb="1" as={<MaterialIcons name="search" />} color="black" size="sm" />
                    <Text color="black" fontSize="12">
                      Search
                    </Text>
                  </Center>
                </Pressable>
                <Pressable cursor="pointer" opacity={selected === 2 ? 1 : 0.6} py="2" flex={1} onPress={() => setSelected(2)}>
                  <Center>
                    <Icon mb="1" as={<MaterialCommunityIcons name={selected === 2 ? 'cart' : 'cart-outline'} />} color="black" size="sm" />
                    <Text color="black" fontSize="12">
                      Cart
                    </Text>
                  </Center>
                </Pressable>
                <Pressable cursor="pointer" opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(3)}>
                  <Center>
                    <Icon mb="1" as={<MaterialCommunityIcons name={selected === 3 ? 'account' : 'account-outline'} />} color="black" size="sm" />
                    <Text color="black" fontSize="12">
                      Account
                    </Text>
                  </Center>
                </Pressable>
              </HStack>
            </Box>
  );
}

export default Navbar