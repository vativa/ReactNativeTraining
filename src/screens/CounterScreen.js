import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

const CounterScreen = () => {
  const counter = 0;
  
  return <View style={styles.view}>
    <Button title="Count Down" onPress={() => {}} />
    <Text style={[styles.centered, styles.text, styles.view]}>Current count: {counter}</Text>
    <Button title="Count Up" onPress={() => {}} />
  </View>
};

const styles = StyleSheet.create({
  view: {
    padding: 10,
  },
  text: {
    fontSize: 20,
  },
  centered: {
    textAlign: 'center'
  }
});

export default CounterScreen;
