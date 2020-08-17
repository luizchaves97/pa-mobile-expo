import styled from 'styled-components/native';
import { Color } from '../../styles/variables';
import ClotherCard from '../../components/ClotherCard';

export const FeedContainer = styled.View`
  flex: 1;
  background-color: ${Color.LIGHT_BACKGROUND};
`;

export const Title = styled.Text`
  font-family: 'Nunito_400Regular';
  font-size: 20px;
`;

export const FeedList = styled.View`
  margin: 16px 32px;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const FeedClotherCard = styled(ClotherCard)`
  margin-bottom: 26px;
`;
