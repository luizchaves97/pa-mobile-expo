import React from 'react';
import { OrderContainer, Title } from './style';
import { RouteProp } from '@react-navigation/native';
import { StackParamList } from '../../types';
import { RouteName } from '../../routes';
import OrderCard from '../../components/OrderCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { mockOrderData } from '../../services/mocks';

const OrderScreen = ({
  route,
}: {
  route: RouteProp<StackParamList, RouteName.ORDER>;
}) => {
  return (
    <OrderContainer>
      <SafeAreaView>
        <Title>Meus pedidos</Title>
        {mockOrderData.map((data) => (
          <OrderCard key={data.id} order={data.order} />
        ))}
      </SafeAreaView>
    </OrderContainer>
  );
};

export default OrderScreen;
