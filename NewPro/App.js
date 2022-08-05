import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import AccountScreen from './Screens/AccountScreen';
import AdminScreen from './Screens/AdminScreen';
import HRScreen from './Screens/HRScreen';
import TechScreen from './Screens/TechScreen';
import { style } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ headerTitleAlign: 'center', headerStyle: { backgroundColor: 'green' } }} component={HomeScreen} />
        <Stack.Screen name="HR" options={{ headerTitleAlign: 'center', headerStyle: { backgroundColor: 'white' } }} component={HRScreen} />
        <Stack.Screen name="Account" options={{ headerTitleAlign: 'center' }} component={AccountScreen} />
        <Stack.Screen name="Admin" options={{ headerTitleAlign: 'center' }} component={AdminScreen} />
        <Stack.Screen name="Tech" options={{ headerTitleAlign: 'center', headerStyle: { backgroundColor: 'rgb(250,220,230)' } }} component={TechScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
