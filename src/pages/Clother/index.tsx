import React from 'react';
import {
  ClotherContainer,
  Title,
  Header,
  Info,
  Description,
  Label,
  Price,
  DiscountPrice,
  InfoCard,
  InfoText,
  RentButton,
  RentButtonText,
  ImageClother,
} from './style';
import { StackParamList } from '../../types';
import { ScrollView } from 'react-native-gesture-handler';
import { RouteProp } from '@react-navigation/native';
import { RouteName } from '../../routes';
import { formatMoney } from '../../services/utils';
import { useCartContext } from '../../context/cart';
import CartCount from '../../components/CartCount';

const ClotherScreen = ({
  route,
}: {
  route: RouteProp<StackParamList, RouteName.CLOTHER>;
}) => {
  const { addCart } = useCartContext();
  const { data } = route.params;
  const { image, price, discout_price, size, description, color, name } = data;

  const handleAddCart = () => {
    addCart(data);
  }

  return (
    <ClotherContainer>
      <ScrollView>
        <Header>
          <ImageClother
            source={{
              uri: image,
            }}
          />
          <Title>{name}</Title>
        </Header>
        <Info>
          <InfoCard>
            <Label>Preço:</Label>
            <Price>{formatMoney(price || 0)}</Price>
            <DiscountPrice>{formatMoney(discout_price || 0)}</DiscountPrice>
          </InfoCard>
          <InfoCard>
            <Label>Tamanho:</Label>
            <InfoText>{size}</InfoText>
          </InfoCard>
          <InfoCard>
            <Label>Cor:</Label>
            <InfoText>{color}</InfoText>
          </InfoCard>
        </Info>
        <Description>
          <Label>Descrição:</Label>
          <InfoText>{description}</InfoText>
        </Description>
        <RentButton onPress={handleAddCart}>
          <RentButtonText>Alugar roupa</RentButtonText>
        </RentButton>
      </ScrollView>
    </ClotherContainer>
  );
};

export default ClotherScreen;
