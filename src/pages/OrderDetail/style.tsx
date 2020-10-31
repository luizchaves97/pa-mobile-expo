import styled from 'styled-components/native';
import { Color } from '../../styles/variables';

export const OrderDetailContainer = styled.View`
  flex: 1;
  background-color: ${Color.LIGHT_BACKGROUND};
  padding: 16px;
`;

export const Header = styled.View`
  flex-direction: column;
`;
export const Info = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;

export const InfoCard = styled.View`
  flex: 1;
  margin-right: 15px;
  background: ${Color.WHITE};
  padding: 10px;
  border-radius: 6px;
`;
export const Description = styled.View`
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-family: 'Nunito_400Regular';
  font-size: 30px;
  margin-top: 10px;
`;

export const Label = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

export const Price = styled.Text`
  font-size: 14px;
  text-decoration: line-through;
`;
export const DiscountPrice = styled.Text`
  font-size: 20px;
`;

export const InfoText = styled.Text`
  font-size: 18px;
`;

export const RentButton = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  padding: 12px;
  border-radius: 10px;
  background-color: ${Color.PRIMARY};
  margin-top: 30px;
`;

export const RentButtonText = styled.Text`
  color: ${Color.WHITE};
  font-size: 15px;
  text-align: center;
`;

export const ImageClother = styled.Image`
  width: 100%;
  height: 500px;
`;
