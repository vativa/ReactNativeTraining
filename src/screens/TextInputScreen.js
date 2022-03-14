import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const TextInputScreen = () => {
  return <View style={styles.view}>
    <Text style={[styles.header, styles.text]}>TextInputScreen</Text>
    <TextInput
      autoCorrect={false}
      autoCapitalize="none"
      style={styles.input}
    />
  </View>
};

const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
  header: {
    margin: 15,
  },
  text: {
    fontSize: 20
  },
  input: {
    margin: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#69f',
  }
});

export default TextInputScreen;
