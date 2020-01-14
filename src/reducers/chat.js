import { combineReducers } from 'redux';
import { CHAT } from 'actions/types';
import { INITIAL_STATE } from './initialState';

const setLoginIndex = (state = INITIAL_STATE.LOGIN_INDEX, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHAT.SET_LOGIN_INDEX:
      return payload.index;
    default:
      return state;
  }
}


const setActiveChatIndex = (state = INITIAL_STATE.ACTIVE_CHAT_INDEX, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHAT.SET_ACTIVE_CHAT:
      return payload.id;
    default:
      return state;
  }
}

const fetchActiveChat = (state = INITIAL_STATE.ACTIVE_CHAT, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHAT.FETCH_ACTIVE_CHAT:
      return [];
    default:
      return state;
  }
}

const addChat = (state = INITIAL_STATE.CHAT, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHAT.ADD_CHAT:
      const outerIndex = payload.loginId <= payload.id ? payload.loginId : payload.id;
      const innerIndex = outerIndex === payload.id ? payload.loginId : payload.id;
      const chatArray = [];
      const chatObject = {};
      chatArray.push(payload.text);
      chatObject[innerIndex] = chatArray;
      state[outerIndex] = chatObject;
      return state;
    default:
      return state;
  }
}

const chatReducer = combineReducers({
  loginIndex: setLoginIndex,
  activeChatIndex: setActiveChatIndex,
  activeChat: fetchActiveChat,
  chat: addChat
});

export default chatReducer;