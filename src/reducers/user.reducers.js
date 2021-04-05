import { FETCH_USER } from '../constants';

export const userReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_USER:
      return [...state, action.payload];
    default:
      return state;
  }
};
