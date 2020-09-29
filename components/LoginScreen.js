import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Constants from "expo-constants";
import FaceBook from "../assets/facebook.png";
import CustomTextInput from "./CustomTextInput";
import CustomButton from "./CustomButton";
import LinkButton from "./LinkButton";
import CustomDivider from "./CustomDivider";
import { screenWidth } from "../utils/Constants";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image style={{ width: screenWidth, height: 220 }} source={FaceBook} />
        <CustomTextInput
          style={{ marginTop: 20, borderBottomWidth: 0 }}
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
