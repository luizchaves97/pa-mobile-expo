import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';
import { Nunito_400Regular, useFonts } from '@expo-google-fonts/nunito';

import './config/ReactotronConfig';
import Routes from './routes';
import { Color } from './styles/variables';
import { CartContextProvider } from './context/cart';

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <CartContextProvider>
      <NavigationContainer>
        <Routes />
        <StatusBar style="dark" backgroundColor={Color.WHITE} />
      </NavigationContainer>
    </CartContextProvider>
  );
}
