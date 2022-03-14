import React, { useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  
  return <View style={styles.view}>
    <Button title="Count Up" onPress={() => setCounter(counter + 1)} />
    <Text style={[styles.centered, styles.text, styles.view]}>{counter}</Text>
    <Button title="Count Down" onPress={(props) => setCounter(counter - 1)} />
  </View>;
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
