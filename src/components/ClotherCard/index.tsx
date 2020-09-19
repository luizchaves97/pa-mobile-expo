import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Clother } from '../../types';
import { formatMoney } from '../../services/utils';
import {
  ClotherCardContainer,
  ClotherCardImage,
  ClotherCardTitle,
  ClotherCardPrice,
} from './style';

type ClotherCardProps = {
  clother: Partial<Clother>;
  onClick?: () => void;
  style?: StyleProp<ViewStyle>;
};

const ClotherCard = ({ clother, onClick, style }: ClotherCardProps) => {
  const { name, image, price } = clother;

  return (
    <ClotherCardContainer onAccessibilityTap={onClick} style={style}>
      <ClotherCardImage
        source={{ uri: image }}
        style={{
          width: 150,
          height: 200,
          resizeMode: 'stretch',
        }}
      />
      <ClotherCardTitle>{name}</ClotherCardTitle>
      <ClotherCardPrice>{formatMoney(price || 0)}</ClotherCardPrice>
    </ClotherCardContainer>
  );
};

export default ClotherCard;
