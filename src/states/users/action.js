import api from '../../utils/api';
import { setStatusRegisterActionCreator } from '../authUser/action';

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
  RECEIVE_LIST_USERS: 'RECEIVE_LIST_USERS',
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

function asyncRegisterUser(name, email, password) {
  return async (dispatch) => {
    try {
      await api.register(name, email, password);
      const statusRegister = {
        status: 'success',
      };
      dispatch(setStatusRegisterActionCreator(statusRegister));
    } catch (error) {
      const statusRegister = {
        status: 'fail',
      };
      dispatch(setStatusRegisterActionCreator(statusRegister));
      alert(error.message);
    }
  };
}

function fetchUsers() {
  return async (dispatch) => {
    try {
      const users = await api.getAllUsers();
      dispatch(receiveUsersActionCreator(users));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType, receiveUsersActionCreator, asyncRegisterUser, fetchUsers,
};
