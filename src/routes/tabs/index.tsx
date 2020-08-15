import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RouteName } from '../index';

import { FeedScreenStack } from '../../pages/Feed';
import StoreScreen from '../../pages/Store';
import OrderScreen from '../../pages/Order';
import ProfileScreen from '../../pages/Profile';

const TabsRouter = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator initialRouteName={RouteName.FEED}>
      <Tab.Screen
        name={RouteName.FEED}
        component={FeedScreenStack}
        options={{ title: 'Feed' }}
      />
      <Tab.Screen
        name={RouteName.STORE}
        component={StoreScreen}
        options={{ title: 'Minha Loja' }}
      />
      <Tab.Screen
        name={RouteName.ORDER}
        component={OrderScreen}
        options={{ title: 'Pedidos' }}
      />
      <Tab.Screen
        name={RouteName.PROFILE}
        component={ProfileScreen}
        options={{ title: 'Perfil' }}
      />
    </Tab.Navigator>
  );
};

export default TabsRouter;
