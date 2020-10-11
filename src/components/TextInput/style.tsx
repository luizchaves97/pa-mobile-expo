import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import { Color } from '../../styles/variables';

export const TextInputContainer = styled(TextInput)`
  height: 40px;
  border: 1px solid ${Color.BORDER_DEFAULT};
  background-color: ${Color.WHITE};
  color: ${Color.DARK};
  padding: 10px;
  margin-top: 4px;
  margin-bottom: 20px;
`;
