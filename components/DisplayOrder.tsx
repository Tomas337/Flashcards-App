import { Text, View, StyleSheet } from "react-native";
import Draggable from "./Draggable";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Animated, { useSharedValue } from "react-native-reanimated";
import Dropzone from "./Dropzone";
import * as React from "react";
import { HeightsContext } from "../context/HeightsContext";
import { useContext } from "react";

// TODO: draggable's position overlaps dropzone => change height state and increase View's size
const DisplayOrder = () => {
  const positions = useSharedValue({"image": 1, "text1": 2, "text2": 3});
  const heights = useContext(HeightsContext);

  return (
    <View style={{flexDirection: "row", height: 90}}>
      <GestureHandlerRootView style={{backgroundColor: "blue"}}>
        <Draggable key={"image"} id={"image"} positions={positions}>
          <Text style={styles.draggableText}>image</Text>
        </Draggable>
        <Draggable key={"text1"} id={"text1"} positions={positions}>
          <Text style={styles.draggableText}>text1</Text>
        </Draggable>
        <Draggable key={"text2"} id={"text2"} positions={positions}>
          <Text style={styles.draggableText}>text2</Text>
        </Draggable>
        <Dropzone color="red" text="1" height={heights["1"]} />
        <Dropzone color="green" text="2" height={heights["2"]} />
        <Dropzone color="blue" text="3" height={heights["3"]} />
      </GestureHandlerRootView>
    </View>
  );
}

const styles = StyleSheet.create({
  draggableText: {
    backgroundColor: "gray",
    width: 30,
    height: 30,
    marginLeft: 10
  },
})

export default DisplayOrder;