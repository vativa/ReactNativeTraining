import { Feather } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Context } from 'src/store';

const PreviewScreen = ({ navigation: { state: { params: { index } } } }) => {
  const { state: { posts }, dispatch } = useContext(Context);
  const { id, title, content } = posts[index];
  // console.log('>>> Preview::render ', index);
  return <>
    <Text style={styles.text}>index: {index}</Text>
    <Text style={styles.text}>title: {title}</Text>
    <Text style={styles.text}>content: {content}</Text>
  </>;
};

PreviewScreen.navigationOptions = ({ navigation: { navigate, state: { params: { index }} } }) => {
  return {
    headerRight: () => {
      // console.log('>>> Preview::options ', index);
      return (
        <TouchableOpacity onPress={() => navigate('Form', { index })} style={styles.headerIconWrapper}>
          <EvilIcons name="pencil" style={styles.icon} style={styles.icon} />
        </TouchableOpacity>
    );
    },
  };
};

const styles = StyleSheet.create({
  text: {
    padding: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  headerIconWrapper: {
    marginRight: 20,
    padding: 15,
    // borderWidth: StyleSheet.hairlineWidth,
  },
  icon: {
    fontSize: 24,
  },
});

export default PreviewScreen;
