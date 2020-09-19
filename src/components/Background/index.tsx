import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import { Color } from '../../styles/variables';

export default styled(LinearGradient).attrs({
  colors: [Color.PRIMARY, 'transparent'],
})`
  flex: 1;
`;
