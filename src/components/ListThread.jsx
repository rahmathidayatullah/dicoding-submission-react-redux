import React from 'react';
import { string, arrayOf, shape, number, array, objectOf } from 'prop-types';
import ItemThread from './ItemThread';

function ListThread({ threads }) {
  return (
    <div className="threads-list">
      <h2>Diskusi tersedia</h2>
      {threads.map((item, index) => {
        return <ItemThread {...item} key={index} />;
      })}
    </div>
  );
}

ListThread.propTypes = {
  threads: arrayOf(
    shape({
      body: string.isRequired,
      category: string.isRequired,
      createdAt: string.isRequired,
      downVotesBy: array.isRequired,
      id: string.isRequired,
      ownerId: string.isRequired,
      title: string.isRequired,
      totalComments: number.isRequired,
      upVotesBy: array.isRequired,
      user: objectOf(string).isRequired,
    })
  ).isRequired,
};

export default ListThread;
