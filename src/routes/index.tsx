import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabsRouter from './tabs';
import { useCartContext } from '../context/cart';
import CartCount from '../components/CartCount';

export enum RouteName {
  FEED = 'feed',
  ORDER = 'order',
  ORDER_DETAIL = 'order-detail',
  STORE = 'store',
  CLOTHER = 'clother',
  ADD_CLOTHER = 'add-clother',
  PROFILE = 'profile',
  STACK = 'stack',
}

const Routes = () => {
  return <TabsRouter />
};

export default Routes;
