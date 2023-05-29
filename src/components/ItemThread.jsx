import React from 'react';
import { string, array, shape } from 'prop-types';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import ButtonCategory from './ButtonCategory';
import ButtonLike from './ButtonLike';
import ButtonDislike from './ButtonDislike';
import Initials from './Initials';
import { getInitials } from '../utils';
import moment from 'moment';
import 'moment/locale/id';
import { useDispatch,useSelector } from 'react-redux';
import { downVoteThread, neutralizeVoteThread, upVoteThread } from '../states/votes/action';

function ItemThread({
  id,
  category,
  title,
  body,
  downVotesBy,
  upVotesBy,
  user,
  createdAt,
}) {
  
  const { authUser = null } = useSelector((states) => states);
  const dispatch = useDispatch();
  moment.locale('id');

  function checkExistUser(votesBy){
    const result = votesBy.filter(item => item === authUser.id);
    return result.length > 0
  }

  const likeThread = (upVote) => {
    if(upVote.length && checkExistUser(upVote)){
      dispatch(neutralizeVoteThread(id))
    } else {
      dispatch(upVoteThread(id))
    }
  }

  const unlikeThread = (downVote) =>{
    if(downVote.length && checkExistUser(downVote)){
        dispatch(neutralizeVoteThread(id))
      } else {
          dispatch(downVoteThread(id))
    }
  }
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
            number={upVotesBy.length}
            handleClick={()=>likeThread(upVotesBy)}
          />
          <ButtonDislike
            number={downVotesBy.length}
            handleClick={()=>unlikeThread(downVotesBy)}
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
            &nbsp;&nbsp;&nbsp;<span>{moment(createdAt).fromNow()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const userShape = {
  avatar: string.isRequired,
  email: string.isRequired,
  id: string.isRequired,
  name: string.isRequired,
};
ItemThread.propTypes = {
  body: string.isRequired,
  category: string.isRequired,
  title: string.isRequired,
  //   createdAt: string.isRequired,
  downVotesBy: array.isRequired,
  id: string.isRequired,
  //   ownerId: string.isRequired,
  //   totalComments: number.isRequired,
  upVotesBy: array.isRequired,
  user: shape(userShape),
  createdAt: string.isRequired,
};

export default ItemThread;
