import React from 'react';
import { Text, StyleSheet } from 'react-native';

const DetailsScreen = () => {
  return <>
    <Text style={styles.text}>DetailsScreen</Text>
  </>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 20,
  },
});

export default DetailsScreen;
