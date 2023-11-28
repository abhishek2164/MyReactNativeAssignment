import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import Splash from '../screens/Splash';
import BottomTabBar from '../screens/TabBar/BottomTabBar';
const Stack = createStackNavigator();
const AppStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={'Splash'}
            screenOptions={{ headerShown: false }}>
                <Stack.Screen name={'Splash'} component={Splash} />
                <Stack.Screen name={'TabScreens'} component={BottomTabBar} />
            </Stack.Navigator>
    )
  }
export default function Navigator() {
  return (
    <View
      style={{
        flex: 1
      }}>
     <AppStack/>
    </View>
  );
};