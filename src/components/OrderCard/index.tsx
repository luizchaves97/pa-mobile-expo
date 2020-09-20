import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Clother } from '../../types';
import {
  Container,
  Content,
  Title,
  PriceText,
  HeaderText,
  DateText,
} from './style';

type OrderCardProps = {
  order: {
    clother: Partial<Clother>;
    date: string;
  };
};

const OrderCard = ({ order }: OrderCardProps) => {
  return (
    <TouchableOpacity>
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
            <DateText>{order.date}</DateText>
            <Title>{order.clother.name}</Title>
          </HeaderText>
        </Content>
        <PriceText>R${order.clother.price}</PriceText>
      </Container>
    </TouchableOpacity>
  );
};

export default OrderCard;
