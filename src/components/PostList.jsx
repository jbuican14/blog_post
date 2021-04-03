import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../actions';

const PostList = () => {
  const dispatch = useDispatch();

  useState(() => {
    dispatch(fetchPosts());
  });

  return (
    <div>
      <h1> Post List</h1>
    </div>
  );
};

export default PostList;
