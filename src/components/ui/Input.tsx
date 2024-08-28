import React, { useState } from "react"
import { TextInput, View, StyleSheet, StyleProp, TextStyle } from "react-native"
import { Body } from "./Body";



interface InputProps {
  value: string;
  label?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  hint?: string;
  styles?: StyleProp<TextStyle>;
}

export const MyInput: React.FC<InputProps> = (props) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  return (
    <View style={styles.container}>
      <Body text={props.label} style={styles.label} />
      <TextInput
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={props.value}
        placeholder={props.placeholder}
        style={[props.styles, styles.input, isFocused && styles.active]}
        onChangeText={props.onChange}
      />
      {props.hint &&
        <Body text={props.hint} />
      }
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    gap: 8
  },
  input: {
    width: 343,
    height: 36,
    borderRadius: 8,
    backgroundColor: "#E8E8E8",
    paddingHorizontal: 16,
  },
  active: {
    borderColor: "#000",
    borderWidth: 1,
    backgroundColor: "#E8E8E8",
  },
  label: {
    width: 343,
    height: 16,
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 16,
    color: "#000"
  },
  hint: {
    width: 343,
    height: 16,
    fontFamily: "Uber Move Text",
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 16,
    color: "#000000"
  }
})


