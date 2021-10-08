import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'
import {useState,useEffect} from 'react'
import {TextInput,List,Button} from'react-native-paper';
import {AntDesign} from '@expo/vector-icons';


export default function App() {
  const Item = ({ title }) => (
    <View >
      <Text >{title}</Text>
    </View>
  );
  const renderItem = ({ item }) => (
    <Item title={item.key} />
  );
  useEffect(()=>{},[list])
  const [list,setList] = useState([{}]);
  const [input,setInput]=useState('');
  const addTodo=()=>{
    const obj = {key:input}
    if(list.findIndex(e=>e.key==obj.key)==-1){
    setList([...list,obj]);}
    console.log(list);
    // Alert.alert("added")
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.list}>
          {/* {list.map((item,index)=>{
            return <List.Item
            key={index}
            title={item}
            />
          })} */}
          <FlatList
           data ={list}
            renderItem={renderItem}
            keyExtractor={item=>item.key}
          />
          {/* <ScrollView style={{width:'100%'}} >
            {list.map(item=>{
              return <Text>{item.key}</Text>
            })}
          </ScrollView> */}
      </View>
      <View style={styles.add} >
        <TextInput style={{width:'90%',alignSelf:'center'}} onChangeText={(newtext)=>{
          setInput(newtext)
        }}></TextInput>
          <Button mode="contained" 
          style={styles.button}
          onPress={()=>addTodo()}
          // {icon={()=><AntDesign name='plus' size={24} color="white"/>} }
          ><Text style={{fontSize:30}}>+</Text>
          </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    marginTop:Constants.statusBarHeight,
  },
  // list:{
  //   width:200,
  //   height:200
  // }, 
  add:{
    // flex:1,
    // justifyContent:'center',
    // alignSelf:'center'
  },button:
  {
    // flex:1,
    marginTop:10,
    alignSelf:'center',
    borderRadius:100,
    justifyContent:'center',
    width:70,
    height:70,
    
  }
});
