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

const showDashboard = (state = INITIAL_STATE.SHOW_DASHBOARD, action) => {
  const { type } = action;
  switch (type) {
    case USERS.SHOW_DASHBOARD:
      return !state;
    default:
      return state;
  }
}

const userReducer = combineReducers({
  users,
  showDashboard
});

export default userReducer;