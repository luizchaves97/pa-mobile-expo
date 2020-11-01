import styled from "styled-components/native";
import { Color } from "../../styles/variables";

export const CartCountContainer = styled.TouchableOpacity`
  position: absolute;
  top: 60px;
  right: 15px;
  z-index: 10;


  align-items: center;
  justify-content: center;
  background-color: ${Color.PRIMARY};
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;


export const CartCountBadge = styled.View`
  position: absolute;
  width: 13px;
  height: 13px;
  align-items: center;
  justify-content: center;

  border-radius: 50px;
  top: 7px;
  right: 9px;
  background-color: ${Color.WHITE};


`;

export const CartCountBadgeText = styled.Text`
font-size: 12px;
`;
