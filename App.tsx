import React from 'react';
import { StyleSheet, ActivityIndicator} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_500Medium,
  useFonts
} from '@expo-google-fonts/poppins';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import theme from './src/global/styles/theme';
import {Dashboard} from './src/screens/Dashboard';
import {Loading} from './src/components/Loading';
import Start from './src/screens/Start';
import TabbedHome from './src/screens/TabbedHome';

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
  })

  if(!fontsLoaded){
    return (
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <Loading />
        </ThemeProvider>
      </NavigationContainer>
    );
    
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name='Start' component={Start} />
          <Stack.Screen name='Home' component={TabbedHome}  />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

