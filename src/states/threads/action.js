import api from '../../utils/api';

const ActionType = {
  FETCH_LIST_THREADS: 'FETCH_LIST_THREADS',
  RECEIVE_COMMENT: 'RECEIVE_COMMENT',
  SUCCESS_CREATE_THREAD: 'SUCCESS_CREATE_THREAD',
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.FETCH_LIST_THREADS,
    payload: {
      threads,
    },
  };
}

function fetchThreads() {
  return async (dispatch) => {
    try {
      const threads = await api.getAllThreads();
      dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
      alert(`${error.message} login terlebih dahulu`);
    }
  };
}

function createThread(title, content, category) {
  return async (dispatch) => {
    try {
      await api.createThread(title, content, category);
      dispatch(fetchThreads());
      dispatch({
        type: ActionType.SUCCESS_CREATE_THREAD,
      });
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType, fetchThreads, createThread, receiveThreadsActionCreator,
};
