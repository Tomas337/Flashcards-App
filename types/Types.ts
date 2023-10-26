import { NativeStackScreenProps } from "@react-navigation/native-stack";

export interface Set {
  id: string;
  name: string;
  image?: string;
  cards: Card[];
}

export interface Card {
  text1: string;
  text2: string;
  image: string
}

export type RootStackParamList = {
  Sets: undefined;
  PlaySet: { set: Set };
  NewSet: undefined;
}

export type PlaySetProps = NativeStackScreenProps<RootStackParamList, 'PlaySet'>;