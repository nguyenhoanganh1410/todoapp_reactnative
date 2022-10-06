import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Alert,
  TouchableWithoutFeedback,
} from "react-native";
import data from "../data/todo";

export default function InputGroup({ todoList, addData }) {
  const [taskInput, setTaskInput] = useState("");
  console.log(todoList);
  const handleClick = () => {
    if (!taskInput) {
      Alert.alert("Your Task is empty!");
      return;
    }
    const idCurrent = Math.floor(Math.random() * 10000);
    // data.push({
    //   id: idCurrent,
    //   text: taskInput,
    // });

    addData({
      id: idCurrent,
      text: taskInput,
    });

    setTaskInput("");
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TextInput
        style={styles.input}
        onChangeText={(input) => setTaskInput(input)}
        value={taskInput}
        placeholder="Your Task ..."
      />
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
      <TouchableOpacity style={styles.add} onPress={() => handleClick()}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
      {/* </TouchableWithoutFeedback> */}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    flex: 1,
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#FDFAF6",
    justifyContent: "space-between",
    width: "100%",
  },
  input: {
    borderColor: "#42C2FF",
    borderRadius: 6,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 10,
    flexGrow: 1,
    marginRight: 6,
  },

  add: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#42C2FF",

    height: 50,
    width: 50,
    borderRadius: 8,
  },

  text: {
    color: "#fff",
    fontSize: 20,
  },
});
