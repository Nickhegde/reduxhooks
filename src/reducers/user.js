import { combineReducers } from 'redux';
import { USERS } from 'actions/types';
import { INITIAL_STATE } from './initialState';

const users = (state = INITIAL_STATE.USERS, action) => {
  const { type, payload } = action;
  switch (type) {
    case USERS.FETCH_USERS:
      return state;
    case USERS.ADD_USERS:
      return [...state, payload.name];
    default:
      return state;
  }
}

const userReducer = combineReducers({
  users
});

export default userReducer;