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
      const chats = payload.chatBox;
      if (chats.length !== 0) {
        const outerIndex = payload.loginId <= payload.id ? payload.loginId : payload.id,
          innerIndex = outerIndex === payload.id ? payload.loginId : payload.id;
        chats.map((chat, index) => {
          if (index === outerIndex && chat[innerIndex]) {
            state = chat[innerIndex];
          }
          else {
            if (!(index === outerIndex && chat[innerIndex] && state)) {
              state = [];
            }
          }
        })
      }
      return state;
    default:
      return state;
  }
}

const addChat = (state = INITIAL_STATE.CHAT, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHAT.ADD_CHAT:
      const outerIndex = payload.loginId <= payload.id ? payload.loginId : payload.id,
        innerIndex = outerIndex === payload.id ? payload.loginId : payload.id;
      state.map((chat, index) => {
        if (index === outerIndex) {
          if (chat[innerIndex]) {
            chat[innerIndex].push(payload.text)
          } else {
            chat[innerIndex] = [payload.text]
          }
        }
      });

      if (!state[outerIndex]) {
        const chatArray = [];
        const chatObject = {};
        chatArray.push(payload.text);
        chatObject[innerIndex] = chatArray;
        state[outerIndex] = chatObject;
      }
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