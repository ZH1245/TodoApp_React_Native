import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { useState, useEffect } from "react";
import { TextInput, Button } from "react-native-paper";

import Item from "./src/components/Item";

export default function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const renderItem = ({ item, index }) => {
    console.log(item, index);
    return (
      <Item
        key={index}
        item={item}
        delTodo={() => {
          let l = [...list];
          l.splice(index, 1);
          setList(l);
        }}
      />
    );
  };

  const addTodo = () => {
    const obj = { text: input };
    if (list.length == 0) {
      setList([obj]);
      setInput("");
    } else if (
      list.findIndex((e) => e.text == obj.text) == -1 &&
      input.length != 0
    ) {
      setList([...list, obj]);
      setInput("");
    }

    console.log(list);
    // Alert.alert("added")
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>{"ADD TODO's:"}</Text>
      <View style={styles.list}>
        {list.length == 0 && (
          <Text style={styles.todoText}>{"NOthing to Show"}</Text>
        )}
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
        />
      </View>
      <View style={styles.add}>
        <TextInput
          value={input}
          style={{ width: "95%", alignSelf: "center" }}
          onChangeText={(newtext) => {
            setInput(newtext);
          }}
        ></TextInput>
        <Button
          mode="contained"
          style={styles.button}
          onPress={addTodo}
          // {icon={()=><AntDesign name='plus' size={24} color="white"/>} }
        >
          <Text style={{ fontSize: 30 }}>+</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: Constants.statusBarHeight,
  },
  list: {
    height: 400,
  },

  button: {
    marginTop: 7,
    alignSelf: "center",
    borderRadius: 100,
    justifyContent: "center",
    width: 70,
    height: 70,
  },
});
