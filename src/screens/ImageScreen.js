import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ImageItem from '../components/ImageItem';

const ImageScreen = () => {
  const images = [
    { title: 'Beach', source: require('../../assets/beach.jpg'), score: 7 },
    { title: 'Forest', source: require('../../assets/forest.jpg'), score: 5 },
    { title: 'Mountain', source: require('../../assets/mountain.jpg'), score: 9 }
  ];
  return <FlatList
    data={images}
    keyExtractor={({ title }) => title}
    renderItem={({ item, index }) => {
      return <ImageItem image={item} key={index} />;
    }}
  />;
};

const styles = StyleSheet.create({
  some: {}
});

export default ImageScreen;
