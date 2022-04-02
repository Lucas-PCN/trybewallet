import { ADD_USER } from '../actions/index';

const INITIAL_USER_STATE = {
  email: '',
};

const user = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
  case ADD_USER:
    return ({
      ...state,
      email: action.userEmail,
    });
  default:
    return state;
  }
};

export default user;
