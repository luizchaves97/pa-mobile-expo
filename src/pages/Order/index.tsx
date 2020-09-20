import React from 'react';
import { OrderContainer, Title } from './style';
import { RouteProp } from '@react-navigation/native';
import { StackParamList } from '../../types';
import { RouteName } from '../../routes';
import OrderCard from '../../components/OrderCard';
import { SafeAreaView } from 'react-native-safe-area-context';

const OrderScreen = ({
  route,
}: {
  route: RouteProp<StackParamList, RouteName.ORDER>;
}) => {
  const mockData = [
    {
      id: 1,
      order: {
        clother: {
          image:
            'https://ph-cdn1.ecosweb.com.br/imagens01/foto/moda-feminina/vestido-curto/vestido-evase-com-estampa-poa-vermelho_308981_600_1.jpg',
          name: 'Roupa nova',
          price: '80,00',
        },
        date: '22/02/2020',
      },
    },
    {
      id: 2,
      order: {
        clother: {
          image:
            'https://ph-cdn1.ecosweb.com.br/imagens01/foto/moda-feminina/vestido-curto/vestido-evase-com-estampa-poa-vermelho_308981_600_1.jpg',
          name: 'Roupa nova',
          price: '50,00',
        },
        date: '22/02/2020',
      },
    },
    {
      id: 3,
      order: {
        clother: {
          image:
            'https://ph-cdn1.ecosweb.com.br/imagens01/foto/moda-feminina/vestido-curto/vestido-evase-com-estampa-poa-vermelho_308981_600_1.jpg',
          name: 'Roupa nova',
          price: '30,00',
        },
        date: '22/02/2020',
      },
    },
    {
      id: 4,
      order: {
        clother: {
          image:
            'https://ph-cdn1.ecosweb.com.br/imagens01/foto/moda-feminina/vestido-curto/vestido-evase-com-estampa-poa-vermelho_308981_600_1.jpg',
          name: 'Roupa nova',
          price: '15,00',
        },
        date: '22/02/2020',
      },
    },
  ];
  return (
    <OrderContainer>
      <SafeAreaView>
        <Title>Meus pedidos</Title>
        {mockData.map((data) => (
          <OrderCard key={data.id} order={data.order} />
        ))}
      </SafeAreaView>
    </OrderContainer>
  );
};

export default OrderScreen;
