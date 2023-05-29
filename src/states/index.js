import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import isPreloadReducer from './isPreload/reducer';
import authUserReducer from './authUser/reducer';
import threadsReducer from './threads/reducer';
import threadReducer from './threadDetail/reducer';
import usersReducer from './users/reducer';
import leaderboardsReducer from './leaderboards/reducer';
import commentReducer from './comment/reducer';

const store = configureStore({
  reducer: {
    isPreload: isPreloadReducer,
    loadingBar: loadingBarReducer,
    authUser: authUserReducer,
    threads: threadsReducer,
    thread: threadReducer,
    users: usersReducer,
    leaderboards: leaderboardsReducer,
    comment: commentReducer,
  },
});

export default store;
