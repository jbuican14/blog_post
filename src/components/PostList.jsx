import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../actions';

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useState(() => {
    dispatch(fetchPosts());
  });

  return (
    <div>
      <h1> Post List</h1>
      {console.log(posts)}
    </div>
  );
};

export default PostList;
