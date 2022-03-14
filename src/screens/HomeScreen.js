import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation: { navigate, state: { params: { routes } } } }) => {
  return <>
    <View style={styles.header}>
      <Text style={styles.text}>HomeScreen</Text>
    </View>
    {routes.map((route, index) => {
      console.log('>>> ', route, index);
      return <Button key={route} navigate={navigate} name={route} />;
    })}
  </>;
};

const Button = ({ navigate, name }) => {
  return <TouchableOpacity onPress={() => navigate(name)}>
    <Text style={styles.button}>Go to {name} Screen</Text>
  </TouchableOpacity>;
};

const styles = StyleSheet.create({
  header: {
    padding: 10
  },
  text: {
    fontSize: 30,
  },
  button: {
    marginVertical: 3,
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    backgroundColor: 'lightblue',
  }
});

export default HomeScreen;
