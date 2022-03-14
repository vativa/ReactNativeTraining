import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

const ColorScreen = () => {
  const [rgb, hex] = randomColor();
  return <View style={styles.view}>
    <Text style={styles.text}>ColorScreen</Text>
    <Button title="Add a Color" onPress={() => {}} />
    <View style={styles.view}>
      <Text style={styles.text}>{hex}, {rgb}</Text>
      <View style={[styles.box, { backgroundColor: hex }]} />
    </View>
  </View>
};

function hex(c) {
  const hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g= Math.floor(Math.random() * 256);
  const b= Math.floor(Math.random() * 256);
  return [`rgb(${r}, ${g}, ${b})`, `#${hex(r)}${hex(g)}${hex(b)}`]
};

const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
  text: {
    fontSize: 20,
  },
  box: {
    width: 100,
    height: 100,
    margin: 10,
    borderWidth: 1,
    backgroundColor: 'rgb(0, 255, 0)'
  }
});

export default ColorScreen;
