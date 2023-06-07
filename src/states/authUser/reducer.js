import { ActionType } from './action';

const initialState = {
  statusRegister: {
    status: '',
  },
  userAuth: null,
};

function authUserReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionType.SET_AUTH_USER:
      return {
        ...state,
        userAuth: action.payload.authUser,
      };
    case ActionType.UNSET_AUTH_USER:
      return {
        ...state,
        userAuth: null,
      };
    case ActionType.REGISTER_STATUS:
      return {
        ...state,
        statusRegister: action.payload.status,
      };
    case 'RESET_STATUS_REGISTER':
      return {
        ...state,
        statusRegister: {
          ...state.statusRegister, status: '',
        },
      };
    default:
      return state;
  }
}

export default authUserReducer;
