import { createStackNavigator } from '@react-navigation/stack'
import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '../NewsScreen/HomeScreen';
import Readnews from '../NewsScreen/Readnews';

const Stack = createStackNavigator();
const HomeNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="readNews" component={Readnews} />
    </Stack.Navigator>
  )
}

export default HomeNavigation