import { combineReducers } from 'redux';
import { CHAT } from 'actions/types';
import { INITIAL_STATE } from './initialState';


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

const chatReducer = combineReducers({
  activeChatIndex: setActiveChatIndex,
  activeChat: fetchActiveChat
});

export default chatReducer;