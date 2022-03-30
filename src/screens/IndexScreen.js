import React, { useContext, useEffect } from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Context } from 'src/store';

const IndexScreen = ({ navigation: { navigate, addListener } }) => {
  const {
    state: { posts },
    posts: { fetchPosts, deletePost },
  } = useContext(Context);
  
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        inverted
        data={posts}
        keyExtractor={(post, index) => index}
        renderItem={({ item: post, index }) => {
          return (
            <View style={[styles.row, index ? styles.borderTop : styles.borderTopBottom]}>
              <TouchableOpacity onPress={() => navigate('Preview', { index })} style={styles.post}>
                <Text style={styles.text}>
                  {post.id}@[{index}] "{post.title}" | "{post.content}"
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deletePost(post.id, fetchPosts)} style={styles.iconWrapper}>
                <Feather name="trash" style={styles.icon} />
              </TouchableOpacity>
            </View>
          );
        }}
        style={styles.list}
        contentContainerStyle={{ flex: 1, justifyContent: 'flex-end' }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation: { navigate } }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigate('Form')} style={styles.headerIconWrapper}>
        <Feather name="plus" style={styles.icon} style={styles.icon} />
      </TouchableOpacity>
    ),
  };
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
  list: {
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  borderTop: {
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  borderBottom: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  borderTopBottom: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  post: {
    height: 55,
    flex: 1,
    justifyContent: 'center',
    margin: 10,
  },
  iconWrapper: {
    padding: 15,
    borderRadius: 50,
    borderWidth: StyleSheet.hairlineWidth,
  },
  headerIconWrapper: {
    marginRight: 20,
    padding: 15,
    // borderWidth: StyleSheet.hairlineWidth,
  },
  icon: {
    fontSize: 20,
  },
});

export default IndexScreen;
