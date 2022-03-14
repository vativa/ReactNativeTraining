import React, { useReducer } from 'react';
import { Button, Text, FlatList, View, StyleSheet } from 'react-native';
import ColorMixer from '../components/ColorMixer';

const STEP = 20;
const change = (c, s) => {
  if (s > 0) return c + s < 255 ? c + s : 255;
  return (-1 * s) < c ? c + s : 0;
}

const RED = 'RED';
const GREEN = 'GREEN';
const BLUE = 'BLUE';

const reducer = (state, action) => {
  switch (action.type) {
    case RED:
      return { ...state, r: change(state.r, action.payload) };
    case GREEN:
      return { ...state, g: change(state.g, action.payload) };
    case BLUE:
      return { ...state, b: change(state.b, action.payload) };
    default:
      return { ...state };
  }
};

const ColorMixScreen = () => {
  const [{ r, g, b }, dispatch] = useReducer(reducer, { r: 255, g: 255, b: 255 });
  return <View style={styles.view}>
    <Text style={[styles.text, { margin: 20 }]}>ColorMixScreen</Text>
    <ColorMixer
      onLess={() => dispatch({ type: RED, payload: -1 * STEP })}
      onMore={() => dispatch({ type: RED, payload: STEP })}
    >RED</ColorMixer>
    <ColorMixer
      onLess={() => dispatch({ type: GREEN, payload: -1 * STEP })}
      onMore={() => dispatch({ type: GREEN, payload: STEP })}
    >GREEN</ColorMixer>
    <ColorMixer
      onLess={() => dispatch({ type: BLUE, payload: -1 * STEP })}
      onMore={() => dispatch({ type: BLUE, payload: STEP })}
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
