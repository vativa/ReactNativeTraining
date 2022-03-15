import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const LayoutScreen = () => {
  return <View style={styles.screen}>
    <View style={[styles.box, styles.one]}>
      <Text style={styles.text}>Text#1</Text>
    </View>
    <View style={[styles.box, styles.two]}>
      <Text style={styles.text}>Text#2</Text>
    </View>
    <View style={[styles.box, styles.three]}>
      <Text style={styles.text}>Text#3</Text>
    </View>
  </View>;
};

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    ...StyleSheet.absoluteFillObject,
    borderWidth: StyleSheet.hairlineWidth,
  },
  box: {
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'red',
  },
  one: {
    backgroundColor: 'salmon',
    opacity: 0.5,
  },
  two: {
    top: 100,
    backgroundColor: 'seagreen',
    opacity: 0.5,
  },
  three: {
    backgroundColor: 'orchid',
    opacity: 0.5,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
  },
});

export default LayoutScreen;
