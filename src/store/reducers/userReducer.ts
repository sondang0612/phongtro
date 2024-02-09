import { Action } from 'redux';

const initState = {
  userData: {},
};

const userReducer = (state = initState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
