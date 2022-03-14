import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend#1', age: 11 },
    { name: 'Friend#2', age: 12 },
    { name: 'Friend#3', age: 13 },
    { name: 'Friend#4', age: 14 },
    { name: 'Friend#5', age: 15 },
    { name: 'Friend#6', age: 16 },
    { name: 'Friend#7', age: 17 },
    { name: 'Friend#8', age: 18 },
    { name: 'Friend#9', age: 19 },
    { name: 'Friend#10', age: 20 },
    { name: 'Friend#11', age: 21 },
  ];
  return <>
    <Text style={[styles.centered, styles.header]}>That's the ListScreen</Text>
    <FlatList
      data={friends}
      keyExtractor={friends => friends.name}
      renderItem={({ item: friend, index: id }) => {
        console.log('>>>', friend, id);
        return <Text style={[styles.centered, styles.listItem]}>{friend.name} - Age {friend.age}</Text>;
      }}
    />
  </>;
};

const styles = StyleSheet.create({
  centered: {
    textAlign: 'center'
  },
  header: {
    fontSize: 30,
    marginVertical: 20
  },
  listItem: {
    marginVertical: 10,
    fontSize: 50
  }
});

export default ListScreen;
