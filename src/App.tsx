import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import './config/ReactotronConfig';
import Routes from './routes';
import { Color } from './styles/variables';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
      <StatusBar style="light" backgroundColor={Color.PRIMARY} />
    </NavigationContainer>
  );
}
