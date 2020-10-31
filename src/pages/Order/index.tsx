import React from 'react';
import { OrderContainer, Title } from './style';
import { RouteProp } from '@react-navigation/native';
import { StackParamList } from '../../types';
import { RouteName } from '../../routes';
import OrderCard from '../../components/OrderCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { mockOrderData } from '../../services/mocks';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import OrderDetailScreen from '../OrderDetail';
import { TouchableOpacity } from 'react-native-gesture-handler';

export type OrdercreenProps = {
  navigation: StackNavigationProp<StackParamList, RouteName.ORDER>;
};

export const OrdercreenStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName={RouteName.ORDER}>
      <Stack.Screen
        name={RouteName.ORDER}
        component={OrderScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={RouteName.ORDER_DETAIL} component={OrderDetailScreen} />
    </Stack.Navigator>
  );
};

const OrderScreen = ({ navigation }: OrdercreenProps) => {
  return (
    <OrderContainer>
      <SafeAreaView>
        <Title>Meus pedidos</Title>
        {mockOrderData.map((data) => (
          <TouchableOpacity key={data.id} onPress={() => navigation.navigate(RouteName.ORDER_DETAIL, { data })}>
          <OrderCard order={data.order} />
          </TouchableOpacity>
        ))}
      </SafeAreaView>
    </OrderContainer>
  );
};

export default OrderScreen;
