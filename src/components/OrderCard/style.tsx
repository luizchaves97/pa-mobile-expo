import styled from 'styled-components/native';
import { Color } from '../../styles/variables';

export const Content = styled.View`
  margin-left: 10px;

  flex-direction: row;
  align-items: center;
`;

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  border: 1px solid ${Color.BORDER_DEFAULT};
  border-radius: 6px;

  padding: 10px 5px;
  margin-bottom: 10px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 16px;
`;

export const PriceText = styled.Text`
  font-weight: bold;
`;

export const DateText = styled.Text`
  font-size: 12px;
`;

export const HeaderText = styled.View`
  margin-left: 8px;
`;
