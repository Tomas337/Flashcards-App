import { View, Text, Pressable, StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

type AccordionHeaderProps = {
  onPress: () => void;
  showContent: boolean;
  label: string
}

const AccordionHeader = ({ onPress, showContent, label }: AccordionHeaderProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        { opacity: pressed ? 0.5 : 1.0 }
      ]}
    >
      <View style={styles.content}>
        <MaterialIcons
          name={showContent ? "keyboard-arrow-down" : "keyboard-arrow-right"}
          size={30}
        />
        <Text>{label}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default AccordionHeader;