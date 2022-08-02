import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import AccountScreen from './Screens/AccountScreen';
import AdminScreen from './Screens/AdminScreen';
import HRScreen from './Screens/HRScreen';
import TechScreen from './Screens/TechScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="HR" component={HRScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
        <Stack.Screen name="Tech" component={TechScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
