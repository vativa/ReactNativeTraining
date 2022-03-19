import React from 'react';
import { Text, StyleSheet } from 'react-native';

const PreviewScreen = ({}) => {
  return <>
    <Text style={styles.text}>PreviewScreen</Text>
  </>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default PreviewScreen;
