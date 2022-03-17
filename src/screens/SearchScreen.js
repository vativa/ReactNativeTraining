import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import RestaurantList from '../components/RestaurantList';

const SearchScreen = () => {
  const [results, errorMessage, searchApi] = useResults();

  return <View style={styles.container}>
    <SearchBar onSubmit={searchApi} />
    {errorMessage.length > 0 && <Text style={styles.error}>{errorMessage}</Text>}
    <ScrollView>
      <RestaurantList restaurants={results.c} category="Cost Effective" />
      <RestaurantList restaurants={results.b} category="Bit Pricier" />
      <RestaurantList restaurants={results.a} category="Big Spender" />
    </ScrollView>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#999999',
  },
  error: {
    fontSize: 16,
    color: 'red',
  }
});

export default SearchScreen;
