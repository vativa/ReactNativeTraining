import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import RestaurantList from '../components/RestaurantList';

const SearchScreen = () => {
  const [results, errorMessage, searchApi] = useResults();

  return <>
    <SearchBar onSubmit={searchApi} />
    {errorMessage.length > 0 && <Text style={styles.error}>{errorMessage}</Text>}
    <ScrollView>
      <RestaurantList restaurants={results.c} category="Cost Effective" />
      <RestaurantList restaurants={results.b} category="Bit Pricier" />
      <RestaurantList restaurants={results.a} category="Big Spender" />
    </ScrollView>
  </>;
};

const styles = StyleSheet.create({
  error: {
    fontSize: 16,
    color: 'red',
  }
});

export default SearchScreen;
