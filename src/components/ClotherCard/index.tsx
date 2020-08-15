import React from 'react';
import { View, Image, Text, GestureResponderEvent } from 'react-native';
import { Clother } from '../../types';
import { Color } from '../../styles/variables';
import { formatMoney } from '../../services/utils';

type ClotherCardProps = {
  clother: Partial<Clother>;
  onClick?: () => void;
};

const ClotherCard = ({ clother, onClick }: ClotherCardProps) => {
  const { name, image, price } = clother;

  return (
    <View onAccessibilityTap={onClick}>
      <Image
        source={{ uri: image }}
        style={{
          width: 150,
          height: 200,
          resizeMode: 'stretch',
        }}
      />
      <Text>{name}</Text>
      <Text>{formatMoney(price || 0)}</Text>
    </View>
  );
};

export default ClotherCard;
