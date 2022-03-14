import React, { useState } from 'react';
import { Button, Text, FlatList, View, StyleSheet } from 'react-native';
import ColorMixer from '../components/ColorMixer';

const less = (num, step = 5) => step < num ? num - step : 0;
const more = (num, step = 5) => step + num < 255 ? num + step : 255;

const ColorMixScreen = () => {
  const [{ r, g, b }, mix] = useState({ r: 255, g: 255, b: 255 });
  console.log('>>> ', r, g, b);
  return <View style={styles.view}>
    <Text style={[styles.text, { margin: 20 }]}>ColorMixScreen</Text>
    <ColorMixer
      onLess={() => mix({ r: less(r, 20), g, b })}
      onMore={() => mix({ r: more(r, 20), g, b })}
    >RED</ColorMixer>
    <ColorMixer
      onLess={() => mix({ r, g: less(g, 20), b })}
      onMore={() => mix({ r, g: more(g, 20), b })}
    >GREEN</ColorMixer>
    <ColorMixer
      onLess={() => mix({ r, g, b: less(b, 20) })}
      onMore={() => mix({ r, g, b: more(b, 20) })}
    >BLUE</ColorMixer>
    <View style={[styles.centered, styles.view]}>
      <Text style={styles.text}>{printColor(r, g, b).hex}, {printColor(r, g, b).rgb}</Text>
      <View style={[styles.box, { backgroundColor: printColor(r, g, b).hex }]} />
    </View>
  </View>;
};

function hex(c) {
  const hex = c.toString(16);
  return hex.length == 1 ? `0${hex}` : hex;
}

function printColor(r, g, b) {
  return { hex: `#${hex(r)}${hex(g)}${hex(b)}`, rgb: `rgb(${r},${g},${b})` };
}

const styles = StyleSheet.create({
  view: {
    marginBottom: 10,
    marginHorizontal: 10,
  },
  centered: {
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  box: {
    width: 100,
    height: 100,
    margin: 10,
    borderWidth: 1,
  },
});

export default ColorMixScreen;
