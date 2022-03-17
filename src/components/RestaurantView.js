import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'

const RestaurantView = ({ restaurant: { name, rating, image_url } }) => {
  // console.log('>>> restaurant ', name, image_url);
  return <View style={styles.view}>
    <Image source={{ uri: image_url }} style={styles.image} />
    <View style={styles.details}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>Rated {rating}</Text>
    </View>
  </View>
};

const styles = StyleSheet.create({
  view: {
    justifyContent: 'flex-end',
    width: 300,
    height: 200,
    marginHorizontal: 5,
    marginBottom: 10,
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 5,
    borderColor: 'salmon',
    borderWidth: 1,
  },
  details: {
    justifyContent: 'center',
    paddingHorizontal: 7,
    height: 50,
    margin: 9,
    backgroundColor: '#ffffff',
    opacity: 0.7,
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  text: {
    fontSize: 18,
  },
});

export default RestaurantView;
