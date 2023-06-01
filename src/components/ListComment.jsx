import React from 'react';
import {
  arrayOf, shape, string,
} from 'prop-types';
import { ItemComment, ownerShapes } from './ItemComment';

function ListComment({ comments, idThread }) {
  return (
    <div style={{ marginTop: '2.5rem' }}>
      <h3>
        Komentar (
        {comments.length}
        )
      </h3>
      {comments.map((items) => <ItemComment key={items.id} item={items} idThread={idThread} />)}
    </div>
  );
}

const commentsShapes = {
  content: string,
  createdAt: string,
  downVotesBy: arrayOf(string),
  id: string.isRequired,
  owner: shape(ownerShapes),
};

ListComment.propTypes = {
  comments: arrayOf(shape(commentsShapes)),
  idThread: string.isRequired,
};

ListComment.defaultProps = {
  comments: [],
};

export default ListComment;
