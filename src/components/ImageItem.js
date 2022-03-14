import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

const ImageItem = ({ image: { title, source, score } }) => {
  return <View style={styles.view}>
    <Image source={source} style={styles.image} />
    <Text style={[styles.text, { fontSize: 50 }]}>{title}</Text>
    <Text style={styles.text}>Image score - {score}</Text>
  </View>;
};

const styles = StyleSheet.create({
  view: {
    margin: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: 'grey',
  },
  image: {},
  text: {
    fontSize: 22,
    color: 'black'
  }
});

export default ImageItem;
 