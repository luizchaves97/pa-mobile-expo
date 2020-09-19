import { RouteName } from '../routes';

export type ID = number | string;

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
  [RouteName.ORDER]: {};
  [RouteName.CLOTHER]: {
    id: number;
  };
};
