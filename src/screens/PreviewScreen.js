import { Feather } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Context } from 'src/store';

const PreviewScreen = ({ navigation }) => {
  const {
    state: { posts },
  } = useContext(Context);
  const id = navigation.getParam('index');
  const { title, content } = posts[id];
  // console.log('>>> Preview::render ', id);
  return (
    <>
      <Text style={styles.text}>index: {id}</Text>
      <Text style={styles.text}>title: {title}</Text>
      <Text style={styles.text}>content: {content}</Text>
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
