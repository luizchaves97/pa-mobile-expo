import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabsRouter from './tabs';

export enum RouteName {
  FEED = 'feed',
  ORDER = 'order',
  STORE = 'store',
  CLOTHER = 'clother',
  PROFILE = 'profile',
  STACK = 'stack',
}

const Routes = () => {
  return <TabsRouter />;
};

export default Routes;
