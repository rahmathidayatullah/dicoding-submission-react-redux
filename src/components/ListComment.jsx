import React from 'react';
import ItemComment from './ItemComment';
import { array,string } from 'prop-types';

function ListComment({ comments,idThread }) {
  return (
    <div style={{ marginTop: '2.5rem' }}>
      <h3>Komentar ({comments.length})</h3>
      {comments.map((items, index) => {
        return <ItemComment key={index} {...items} idThread={idThread} />;
      })}
    </div>
  );
}

ListComment.propTypes = {
  comments: array.isRequired,
  idThread:string.isRequired
};

export default ListComment;
