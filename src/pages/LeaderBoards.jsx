import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeaderBoards } from '../states/leaderboards/action';
import ListLeaderBoards from '../components/ListLeaderBoards';

function LeaderBoards() {
  const dispatch = useDispatch();
  const { leaderboards = [] } = useSelector((states) => states);

  useEffect(() => {
    dispatch(fetchLeaderBoards());
  }, [dispatch]);

  return (
    <div>
      <h2>Klasmen Pengguna Aktif</h2>
      {leaderboards.length ? (
        <ListLeaderBoards leaderboards={leaderboards} />
      ) : (
        ''
      )}
    </div>
  );
}

export default LeaderBoards;
