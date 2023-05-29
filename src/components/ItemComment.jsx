import React from 'react';
import ButtonLike from './ButtonLike';
import ButtonDislike from './ButtonDislike';
import Initials from './Initials';
import { string, array, object } from 'prop-types';
import { getInitials } from '../utils';
import parse from 'html-react-parser';
import moment from 'moment';
import 'moment/locale/id';
import { useDispatch,useSelector } from 'react-redux';
import { downVoteComment, neutralizeVoteComment, upVoteComment } from '../states/votes/action';

function ItemComment({
  content,
  createdAt,
  downVotesBy,
  id,
  owner,
  upVotesBy,
  idThread
}) {
  moment.locale('id');

  const { authUser = null } = useSelector((states) => states);
  const dispatch = useDispatch();

  function checkExistUser(votesBy){
    const result = votesBy.filter(item => item === authUser.id);
    return result.length > 0
  }

  const likeComment = (upVote) => {
    if(upVote.length && checkExistUser(upVote)){
      dispatch(neutralizeVoteComment(idThread,id))
    } else {
      dispatch(upVoteComment(idThread,id))
    }
  }

  const unlikeComment = (downVote) =>{
    if(downVote.length && checkExistUser(downVote)){
        dispatch(neutralizeVoteComment(idThread,id))
      } else {
          dispatch(downVoteComment(idThread,id))
    }
  }

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
          <ButtonLike handleClick={()=>likeComment(upVotesBy)} number={upVotesBy.length} />
          <ButtonDislike handleClick={()=>unlikeComment(downVotesBy)} number={downVotesBy.length} />
        </div>
      </div>
    </div>
  );
}

ItemComment.propTypes = {
  content: string.isRequired,
  createdAt: string.isRequired,
  downVotesBy: array,
  id: string.isRequired,
  owner: object,
  upVotesBy: array,
  idThread:string.isRequired
};

export default ItemComment;
