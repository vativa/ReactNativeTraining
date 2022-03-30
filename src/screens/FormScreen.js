import React, { useContext } from 'react';
import BlogPostForm from 'src/components/BlogPostForm';
import { Context } from 'src/store';

const FormScreen = ({ navigation: { pop, getParam } }) => {
  const {
    state: { posts },
    posts: { createPost, updatePost, fetchPosts },
  } = useContext(Context);
  const index = getParam('index');
  const post = posts[index] || {
    title: 'title',
    content: 'content',
  };
  
  const managePost = isNaN(post.id) ? createPost : updatePost;

  const callback = () => {
    fetchPosts();
    pop();
  };

  return <BlogPostForm post={post} onSubmit={post => managePost(post, callback)} />;
};

export default FormScreen;
