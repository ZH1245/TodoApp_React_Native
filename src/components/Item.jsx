import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors, IconButton } from "react-native-paper";

const Item = ({ item: { text }, delTodo }) => {
  console.log(text);
  return (
    <View style={styles.todo}>
      <Text style={styles.todoText}>{text}</Text>
      <IconButton
        style={styles.btn}
        onPress={delTodo}
        icon={() => <AntDesign name="delete" size={19} color="black" />}
      ></IconButton>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  todo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 2,
    marginBottom: 2,
    backgroundColor: Colors.red100,
    width: "95%",
    padding: 10,
  },
  todoText: {
    padding: 4,
    fontSize: 18,
    flex: 0.7,
  },
  btn: {
    flex: 0.3,
  },
});
