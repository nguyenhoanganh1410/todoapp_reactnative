import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  ScrollView,
  Dimensions,
} from "react-native";

export default function Index() {
  const [ori, setOri] = useState("Portrait");

  const handleLayoutChange = (params) => {
    console.log("l");
    //get width, height of screen currently
    const { width, height } = Dimensions.get("window");
    const orientation = height > width ? "Portrait" : "Landscape";
    setOri(orientation);
  };

  return (
    <View style={styles.container} onLayout={() => handleLayoutChange()}>
      <Text>{ori}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
