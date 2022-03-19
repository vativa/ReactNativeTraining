import React, { useState, useEffect } from 'react';
import { Image, FlatList, Text, View, StyleSheet } from 'react-native';
import yelp from '../api/yelp';

const DetailsScreen = ({ navigation }) => {
  const [restaurant, setRestaurant] = useState(null);
  const id = navigation.getParam('id');

  useEffect(() => {
    yelp.get(`/${id}`).then(({ data: restaurant }) => {
      // console.log('>>> restaurant ', restaurant);
      setRestaurant(restaurant);
    }).catch(e => {
      throw e.message;
    });
  }, []);
  
  if (!restaurant) {
    return <View style={styles.container}>
      <Text style={styles.text}>Loading...</Text>
  </View>
  }

  const { location, phone } = restaurant;
  const { zip_code, city, address1 } = location;
  return <>
    <View style={styles.header}>
      <Text style={[styles.text, styles.title]}>{restaurant.name}</Text>
      <Text style={styles.text}>{address1}, {zip_code} {city}</Text>
      <Text style={styles.text}>{phone}</Text>
    </View>
    <FlatList
      data={restaurant.photos}
      keyExtractor={(uri => uri)}
      renderItem={({ item: uri }) => <Image source={{ uri }} style={styles.image} />}
      showsVerticalScrollIndicator={false}
      style={styles.list}
    />
  </>;
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
  title: {
    paddingTop: 20,
    paddingHorizontal: 20,
    fontSize: 22,
    fontWeight: 'bold',
  },
  list: {
    alignSelf: 'center',
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 4,
    marginBottom: 10,
  },
});

export default DetailsScreen;
