import React, { useContext } from 'react';
import { Button, FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Context } from 'src/store';
import { actionCreators as postActionCreators } from 'src/store/stores/posts';

const HomeScreen = ({}) => {
  const { state: { posts }, dispatch } = useContext(Context);
  // console.log('>>> HomeScreen ', posts);
  
  return <View style={styles.container}>
    <Text style={[styles.text, styles.header]}>MagicWeb.org Blog</Text>
    <Button
      title="Generate New Blog Post"
      onPress={() => dispatch(postActionCreators.createPost(posts.length + 1))}
    />
    <FlatList
      data={posts}
      keyExtractor={post => post.title}
      renderItem={({ item: { id, title } }) => {
        return <View style={styles.listRow}>
          <Text style={[styles.text, styles.post]}>{title} - {id}</Text>
          <TouchableOpacity
            onPress={() => dispatch(postActionCreators.deletePost(id))}
          >
            <View style={styles.trashWrapper}>
              <Feather name="trash" style={styles.trash} />
            </View>
          </TouchableOpacity>
        </View>;
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
    fontSize: 30,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  list: {
    marginTop: 20,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  listRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  post: {
    marginBottom: 5,
  },
  trashWrapper: {
    padding: 15,
    borderRadius: 50,
    borderWidth: StyleSheet.hairlineWidth,
  },
  trash: {
    fontSize: 20,
  },
});

export default HomeScreen;
