import styled from 'styled-components/native';
import { Color } from '../../styles/variables';

export const AddClotherContainer = styled.View`
  flex: 1;
  background-color: ${Color.LIGHT_BACKGROUND};
  padding: 16px;
`;

export const Title = styled.Text`
  font-family: 'Nunito_400Regular';
  font-size: 32px;
  margin-bottom: 30px;
`;

export const CreateButton = styled.TouchableOpacity`
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  background-color: ${Color.PRIMARY};
  margin-top: 30px;
`;

export const CreateButtonText = styled.Text`
  color: ${Color.WHITE};
  font-size: 15px;
  text-align: center;
`;
