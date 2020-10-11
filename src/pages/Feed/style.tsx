import styled from 'styled-components/native';
import { Color } from '../../styles/variables';
import ClotherCard from '../../components/ClotherCard';

export const FeedContainer = styled.View`
  background-color: ${Color.LIGHT_BACKGROUND};
`;

export const Title = styled.Text`
  font-family: 'Nunito_400Regular';
  font-size: 20px;
`;

export const FeedList = styled.View`
  margin: 16px;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const FeedClotherCard = styled(ClotherCard)`
  margin-bottom: 26px;
  width: 100%;
  height: auto;
  max-width: 180px;
`;
