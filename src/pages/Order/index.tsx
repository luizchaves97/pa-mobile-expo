import React from 'react';
import { OrderContainer, Title } from './style';
import { RouteProp } from '@react-navigation/native';
import { StackParamList } from '../../types';
import { RouteName } from '../../routes';

const OrderScreen = ({
  route,
}: {
  route: RouteProp<StackParamList, RouteName.ORDER>;
}) => {
  return (
    <OrderContainer>
      <Title>Order page!</Title>
    </OrderContainer>
  );
};

export default OrderScreen;
