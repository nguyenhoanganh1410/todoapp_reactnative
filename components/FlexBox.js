import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";

export default function Login() {
  return (
    <View style={styles.containe}>
      <View style={styles.top}>
        <Text>TOP</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottomLeft}></View>
        <View style={styles.bottomRight}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containe: {
    flex: 1,
    flexDirection: "column",
  },
  top: {
    backgroundColor: "#FFCCB3",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottom: {
    backgroundColor: "#333",
    flex: 1,
    flexDirection: "row",
  },
  bottomRight: {
    flex: 1,
    backgroundColor: "#F0F2B6",
  },
  bottomLeft: {
    flex: 1,
    backgroundColor: "#FEDB39",
  },
});
