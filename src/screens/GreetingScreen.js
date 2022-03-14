import React from 'react';
import { Text, StyleSheet } from 'react-native';

const GreetingScreen = ({ name = 'Tim' }) => {
  const header = "Getting started with React Native";
  const subHeader = `My name is ${name} and I'm pleased to refresh my skills`;
  
  return <>
    <Text style={[styles.common, styles.header]}>{header}</Text>
    <Text style={[styles.common, styles.subHeader]}>{subHeader}</Text>
  </>
};

const styles = StyleSheet.create({
  common: {
    textAlign: 'center'
  },
  header: {
    fontSize: 30
  },
  subHeader: {
    fontSize: 20
  }
});

export default GreetingScreen;
