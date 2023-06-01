import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';
import ListThread from '../components/ListThread';
import asyncPopulateUsersAndThreads from '../states/shared/action';

function HomePage() {
  const dispatch = useDispatch();

  const {
    threads: { threads },
    users = [],
  } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
  }));

  return (
    <div>
      {threadList.length ? <ListThread threads={threadList} /> : ''}
      <Link to="/thread/add" className="btn-add-thread">
        <IoIosAddCircleOutline size={50} />
      </Link>
    </div>
  );
}

export default HomePage;
