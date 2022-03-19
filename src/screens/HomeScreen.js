import React, { useContext } from 'react';
import { Button, FlatList, Text, View, StyleSheet } from 'react-native';
import BlogContext from '../context/BlogContext';
import { A } from '../context';

const HomeScreen = ({}) => {
  const { posts, dispatch } = useContext(BlogContext);
  
  const genPost = () => {
    dispatch({ type: A.CREATE_POST, payload: { title: `Blog Post #${posts.length + 1}` } });
  };
  
  return <View style={styles.container}>
    <Text style={[styles.header, styles.text]}>HomeScreen</Text>
    <Button title="Generate New Blog Post" onPress={genPost} />
    <FlatList
      data={posts}
      keyExtractor={post => post.title}
      renderItem={({ item: post }) => {
        return <Text style={styles.post}>{post.title}</Text>;
      }}
      style={styles.list}
    />
  </View>;
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
  header: {
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  post: {
    padding: 5,
    marginBottom: 5,
  },
  list: {
    paddingTop: 5,
    // borderWidth: StyleSheet.hairlineWidth,
  },
});

export default HomeScreen;
