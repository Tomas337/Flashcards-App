import React from "react";
import { PanGestureHandler, PanGestureHandlerGestureEvent } from "react-native-gesture-handler";
import Animated, { useAnimatedGestureHandler, useAnimatedReaction, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
//import { MARGIN, getOrder, getPosition } from "../utils/utils";

type Context = {
  translateX: number;
  translateY: number;
}

// TODO: param props
const Draggable = ({ children/*, positions, id */}: any) => {
  //const position = getPosition(positions.value[id]);
  const translateX = useSharedValue(100);
  const translateY = useSharedValue(100);

  const isGestureActive = useSharedValue(false);

  /*useAnimatedReaction(
    () => positions.value[id],
    newOrder => {
      //const newPostions = getPosition(newOrder);
      translateX.value = withTiming(newPostions.x);
      translateY.value = withTiming(newPostions.y);
    },
  );*/
  
  const panGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, Context>({
    onStart: (event, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
      isGestureActive.value = true;
    },
    onActive: (event, context) => {
      translateX.value = context.translateX + event.translationX;
      translateY.value = context.translateY + event.translationY;

      /*const oldOrder = positions.value[id];
      const newOrder = getOrder(translateX.value, translateY.value);
      if (oldOrder !== newOrder) {
        const idToSwap = Object.keys(positions.value).find(
          key => positions.value[key] === newOrder,
        );
        if (idToSwap) {
          const newPostions = JSON.parse(JSON.stringify(positions.value));
          newPostions[id] = newOrder;
          newPostions[idToSwap] = oldOrder;
          positions.value = newPostions;
        }
      }*/
    },
    onEnd: () => {
      //const destination = getPosition(positions.value[id]);
      //translateX.value = withTiming(destination.x);
      //translateY.value = withTiming(destination.y);
    },
    onFinish: () => {
      isGestureActive.value = false;
    }
  });

  const animatedStyle = useAnimatedStyle(() => {
    const zIndex = isGestureActive.value ? 1000 : 1;
    const scale = isGestureActive.value ? 1.1 : 1;
    return {
      position: 'absolute',
      //margin: MARGIN * 2,
      zIndex,
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
        {scale},
      ],
    };
  });

  return (
    <Animated.View>
      <PanGestureHandler onGestureEvent={panGestureEvent}>
        <Animated.View style={[animatedStyle]}>{children}</Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};

export default Draggable;