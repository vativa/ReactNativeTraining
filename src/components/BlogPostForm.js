import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const BlogPostForm = ({ post: initPost, onSubmit }) => {
  const [post, setPost] = useState({ ...initPost });
  
  return <View style={styles.form}>
    <Text style={styles.label}>Enter Title</Text>
    <TextInput
      placeholder="Title"
      autoFocus
      value={post.title}
      onChangeText={title => setPost({ ...post, title })}
      autoCapitalize="none"
      autoCorrect={false}
      style={styles.input}
    />
    <Text style={styles.label}>Enter Content</Text>
    <TextInput
      placeholder="Content"
      value={post.content}
      onChangeText={content => setPost({ ...post, content })}
      autoCapitalize="none"
      autoCorrect={false}
      style={styles.input}
    />
    <TouchableOpacity onPress={() => onSubmit(post)} style={styles.iconButton}>
      <Text style={styles.buttonLabel}>{isNaN(post.id) ? 'Create New Post' : `Update Post #${post.id}`}</Text>
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
