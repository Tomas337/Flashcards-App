import { Pressable, Text } from "react-native";
import { RootStackParamList, Set } from "../types/Types";
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';

interface SetItemProps {
  set: Set;
}

export default function SetItem({ set }: SetItemProps): JSX.Element {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <Pressable 
      style={({ pressed }) => [
        { opacity: pressed ? 0.5 : 1.0 }
      ]}
      onPress={() => navigation.push("PlaySet", { set })}
    >
      <Text>{set.name}</Text>
    </Pressable>
  );
}