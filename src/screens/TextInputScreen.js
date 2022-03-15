import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const TextInputScreen = () => {
  const [password, setPassword] = useState('');
  return <View style={styles.screen}>
    <Text style={[styles.text, styles.label]}>Enter your password:</Text>
    <TextInput
      value={password}
      onChangeText={setPassword}
      autoCorrect={false}
      autoCapitalize="none"
      style={styles.input}
    />
    {password.length > 5 ||
    <Text style={[styles.text, styles.label, styles.error]}>
      Password must be longer than 5 characters
    </Text>
    }
  </View>;
};

const styles = StyleSheet.create({
  screen: {
    margin: 10,
    paddingTop: 10,
  },
  text: {
    fontSize: 20
  },
  label: {
    paddingHorizontal: 30,
  },
  error: {
    color: '#cc3333',
  },
  input: {
    margin: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#6699ff',
  }
});

export default TextInputScreen;
