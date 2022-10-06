import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./components/Login";
import FlexBox from "./components/FlexBox";
import Index from "./components/todo";
export default function App() {
  return (
    <View style={styles.container}>
      <Index />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
