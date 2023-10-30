import { Pressable, Text, View } from "react-native";
import { useState } from "react";
import AccordionHeader from "../components/AccordionHeader";
import Cards from "../components/Cards";
import DisplayOrder from "../components/DisplayOrder";
import { HeightsProvider } from "../context/HeightsContext";

export default function NewSet(): JSX.Element {
  const [showDisplayOrder, setShowDisplayOrder] = useState(false);
  const [showCards, setShowCards] = useState(false);
  
  return (
    <View>
      <AccordionHeader
        onPress={() => setShowDisplayOrder(!showDisplayOrder)}
        showContent={showDisplayOrder}
        label="Display order"
      />
      {showDisplayOrder && (
        <HeightsProvider>
          <DisplayOrder />
        </HeightsProvider>
      )}
      <AccordionHeader
        onPress={() => setShowCards(!showCards)}
        showContent={showCards}
        label="Cards"
      />
      {showCards && (
        <Cards />
      )}
    </View>
  );
}