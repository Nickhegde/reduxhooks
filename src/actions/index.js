import { USERS, CHAT } from './types';

export const showDashboard = (dispatch) => {
  dispatch({ type: USERS.SHOW_DASHBOARD });
}

export const setLoginIndex = (dispatch, index) => {
  dispatch({
    type: CHAT.SET_LOGIN_INDEX,
    payload: { index }
  });
}

export const fetchUsers = (dispatch) => {
  dispatch({ type: USERS.FETCH_USERS });
}

export const setActiveChatIndex = (dispatch, id) => {
  dispatch({
    type: CHAT.SET_ACTIVE_CHAT,
    payload: { id }
  });
}


export const fetchActiveChat = (dispatch, id) => {
  dispatch({
    type: CHAT.FETCH_ACTIVE_CHAT,
    payload: { id }
  });
}

export const addChat = (dispatch, loginId, id, text) => {
  dispatch({
    type: CHAT.ADD_CHAT,
    payload: { loginId, id, text }
  });
}
