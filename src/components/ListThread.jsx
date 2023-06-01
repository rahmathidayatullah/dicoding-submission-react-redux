import React from 'react';
import {
  string, arrayOf, shape, number, objectOf,
} from 'prop-types';
import ItemThread from './ItemThread';

function ListThread({ threads }) {
  return (
    <div className="threads-list">
      <h2>Diskusi tersedia</h2>
      {threads.map((item) => <ItemThread item={item} key={item.id} />)}
    </div>
  );
}

ListThread.propTypes = {
  threads: arrayOf(
    shape({
      body: string.isRequired,
      category: string.isRequired,
      createdAt: string.isRequired,
      downVotesBy: arrayOf(string),
      id: string.isRequired,
      ownerId: string.isRequired,
      title: string.isRequired,
      totalComments: number.isRequired,
      upVotesBy: arrayOf(string),
      user: objectOf(string).isRequired,
    }),
  ).isRequired,
};

export default ListThread;
