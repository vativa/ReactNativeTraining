import React, { useState } from 'react';
import { Button, FlatList, Text, View, StyleSheet } from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  return <View style={styles.view}>
    <View style={styles.header}>
      <Text style={styles.text}>ColorScreen</Text>
    </View>
    <View style={[styles.view, { marginBottom: 20 }]}>
      <Button title={`Add a Color (${colors.length} added)`} onPress={() => {
        setColors([randomColor(), ...colors]);
      }} />
    </View>
    <FlatList
      data={colors}
      keyExtractor={({ hex }) => hex}
      renderItem={({ item: { hex, rgb }, index }) => {
        return <View style={styles.view}>
          <Text style={styles.text}>{hex}, {rgb}</Text>
          <View style={[styles.box, { backgroundColor: hex }]} />
        </View>;
      }}
    />
  </View>;
};

function hex(c) {
  const hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return { hex: `#${hex(r)}${hex(g)}${hex(b)}`, rgb: `rgb(${r}, ${g}, ${b})` };
};

const styles = StyleSheet.create({
  header: {
    margin: 20,
  },
  view: {
    marginBottom: 10,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 20,
  },
  box: {
    width: 100,
    height: 100,
    margin: 10,
    borderWidth: 1,
  }
});

export default ColorScreen;
