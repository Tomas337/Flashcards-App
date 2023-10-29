import { Text, View } from "react-native";
import Draggable from "./Draggable";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";

const DisplayOrder = () => {
  const positions = useSharedValue({"image": 1, "text1": 2, "text2": 3});

  return (
    <View style={{flexDirection: "row", height: 90}}>
      <View>
        <Text>1</Text>
        <Text>2</Text>
        <Text>3</Text>
      </View>
      <GestureHandlerRootView style={{backgroundColor: "blue"}}>
        <Draggable key={"image"} id={"image"} positions={positions}>
          <Text style={{backgroundColor: "red", width: 30}}>image</Text>
        </Draggable>
        <Draggable key={"text1"} id={"text1"} positions={positions}>
          <Text style={{backgroundColor: "red", width: 30}}>text1</Text>
        </Draggable>
        <Draggable key={"text2"} id={"text2"} positions={positions}>
          <Text style={{backgroundColor: "red", width: 30}}>text2</Text>
        </Draggable>
      </GestureHandlerRootView>
    </View>
  );
}

export default DisplayOrder;