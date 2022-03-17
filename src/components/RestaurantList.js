import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import RestaurantView from "./RestaurantView";

const RestaurantList = ({ restaurants, category }) => {
  // console.log('>>> RestaurantList ', restaurants);
  return <View style={styles.list}>
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={restaurants}
      keyExtractor={({ id }, index) => id}
      renderItem={({ item }) => <RestaurantView restaurant={item} />}
    />
    <View style={styles.details}>
      <Text style={[styles.bold, styles.text]}>{category}</Text>
      <Text style={styles.text}> | {restaurants.length || 0} places found</Text>
    </View>
  </View>
};

const styles = StyleSheet.create({
  list: {
    marginBottom: 20,
  },
  details: {
    flexDirection: 'row',
    alignContent: 'center',
    marginHorizontal: 22,
  },
  text: {
    fontSize: 18,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default RestaurantList;
