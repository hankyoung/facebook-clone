import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Momo() {
  return (
    <View style={styles.container}>
      <CustomText style={{ fontWeight: "bold", margin: 60 }}>Hello!</CustomText>
      <CustomText>HANK YOUNG</CustomText>
      <CustomText>0943709990</CustomText>
      <PasswordInput />
      <CustomButton />
      <ActionButtons />
    </View>
  );
}

function CustomText(props) {
  return (
    <Text
      style={[
        {
          color: "white",
          opacity: 0.8,
          marginBottom: 10,
        },
        props.style,
      ]}
    >
      {props.children}
    </Text>
  );
}

function PasswordInput() {
  const [text, setText] = useState("");

  return (
    <View style={styles.passwordContainer}>
      <Feather style={{ color: "grey", marginLeft: 15 }} name={"lock"} />
      <TextInput
        secureTextEntry={true}
        style={{
          color: "grey",
          textAlign: "center",
          width: 240,
          fontSize: 16,
        }}
        placeholder={"Enter password"}
        value={text}
        onChangeText={(text) => setText(text)}
      />
    </View>
  );
}

function CustomButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={{ color: "#fff", opacity: 0.7 }}>Login</Text>
    </TouchableOpacity>
  );
}

function ActionButtons() {
  return (
    <View style={styles.actionContainer}>
      <TouchableOpacity>
        <CustomText>FORGET PASSWORD</CustomText>
      </TouchableOpacity>
      <TouchableOpacity>
        <CustomText>LOG OUT</CustomText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#bd006d",
  },
  passwordContainer: {
    backgroundColor: "#fff",
    opacity: 0.9,
    width: 280,
    borderRadius: 24,
    height: 48,
    marginTop: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#98005a",
    width: 280,
    height: 38,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 12,
  },
  actionContainer: {
    width: 280,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 32,
    marginTop: 10,
  },
});
