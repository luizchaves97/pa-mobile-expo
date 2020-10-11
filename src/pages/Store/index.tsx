import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Avatar, { AvatarSize } from '../../components/Avatar';
import { RouteName } from '../../routes';
import { mockClotherData } from '../../services/mocks';
import { StackParamList } from '../../types';
import AddClotherScreen from '../AddClother';
import ClotherScreen from '../Clother';
import {
  StoreContainer,
  Title,
  Header,
  Description,
  ProductListContainer,
  ProductListContent,
  ProductListTitle,
  ActionsContainer,
  AddButton,
  AddButtonText,
  StoreClotherCard,
} from './style';

export type StoreScreenProps = {
  navigation: StackNavigationProp<StackParamList, RouteName.STORE>;
};

export const StoreScreenStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName={RouteName.STORE}>
      <Stack.Screen
        name={RouteName.STORE}
        component={StoreScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={RouteName.CLOTHER} component={ClotherScreen} />
      <Stack.Screen name={RouteName.ADD_CLOTHER} component={AddClotherScreen} />
    </Stack.Navigator>
  );
};

const StoreScreen = ({ navigation }: StoreScreenProps) => (
  <StoreContainer>
    <SafeAreaView>
      <ScrollView>
        <Header>
          <Avatar
            image="https://image.freepik.com/free-vector/store-icon_24911-1362.jpg"
            size={AvatarSize.LARGE}
          />
          <Title>Minha Lojinha</Title>
        </Header>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
          mattis orci. Nulla augue odio, facilisis id lacinia sed, viverra quis
          lorem. Suspendisse sit amet aliquam risus.
        </Description>
        <ActionsContainer>
          <TouchableOpacity
            onPress={() => navigation.navigate(RouteName.ADD_CLOTHER, {})}
          >
            <AddButton>
              <AddButtonText>Adicionar produto</AddButtonText>
            </AddButton>
          </TouchableOpacity>
        </ActionsContainer>
        <ProductListContainer>
          <ProductListTitle>Produtos</ProductListTitle>
          <ProductListContent>
            {mockClotherData.map((data) => (
              <TouchableOpacity
                onPress={() => navigation.navigate(RouteName.CLOTHER, { data })}
              >
                <StoreClotherCard key={data.id} clother={data} />
              </TouchableOpacity>
            ))}
          </ProductListContent>
        </ProductListContainer>
      </ScrollView>
    </SafeAreaView>
  </StoreContainer>
);

export default StoreScreen;
