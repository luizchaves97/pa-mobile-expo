import React from 'react';
import { MainContainer, Title } from './style';
import { AppLoading } from 'expo';
import { Nunito_400Regular, useFonts } from '@expo-google-fonts/nunito';

const Main = () => {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <MainContainer>
      <Title>Hello World!</Title>
    </MainContainer>
  );
};

export default Main;
