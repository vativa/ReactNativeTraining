import React, { useContext } from 'react';
import BlogPostForm from 'src/components/BlogPostForm';
import { Context } from 'src/store';
import { actionCreators as pac } from 'src/store/stores/posts';

const FormScreen = ({ navigation: { pop, getParam } }) => {
  const { dispatch, getState } = useContext(Context);
  const { posts } = getState();
  const index = getParam('index');
  const post = posts[index] || {
    title: 'title',
    content: 'content',
  };
  
  const managePost = isNaN(post.id) ? pac.createPost : pac.updatePost;

  const callback = () => {
    dispatch(pac.fetchPosts());
    pop();
  };

  return <BlogPostForm post={post} onSubmit={post => dispatch(managePost(post, callback))} />;
};

export default FormScreen;
