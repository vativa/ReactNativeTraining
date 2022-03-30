import React, { useContext } from 'react';
import BlogPostForm from 'src/components/BlogPostForm';
import { Context } from 'src/store';

const FormScreen = ({ navigation: { pop, getParam } }) => {
  const {
    state: { posts },
    posts: { managePost },
  } = useContext(Context);
  const index = getParam('index');
  const post = posts[index] || {
    title: 'title',
    content: 'content',
  };

  return <BlogPostForm post={post} onSubmit={post => managePost(post, pop)} />;
};

export default FormScreen;
