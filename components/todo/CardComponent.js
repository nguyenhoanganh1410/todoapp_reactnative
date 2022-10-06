import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import Appstyles from "./index.scss";
export default function CardComponent({ task, idx }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={idx % 2 == 0 ? styles.evenNumber : styles.oldNumber}>
        <Text style={styles.number}>{idx + 1}</Text>
      </View>
      <Text style={styles.text}>{task.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 6,
    marginBottom: 10,
  },

  evenNumber: {
    backgroundColor: "#D9CB50",
    paddingHorizontal: 5,
    paddingVertical: 5,

    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    height: 40,
    width: 40,
    marginRight: 10,
  },

  oldNumber: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: "#42C2FF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    height: 40,
    width: 40,
    marginRight: 10,
  },
  number: {
    color: "#fff",
    fontSize: 16,
  },

  text: {
    textTransform: "capitalize",
  },
});
