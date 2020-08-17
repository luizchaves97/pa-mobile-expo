import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import { RouteName } from '../index';

import { FeedScreenStack } from '../../pages/Feed';
import StoreScreen from '../../pages/Store';
import OrderScreen from '../../pages/Order';
import ProfileScreen from '../../pages/Profile';
import { Color } from '../../styles/variables';

const TabsRouter = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={RouteName.FEED}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === RouteName.FEED) {
            iconName = 'home';
          } else if (route.name === RouteName.STORE) {
            iconName = 'store';
          } else if (route.name === RouteName.ORDER) {
            iconName = 'book';
          } else {
            iconName = 'user-alt';
          }

          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: Color.PRIMARY,
        inactiveTintColor: Color.INACTIVE_TAB,
      }}
    >
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
