import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState('');
  return <View style={styles.searchbar}>
    <EvilIcons name="search" size={35} />
    <TextInput
      placeholder="Search"
      value={term}
      onChangeText={setTerm}
      onEndEditing={() => onSubmit(term)}
      autoCapitalize="none"
      autoCorrect={false}
      style={styles.input}
    />
  </View>;
};

const styles = StyleSheet.create({
  searchbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginBottom: 20,
    padding: 5,
    paddingRight: 10,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#dddddd',
    backgroundColor: '#f0eeee',
  },
  input: {
    flex: 1,
    marginLeft: 7,
    padding: 5,
    fontSize: 20,
    // borderWidth: StyleSheet.hairlineWidth,
  },
});

export default SearchBar;
