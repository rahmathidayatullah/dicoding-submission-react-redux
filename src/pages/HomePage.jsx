import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListThread from '../components/ListThread';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';

function HomePage() {
  const dispatch = useDispatch();

  const { threads = [], users = [] } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
  }));

  return (
    <div>{threadList.length ? <ListThread threads={threadList} /> : ''}</div>
  );
}

export default HomePage;
