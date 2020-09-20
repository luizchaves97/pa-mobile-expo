import styled from 'styled-components/native';
import { Color } from '../../styles/variables';

export const ProfileContainer = styled.View`
  flex: 1;
  background-color: ${Color.LIGHT_BACKGROUND};
  padding: 16px;
`;

export const Title = styled.Text`
  font-family: 'Nunito_400Regular';
  font-size: 20px;
  margin-left: 10px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const ProfileLinkContainer = styled.View`
  margin-top: 20px;
`;

export const ProfileLink = styled.View`
  padding: 20px 10px;
  border-top-width: 1px;
  border-top-color: ${Color.BORDER_DEFAULT};
`;

export const ProfileLinkText = styled.Text`
  font-size: 18px;
`;
