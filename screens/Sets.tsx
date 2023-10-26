import { Fragment, useContext } from "react";
import { Text, ScrollView, Pressable } from 'react-native';
import SetItem from '../components/SetItem';
import { SetContext } from '../context/SetContext';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';

type RootStackParamList = {
  NewSet: undefined;
}

export default function Sets(): JSX.Element {
  const sets = useContext(SetContext);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <Fragment>
      <ScrollView>
        {sets.map((set) => (
          <SetItem key={set.id} set={set} />
        ))}
      </ScrollView>
      <Pressable
        style={({ pressed }) => [
          { opacity: pressed ? 0.5 : 1.0 }
        ]}
        onPress={() => navigation.navigate("NewSet")}
      >
        <Text>New</Text>
      </Pressable>
    </Fragment>
  );
}