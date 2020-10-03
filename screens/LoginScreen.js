import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import Constants from "expo-constants";
import FaceBook from "../assets/facebook.png";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import CustomDivider from "../components/CustomDivider";
import { screenWidth } from "../utils/Constants";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image style={{ width: screenWidth, height: 220 }} source={FaceBook} />
        <CustomTextInput
          style={{ marginTop: 20, borderBottomColor: "white" }}
          placeholder={"Phone number or Email"}
        />
        <CustomTextInput placeholder={"Password"} secureTextEntry={true} />
        <CustomButton style={{ marginTop: 15, textColor: "#fff" }}>
          Login
        </CustomButton>
        <LinkButton style={{ marginTop: 28 }}>Forget password?</LinkButton>
        <LinkButton style={{ marginTop: 24 }}>Go back</LinkButton>
      </View>
      <View style={{ alignItems: "center" }}>
        <CustomDivider style={{ marginBottom: 16 }}>OR</CustomDivider>
        <CustomButton
          style={{
            marginBottom: 20,
            backgroundColor: "#E6F1FF",
            textColor: "#4A4FF4",
          }}
        >
          Create a new account
        </CustomButton>
      </View>
    </View>
  );
}

function LinkButton(props) {
  return (
    <TouchableOpacity style={{ ...styles.button, ...props.style }}>
      <Text
        style={{
          color: "#5669D0",
          fontWeight: "500",
          fontSize: 16,
        }}
      >
        {props.children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#003d87",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
