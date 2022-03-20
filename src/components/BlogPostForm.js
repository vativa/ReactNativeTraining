import { Feather } from '@expo/vector-icons';
import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Context } from 'src/store';
import { postActionCreators as pac } from 'src/store/stores/posts';

const BlogPostForm = ({ navigation: { navigate, getParam } }) => {
  const [{ index, ...post }, setPost] = useState({ title: 'change title', content: 'change content' });
  const { dispatch, state: { posts } } = useContext(Context);
// console.log('>>> Form::render::params ', params, posts[params?.index]);
  
  useEffect(() => {
    // console.log('>>> Form::useEffect::params ', params, posts[params?.index]);
    const index = getParam('index');
    isNaN(index) || setPost({ ...posts[index], index });
  }, []);
  
  return <View style={styles.form}>
    <Text style={styles.label}>Enter Title</Text>
    <TextInput
      placeholder="Title"
      autoFocus
      value={post.title}
      onChangeText={title => setPost({ ...post, index, title })}
      autoCapitalize="none"
      autoCorrect={false}
      style={styles.input}
    />
    <Text style={styles.label}>Enter Content</Text>
    <TextInput
      placeholder="Content"
      value={post.content}
      onChangeText={content => setPost({ ...post, index, content })}
      autoCapitalize="none"
      autoCorrect={false}
      style={styles.input}
    />
    <TouchableOpacity
      onPress={() => {
        dispatch(isNaN(index)
          ? pac.createPost(post, () => navigate('Index'))
          : pac.updatePost({ ...post, index }, () => navigate('Preview', { index })),
        );
      }}
      style={styles.iconButton}
    >
      <Text style={styles.buttonLabel}>{isNaN(index) ? 'Create New Post' : `Update Post #${index}`}</Text>
      <Feather name="send" style={styles.icon} />
    </TouchableOpacity>
  </View>;
};

const styles = StyleSheet.create({
  form: {
    padding: 20,
  },
  label: {
    fontSize: 20,
    margin: 10,
  },
  input: {
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 9,
    fontSize: 20,
    borderColor: '#777777',
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: '#3399cc',
  },
  icon: {
    fontSize: 24,
    marginRight: 10,
    color: '#eeeeee',
  },
  buttonLabel: {
    margin: 10,
    fontSize: 24,
    color: '#eeeeee',
  },
});

export default BlogPostForm;
