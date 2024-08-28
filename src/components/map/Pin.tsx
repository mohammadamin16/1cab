import { View, StyleSheet, StyleProp, ViewStyle } from "react-native"
import { Body } from "../ui/Body"

interface PinProps {
  text: string
  style?: StyleProp<ViewStyle>
}

export const Pin: React.FC<PinProps> = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <Body text={props.text} style={styles.text} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 58,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#040509",
  }
  ,
  text: {
    color: "#FFFFFF",
  }
})

