import React from 'react';
import { FeedContainer, Title } from './style';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import { RouteName } from '../../routes';
import { Button } from 'react-native';
import { Color } from '../../styles/variables';
import ClotherScreen from '../Clother';

type FeedScreenStackParamList = {
  [RouteName.FEED]: {};
  [RouteName.CLOTHER]: {};
};

export type FeedScreenProps = {
  navigation: StackNavigationProp<FeedScreenStackParamList, RouteName.FEED>;
};

export const FeedScreenStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName={RouteName.FEED}>
      <Stack.Screen
        name={RouteName.FEED}
        component={FeedScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={RouteName.CLOTHER} component={ClotherScreen} />
    </Stack.Navigator>
  );
};

const FeedScreen = ({ navigation }: FeedScreenProps) => {
  return (
    <FeedContainer>
      <Title>Feed Page!</Title>
      <Button
        title="Go to clother"
        onPress={() => navigation.navigate(RouteName.CLOTHER, {})}
        color={Color.PRIMARY}
      />
    </FeedContainer>
  );
};

export default FeedScreen;
