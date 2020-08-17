import React from 'react';
import { FeedContainer, FeedList, FeedClotherCard } from './style';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import { RouteName } from '../../routes';
import ClotherScreen from '../Clother';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

type FeedScreenStackParamList = {
  [RouteName.FEED]: {};
  [RouteName.CLOTHER]: {};
};

export type FeedScreenProps = {
  navigation: StackNavigationProp<FeedScreenStackParamList, RouteName.FEED>;
};

export const FeedScreenStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName={RouteName.FEED}>
      <Stack.Screen
        name={RouteName.FEED}
        component={FeedScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={RouteName.CLOTHER} component={ClotherScreen} />
    </Stack.Navigator>
  );
};

const FeedScreen = ({ navigation }: FeedScreenProps) => {
  return (
    <FeedContainer>
      <SafeAreaView>
        <ScrollView>
          <FeedList>
            <FeedClotherCard
              clother={{
                name: 'Titulo da roupa',
                price: 120,
                image:
                  'https://ph-cdn1.ecosweb.com.br/imagens01/foto/moda-feminina/vestido-curto/vestido-evase-com-estampa-poa-vermelho_308981_600_1.jpg',
              }}
              onClick={() => navigation.navigate(RouteName.CLOTHER, {})}
            />
            <FeedClotherCard
              clother={{
                name: 'Titulo da roupa',
                price: 120,
                image:
                  'https://ph-cdn1.ecosweb.com.br/imagens01/foto/moda-feminina/vestido-curto/vestido-evase-com-estampa-poa-vermelho_308981_600_1.jpg',
              }}
              onClick={() => navigation.navigate(RouteName.CLOTHER, {})}
            />
            <FeedClotherCard
              clother={{
                name: 'Titulo da roupa',
                price: 120,
                image:
                  'https://ph-cdn1.ecosweb.com.br/imagens01/foto/moda-feminina/vestido-curto/vestido-evase-com-estampa-poa-vermelho_308981_600_1.jpg',
              }}
              onClick={() => navigation.navigate(RouteName.CLOTHER, {})}
            />
            <FeedClotherCard
              clother={{
                name: 'Titulo da roupa',
                price: 120,
                image:
                  'https://ph-cdn1.ecosweb.com.br/imagens01/foto/moda-feminina/vestido-curto/vestido-evase-com-estampa-poa-vermelho_308981_600_1.jpg',
              }}
              onClick={() => navigation.navigate(RouteName.CLOTHER, {})}
            />
            <FeedClotherCard
              clother={{
                name: 'Titulo da roupa',
                price: 120,
                image:
                  'https://ph-cdn1.ecosweb.com.br/imagens01/foto/moda-feminina/vestido-curto/vestido-evase-com-estampa-poa-vermelho_308981_600_1.jpg',
              }}
              onClick={() => navigation.navigate(RouteName.CLOTHER, {})}
            />
            <FeedClotherCard
              clother={{
                name: 'Titulo da roupa',
                price: 120,
                image:
                  'https://ph-cdn1.ecosweb.com.br/imagens01/foto/moda-feminina/vestido-curto/vestido-evase-com-estampa-poa-vermelho_308981_600_1.jpg',
              }}
              onClick={() => navigation.navigate(RouteName.CLOTHER, {})}
            />
            <FeedClotherCard
              clother={{
                name: 'Titulo da roupa',
                price: 120,
                image:
                  'https://ph-cdn1.ecosweb.com.br/imagens01/foto/moda-feminina/vestido-curto/vestido-evase-com-estampa-poa-vermelho_308981_600_1.jpg',
              }}
              onClick={() => navigation.navigate(RouteName.CLOTHER, {})}
            />
            <FeedClotherCard
              clother={{
                name: 'Titulo da roupa',
                price: 120,
                image:
                  'https://ph-cdn1.ecosweb.com.br/imagens01/foto/moda-feminina/vestido-curto/vestido-evase-com-estampa-poa-vermelho_308981_600_1.jpg',
              }}
              onClick={() => navigation.navigate(RouteName.CLOTHER, {})}
            />
            <FeedClotherCard
              clother={{
                name: 'Titulo da roupa',
                price: 120,
                image:
                  'https://ph-cdn1.ecosweb.com.br/imagens01/foto/moda-feminina/vestido-curto/vestido-evase-com-estampa-poa-vermelho_308981_600_1.jpg',
              }}
              onClick={() => navigation.navigate(RouteName.CLOTHER, {})}
            />
            <FeedClotherCard
              clother={{
                name: 'Titulo da roupa',
                price: 120,
                image:
                  'https://ph-cdn1.ecosweb.com.br/imagens01/foto/moda-feminina/vestido-curto/vestido-evase-com-estampa-poa-vermelho_308981_600_1.jpg',
              }}
              onClick={() => navigation.navigate(RouteName.CLOTHER, {})}
            />
            <FeedClotherCard
              clother={{
                name: 'Titulo da roupa',
                price: 120,
                image:
                  'https://ph-cdn1.ecosweb.com.br/imagens01/foto/moda-feminina/vestido-curto/vestido-evase-com-estampa-poa-vermelho_308981_600_1.jpg',
              }}
              onClick={() => navigation.navigate(RouteName.CLOTHER, {})}
            />
          </FeedList>
        </ScrollView>
      </SafeAreaView>
    </FeedContainer>
  );
};

export default FeedScreen;
