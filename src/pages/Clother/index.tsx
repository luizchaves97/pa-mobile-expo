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

const ClotherScreen = ({
  route,
}: {
  route: RouteProp<StackParamList, RouteName.CLOTHER>;
}) => {
  const { id } = route.params;
  return (
    <ClotherContainer>
      <ScrollView>
        <Header>
          <ImageClother
            source={{
              uri:
                'https://ph-cdn1.ecosweb.com.br/imagens01/foto/moda-feminina/vestido-curto/vestido-evase-com-estampa-poa-vermelho_308981_600_1.jpg',
            }}
          />
          <Title>Nome da roupa</Title>
        </Header>
        <Info>
          <InfoCard>
            <Label>Preço:</Label>
            <Price>R$700</Price>
            <DiscountPrice>R$800</DiscountPrice>
          </InfoCard>
          <InfoCard>
            <Label>Tamanho:</Label>
            <InfoText>P</InfoText>
          </InfoCard>
          <InfoCard>
            <Label>Cor:</Label>
            <InfoText>Azul</InfoText>
          </InfoCard>
        </Info>
        <Description>
          <Label>Descrição:</Label>
          <InfoText>Descrição da roupa</InfoText>
        </Description>
        <RentButton>
          <RentButtonText>Alugar roupa</RentButtonText>
        </RentButton>
      </ScrollView>
    </ClotherContainer>
  );
};

export default ClotherScreen;
