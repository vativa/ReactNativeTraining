import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const HomeScreen = ({}) => {
  return <View style={styles.container}>
    <Text style={styles.text}>HomeScreen</Text>
  </View>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default HomeScreen;
