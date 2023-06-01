import React from 'react';
import {
  string, shape, arrayOf,
} from 'prop-types';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import ButtonCategory from './ButtonCategory';
import ButtonLike from './ButtonLike';
import ButtonDislike from './ButtonDislike';
import Initials from './Initials';
import getInitials from '../utils';
import 'moment/locale/id';
import { downVoteThread, neutralizeVoteThread, upVoteThread } from '../states/votes/action';
import { userShapes } from './ItemLeaderBoards';

function ItemThread(props) {
  const {
    item: {
      id,
      category,
      title,
      body,
      downVotesBy,
      upVotesBy,
      user,
      createdAt,
    },
  } = props;

  const { authUser = null } = useSelector((states) => states);
  const dispatch = useDispatch();
  moment.locale('id');

  function checkExistUser(votesBy) {
    const result = votesBy.filter((item) => item === authUser.id);
    return result.length > 0;
  }

  const likeThread = (upVote) => {
    if (upVote.length && checkExistUser(upVote)) {
      dispatch(neutralizeVoteThread(id));
    } else {
      dispatch(upVoteThread(id));
    }
  };

  const unlikeThread = (downVote) => {
    if (downVote.length && checkExistUser(downVote)) {
      dispatch(neutralizeVoteThread(id));
    } else {
      dispatch(downVoteThread(id));
    }
  };
  return (
    <div className="thread-item">
      <ButtonCategory category={category} />
      <div className="thread-item__content">
        <h4>
          <Link to={`/threads/${id}`}>{title}</Link>
        </h4>
        <p>{parse(body)}</p>
        <div className="thread-item-footer">
          <ButtonLike
            nbrLK={upVotesBy.length}
            handleClick={() => likeThread(upVotesBy)}
          />
          <ButtonDislike
            nbrDLK={downVotesBy.length}
            handleClick={() => unlikeThread(downVotesBy)}
          />
          <div className="thread-item-footer__list">
            <span>Dibuat oleh</span>
            &nbsp;&nbsp;&nbsp;
            <div className="thread-item-footer__list__1">
              <Initials
                className="medium-initial"
                initial={getInitials(user.name)}
              />
              {user.name}
            </div>
            &nbsp;&nbsp;&nbsp;
            <span>{moment(createdAt).fromNow()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const itemShapes = {
  body: string.isRequired,
  category: string.isRequired,
  title: string.isRequired,
  createdAt: string.isRequired,
  downVotesBy: arrayOf(string),
  id: string.isRequired,
  upVotesBy: arrayOf(string),
  user: shape(userShapes),
};

ItemThread.propTypes = {
  item: shape(itemShapes),
};

ItemThread.defaultProps = {
  item: {},
};

export default ItemThread;
