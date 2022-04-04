import React, { useContext } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Context } from 'src/store';

const PreviewScreen = ({ navigation }) => {
  const { getState } = useContext(Context);
  const { posts } = getState();
  const index = navigation.getParam('index');
  return (
    <>
      <Text style={styles.text}>id: {posts[index]?.id}</Text>
      <Text style={styles.text}>index: {index}</Text>
      <Text style={styles.text}>title: {posts[index]?.title}</Text>
      <Text style={styles.text}>content: {posts[index]?.content}</Text>
    </>
  );
};

PreviewScreen.navigationOptions = ({ navigation: { navigate, getParam } }) => {
  return {
    headerRight: () => {
      // console.log('>>> Preview::options ', index);
      return (
        <TouchableOpacity
          onPress={() => navigate('Form', { index: getParam('index') })}
          style={styles.headerIconWrapper}
        >
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
