import React from "react";
import { Text, StyleSheet, StyleProp, TextStyle, Platform } from "react-native";

interface BodyProps {
  text: string;
  style: StyleProp<TextStyle>;
}

export const Body: React.FC<BodyProps> = ({ text, style: customStyle }) => {
  return <Text style={[styles.myStyle, customStyle]}>{text}</Text>
};

const styles = StyleSheet.create({
  myStyle: {
    fontFamily: 'Inter_900Black',
    fontSize: 30
  },
});
