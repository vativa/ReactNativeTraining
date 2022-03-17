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
    <Text style={styles.details}>{category} | {restaurants.length || 0} places found</Text>
  </View>
};

const styles = StyleSheet.create({
  list: {
    marginBottom: 20,
  },
  details: {
    marginHorizontal: 10,
    fontSize: 18,
  },
});

export default RestaurantList;
