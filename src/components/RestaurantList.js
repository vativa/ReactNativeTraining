import React from "react";
import { FlatList, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";
import RestaurantView from "./RestaurantView";

const RestaurantList = ({ restaurants, category, navigation }) => {

  if (!restaurants) return null;

  return <>
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={restaurants}
      keyExtractor={({ id }, index) => id}
      renderItem={({ item }) => {
        return (
        <TouchableOpacity onPress={() => navigation.navigate('Details', { id: item.id })}>
          <RestaurantView restaurant={item} />
        </TouchableOpacity>
        );
      }}
    />
    <View style={styles.details}>
      <Text style={[styles.bold, styles.text]}>{category}</Text>
      <Text style={styles.text}> | {restaurants.length || 0} places found</Text>
    </View>
  </>
};

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignContent: 'center',
    marginHorizontal: 22,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default withNavigation(RestaurantList);
