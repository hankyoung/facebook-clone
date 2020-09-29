import * as React from "react";
import { StyleSheet, TextInput } from "react-native";
import { componentWidth } from "../utils/Constants";

export default function CustomTextInput(props) {
  return (
    <TextInput
      style={{ ...styles.text, ...props.style }}
      placeholder={props.placeholder}
      secureTextEntry={props.secureTextEntry}
    />
  );
}

const styles = StyleSheet.create({
  text: {
    borderWidth: 0.5,
    borderRadius: 2,
    borderColor: "grey",
    width: componentWidth,
    height: 40,
    paddingLeft: 10,
  },
});
