import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Sets from './screens/Sets';
import { SetProvider } from './context/SetContext';
import PlaySet from './screens/PlaySet';
import NewSet from './screens/NewSet';
import { PlaySetProps, RootStackParamList } from './types/Types';

const Stack = createStackNavigator<RootStackParamList>();

export default function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <SetProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Sets" component={Sets} />
            <Stack.Screen
              name="PlaySet"
              component={PlaySet}
              options={({ route }: PlaySetProps) => ({ title: route.params.set.name})}
            />
            <Stack.Screen name="NewSet" component={NewSet} />
          </Stack.Navigator>
        </NavigationContainer>
      </SetProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});
