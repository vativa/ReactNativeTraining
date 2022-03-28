import React, { useContext } from 'react';
import BlogPostForm from 'src/components/BlogPostForm';
import { Context } from 'src/store';
import { postActionCreators as pac } from 'src/store/stores/posts';

const FormScreen = ({ navigation: { navigate, getParam } }) => {
  const { state, dispatch } = useContext(Context);
  const id = getParam('index');
  const newId = state.posts.length;
  const post = state.posts[id] || { title: `title#${newId}`, content: `content#${newId}` };
  const callback = () => isNaN(id) ? navigate('Index') : navigate('Preview', { index: id })
  
  return <BlogPostForm
    post={{ ...post, id }}
    onSubmit={post => dispatch(pac.managePost(post, callback))}
  />;
};

export default FormScreen;
