import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const DetailsScreen = () => {
  return <View style={styles.container}>
    <Text style={styles.text}>DetailsScreen</Text>
  </View>
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
