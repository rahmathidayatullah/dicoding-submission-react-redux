import React from 'react';
import {
  string, arrayOf, shape,
} from 'prop-types';
import parse from 'html-react-parser';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import ButtonLike from './ButtonLike';
import ButtonDislike from './ButtonDislike';
import Initials from './Initials';
import getInitials from '../utils';
import 'moment/locale/id';
import { downVoteComment, neutralizeVoteComment, upVoteComment } from '../states/votes/action';

function ItemComment(props) {
  const {
    item: {
      content,
      createdAt,
      downVotesBy,
      id,
      owner,
      upVotesBy,
    },
    idThread,
  } = props;

  moment.locale('id');

  const { authUser = null } = useSelector((states) => states);
  const dispatch = useDispatch();

  function checkExistUser(votesBy) {
    const result = votesBy.filter((item) => item === authUser.id);
    return result.length > 0;
  }

  const likeComment = (upVote) => {
    if (upVote.length && checkExistUser(upVote)) {
      dispatch(neutralizeVoteComment(idThread, id));
    } else {
      dispatch(upVoteComment(idThread, id));
    }
  };

  const unLkComment = (downVote) => {
    if (downVote.length && checkExistUser(downVote)) {
      dispatch(neutralizeVoteComment(idThread, id));
    } else {
      dispatch(downVoteComment(idThread, id));
    }
  };

  return (
    <div style={{ marginTop: '1.5rem' }}>
      <div className="item-comment">
        {/* head */}
        <div className="item-comment__head">
          <div className="item-comment__head__list">
            {/* rounded */}
            <Initials
              className="small-initial"
              initial={getInitials(owner.name)}
            />
            <h5>{owner.name}</h5>
          </div>
          <p>{moment(createdAt).fromNow()}</p>
        </div>
        {/* body */}
        <div className="item-comment__body">
          <p>{parse(content)}</p>
        </div>
        {/* foot */}
        <div className="thread-item-footer">
          <ButtonLike handleClick={() => likeComment(upVotesBy)} nbrLK={upVotesBy.length} />
          <ButtonDislike handleClick={() => unLkComment(downVotesBy)} nbrDLK={downVotesBy.length} />
        </div>
      </div>
    </div>
  );
}

const ownerShapes = {
  avatar: string.isRequired,
  id: string.isRequired,
  name: string.isRequired,
};

const itemShapes = {
  content: string.isRequired,
  createdAt: string.isRequired,
  downVotesBy: arrayOf(string),
  id: string.isRequired,
  upVotesBy: arrayOf(string),
  owner: shape(ownerShapes),
};

ItemComment.propTypes = {
  item: shape(itemShapes),
  idThread: string.isRequired,
};

ItemComment.defaultProps = {
  item: {},
};

export { ItemComment, ownerShapes };
