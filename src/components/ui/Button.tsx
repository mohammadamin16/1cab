import { StyleSheet, ButtonProps, TouchableOpacity, StyleProp, ViewProps, ViewStyle } from "react-native";
import { Body } from "./Body";



interface MyButtonProps {
  text: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export const MyButton: React.FC<MyButtonProps> = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.button, props.style]}>
      <Body text={props.text} style={styles.text} />
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  button: {
    width: 343,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
