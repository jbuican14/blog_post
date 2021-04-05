import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useState(() => {
    dispatch(fetchPostsAndUsers());
  }, [dispatch]);

  return (
    <div className="ui relaxed divided list">
      <h1> Post List</h1>
      {posts.length > 0 &&
        posts.map((p) => (
          <div className="item" key={p.id}>
            <i className="large middle aligned icon user" />
            <div className="content">
              <div className="description">
                <h2>{p.title}</h2>
                <p>{p.body}</p>
              </div>
            </div>
            <UserHeader userId={p.userId} />
          </div>
        ))}
    </div>
  );
};

export default PostList;
