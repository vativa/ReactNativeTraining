import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
  const firstLine = "This is the ComponentsScreen";
  const secondLine = [
    <Text style={{ color: 'red' }}>This is the content of</Text>,
    " the 2nd line"
  ];
  return <>
    <Text style={styles.text}>{firstLine}</Text>
    <Text style={styles.text}>{secondLine}</Text>
  </>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ComponentsScreen;
