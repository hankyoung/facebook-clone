import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import LoginScreen from "./screens/LoginScreen";
import Momo from "./screens/Momo";

export default function App() {
  return (
    <View style={styles.safeArea}>
      <StatusBar style="light" />
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
