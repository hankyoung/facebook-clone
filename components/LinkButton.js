import * as React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function LinkButton(props) {
  return (
    <TouchableOpacity style={{ ...styles.button, ...props.style }}>
      <Text style={styles.text}>{props.children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {},
  text: {
    color: "#5669D0",
    fontWeight: "500",
    fontSize: 16,
  },
});
