import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from '../pages/Main';
import { Color } from '../styles/variables';

export enum RoutesName {
  HOME = 'home',
}

const Routes = () => {
  const RouterStack = createStackNavigator();

  return (
    <RouterStack.Navigator
      initialRouteName={RoutesName.HOME}
      screenOptions={{
        headerStyle: {
          backgroundColor: Color.PRIMARY,
        },
        headerTintColor: Color.WHITE,
        headerBackTitleVisible: false,
      }}
    >
      <RouterStack.Screen name={RoutesName.HOME} component={MainScreen} />
    </RouterStack.Navigator>
  );
};

export default Routes;
