import { RouteName } from '../routes';

export type ID = number;

export type Clother = {
  id: ID;
  name: string;
  price: number;
  discout_price: number;
  size: string;
  color: string;
  description: string;
  image: string;
};

export type StackParamList = {
  [RouteName.FEED]: {};
  [RouteName.STORE]: {};
  [RouteName.ORDER]: {};
  [RouteName.CLOTHER]: {
    data: Partial<Clother>;
  };
  [RouteName.ADD_CLOTHER]: {};
};
