import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Clother, Order } from '../../types';
import {
  Container,
  Content,
  Title,
  PriceText,
  HeaderText,
  DateText,
} from './style';

type OrderCardProps = {
  order: Order['order'];
};

const OrderCard = ({ order }: OrderCardProps) => {
  return (
    <Container>
      <Content>
        <Image
          source={{ uri: order.clother.image }}
          style={{
            width: 50,
            height: 50,
          }}
        />
        <HeaderText>
          <DateText>{order.date.toString()}</DateText>
          <Title>{order.clother.name}</Title>
        </HeaderText>
      </Content>
      <PriceText>R${order.clother.price}</PriceText>
    </Container>
  );
};

export default OrderCard;
