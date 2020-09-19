import React, { useEffect } from 'react';
import { FeedContainer, FeedList, FeedClotherCard } from './style';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import { RouteName } from '../../routes';
import ClotherScreen from '../Clother';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackParamList } from '../../types';

export type FeedScreenProps = {
  navigation: StackNavigationProp<StackParamList, RouteName.FEED>;
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
            <TouchableOpacity
              onPress={() => navigation.navigate(RouteName.CLOTHER, { id: 1 })}
            >
              <FeedClotherCard
                clother={{
                  name: 'Titulo da roupa',
                  price: 120,
                  image:
                    'https://ph-cdn1.ecosweb.com.br/imagens01/foto/moda-feminina/vestido-curto/vestido-evase-com-estampa-poa-vermelho_308981_600_1.jpg',
                }}
              />
            </TouchableOpacity>
          </FeedList>
        </ScrollView>
      </SafeAreaView>
    </FeedContainer>
  );
};

export default FeedScreen;
