import { FlatList, Text, Image, View, StyleSheet, Dimensions } from 'react-native';
import { Card, PlaySetProps } from '../types/Types';
import * as React from 'react'

const PlaySet: React.FC<PlaySetProps> = ({ route }) => {
  const { set } = route.params;
  let flatListRef = React.useRef<FlatList<Card> | null>();
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const onViewRef = React.useRef(({ changed }: { changed: any }) => {
    if (changed[0].isViewable) {
      setCurrentIndex(changed[0].index);
    }
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={set.cards}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              {/*<Image source={require(item.image)} />*/}
              <Text>{item.image}</Text>
              <Text>{item.text1}</Text>
              <Text>{item.text2}</Text>
            </View>
          );
        }}
        horizontal
        showsVerticalScrollIndicator={false}
        //showsHorizontalScrollIndicator={false}
        pagingEnabled
        ref={(ref) => {
          flatListRef.current = ref
        }}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 95 }}
        onViewableItemsChanged={onViewRef.current}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: Dimensions.get('window').width,
  },
});

export default PlaySet;