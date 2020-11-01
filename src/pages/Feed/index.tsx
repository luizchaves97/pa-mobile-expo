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
import { mockClotherData } from '../../services/mocks';
import { useCartContext } from '../../context/cart';
import CartCount from '../../components/CartCount';

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
  const {cart} = useCartContext();
  return (
    <FeedContainer>
      <SafeAreaView>
        {cart.length > 0 && (
          <CartCount count={cart.length} />
        )}
        <ScrollView>
          <FeedList>
            {mockClotherData.map((data) => (
              <TouchableOpacity
                onPress={() => navigation.navigate(RouteName.CLOTHER, { data })}
                key={data.id}
              >
                <FeedClotherCard clother={data} />
              </TouchableOpacity>
            ))}
          </FeedList>
        </ScrollView>
      </SafeAreaView>
    </FeedContainer>
  );
};

export default FeedScreen;
