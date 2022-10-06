import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  ScrollView,
  RefreshControl,
} from "react-native";
import CardComponent from "./CardComponent";
import InputGroup from "./InputGroup";
import Appstyles from "./index.scss";
import data from "../data/todo";
export default function Index() {
  const [todoList, setTodoList] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    setTodoList(data);
  }, []);

  const addData = (newData) => {
    setTodoList([...todoList, newData]);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TODO LIST</Text>
      <ScrollView
        style={styles.crollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {todoList
          ? todoList.map((task, idx) => {
              return (
                <CardComponent
                  key={task.id + Math.floor(Math.random() * 10000)}
                  task={task}
                  idx={idx}
                />
              );
            })
          : null}
      </ScrollView>
      <InputGroup todoList={todoList} addData={addData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFAF6",
  },
  crollView: {
    marginTop: 20,
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  title: {
    paddingTop: 40,
    paddingHorizontal: 20,
    fontWeight: "800",
    color: "#42C2FF",
    fontSize: 20,
  },
});
