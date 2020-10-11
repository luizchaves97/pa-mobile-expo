import styled from 'styled-components/native';
import ClotherCard from '../../components/ClotherCard';
import { Color } from '../../styles/variables';

export const StoreContainer = styled.View`
  flex: 1;
  background-color: ${Color.LIGHT_BACKGROUND};
  padding: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-family: 'Nunito_400Regular';
  font-size: 20px;
  margin-left: 10px;
`;

export const Description = styled.Text`
  font-family: 'Nunito_400Regular';
  font-size: 16px;
  margin-top: 20px;
`;

export const ProductListContainer = styled.View`
  margin-top: 10px;
`;

export const ProductListContent = styled.View`
  margin-top: 20px;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ProductListTitle = styled.Text`
  font-family: 'Nunito_400Regular';
  font-size: 24px;
`;

export const ActionsContainer = styled.View`
  margin-top: 10px;
`;

export const AddButton = styled.View`
  background-color: ${Color.PRIMARY};
  padding: 10px;

  border: 1px solid ${Color.PRIMARY};
  border-radius: 10px;
`;

export const AddButtonText = styled.Text`
  color: ${Color.WHITE};
  font-size: 14px;
  text-align: center;
`;

export const StoreClotherCard = styled(ClotherCard)`
  margin-bottom: 20px;
  width: 100%;
  height: auto;
  max-width: 180px;
`;
