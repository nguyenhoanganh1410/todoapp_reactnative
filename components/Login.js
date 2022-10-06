import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
import Appstyles from "./Login.scss";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text>Welcom to MyFirst APP</Text>
      <Image
        source={{
          uri: "https://reactnative.dev/docs/assets/p_cat2.png",
        }}
        style={Appstyles.image}
      />
      <TextInput
        style={Appstyles.input}
        placeholder="Enter your email"
        // onChangeText={(newText) => setText(newText)}
        defaultValue={email}
      />

      <TextInput
        style={Appstyles.input}
        placeholder="Enter your password"
        // onChangeText={(newText) => setText(newText)}
        secureTextEntry={true}
      />

      <Button 
      
       style={Appstyles.button} title="Sign In" color="#009933" />

      <Text style={Appstyles.text}>You dont have account? Sign up</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});
