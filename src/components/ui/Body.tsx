import React from "react";
import { Text, StyleSheet, StyleProp, TextStyle, Platform } from "react-native";

interface BodyProps {
  text: string | undefined
  style?: StyleProp<TextStyle>;
  size?: FontSize;
}


export enum FontSize {
  SMALL = 12,
  MEDIUM = 16,
  LARGE = 20,
  XLARGE = 24,
  XXLARGE = 28,
  XXXLARGE = 32,
}

export const Body: React.FC<BodyProps> = ({ text, style: customStyle, size }) => {
  return <Text style={[styles.myStyle, customStyle, { fontSize: size ?? FontSize.MEDIUM }]}>{text}</Text>
};

const styles = StyleSheet.create({
  myStyle: {
    fontFamily: 'Inter_900Black',
  },
});
