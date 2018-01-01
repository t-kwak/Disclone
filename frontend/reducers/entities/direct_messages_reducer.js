import { RECEIVE_SESSION_PAYLOAD } from '../../actions/session_actions';
import { RECEIVE_MESSAGES } from '../../actions/messages_actions';

const defaultState = {

};

const directMessagesReducer = (state = defaultState, action) => {
  let nextState = Object.assign({}, state);
  switch (action.type){
    case RECEIVE_MESSAGES:
      if(action.payload.directMessages){
        Object.keys(action.payload.directMessages).forEach((key) => {
          nextState[key] = action.payload.directMessages[key];
        });
      }
      return nextState;
    case RECEIVE_SESSION_PAYLOAD:
      return action.payload.directMessages;
    default:
      return state;
  }
};

export default directMessagesReducer;
