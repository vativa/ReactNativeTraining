import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  
  const searchApi = async () => {
    try {
      const { data: { businesses } } = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          location: 'san jose'
        }
      });
      console.log('>>> ', businesses);
      setResults(businesses);
      setErrorMessage('');
    } catch (err) {
      console.log('>>> ', err.message);
      setErrorMessage(err.message);
    }
  };
  
  return <View style={styles.container}>
    <SearchBar
      search={term}
      onSearch={setTerm}
      onSubmit={searchApi}
    />
    {errorMessage.length > 0 && <Text style={styles.error}>{errorMessage}</Text>}
    <Text style={styles.text}>We have found {results.length} results</Text>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#999999',
  },
  text: {
    marginVertical: 20,
    fontSize: 20,
  },
  error: {
    fontSize: 16,
    color: 'red',
  }
});

export default SearchScreen;
