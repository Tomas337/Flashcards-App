import { Text, View } from "react-native";
import Draggable from "./Draggable";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const DisplayOrder = () => {
  return (
    <GestureHandlerRootView>
      <Draggable key={"1"}>
        <Text style={{backgroundColor: "red", width: 30}}>Hello</Text>
      </Draggable>
    </GestureHandlerRootView>
  );
}

export default DisplayOrder;