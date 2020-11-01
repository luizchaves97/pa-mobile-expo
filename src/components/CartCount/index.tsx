import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { CartCountContainer, CartCountBadge, CartCountBadgeText } from './style';
import { Color } from '../../styles/variables';

export type CartCountProps = {
  count: number;
}

const CartCount = ({count}: CartCountProps) => {
  return (
    <CartCountContainer>
      <FontAwesome name="shopping-cart" size={20} color={Color.WHITE}  />
      <CartCountBadge>
        <CartCountBadgeText>{count}</CartCountBadgeText>
      </CartCountBadge>
    </CartCountContainer>
  )
}

export default CartCount;
