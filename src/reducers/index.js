import { combineReducers } from 'redux';
import { postReducer } from './post.reducers';
import { userReducer } from './user.reducers';

export default combineReducers({
  posts: postReducer,
  users: userReducer,
});
