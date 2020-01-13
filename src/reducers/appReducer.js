import { combineReducers } from 'redux';
import userReducer from 'reducers/user';
import chatReducer from 'reducers/chat';

export default combineReducers({
  userData: userReducer,
  chatData: chatReducer
})