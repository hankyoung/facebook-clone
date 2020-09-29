import * as React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { componentWidth } from "../utils/Constants";

export default function CustomButton(props) {
  return (
    <TouchableOpacity style={{ ...styles.button, ...props.style }}>
      <Text style={{ ...styles.text, color: props.style.textColor }}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#494CF8",
    width: componentWidth,
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    opacity: 0.7,
    fontWeight: "bold",
  },
});
