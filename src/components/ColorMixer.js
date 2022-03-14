import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const ColorMixer = ({ children: label, onLess, onMore }) => {
  return <View style={styles.view}>
    <View style={styles.view}>
      <Button title={`More ${label}`} onPress={onMore} />
    </View>
    <View style={styles.view}>
      <Button title={`Less ${label}`} onPress={onLess} />
    </View>
  </View>;
};

const styles = StyleSheet.create({
  view: {
    marginBottom: 10,
    marginHorizontal: 10,
  },
});

export default ColorMixer;
