import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchThreadDetail } from '../states/threadDetail/action';
import ButtonCategory from '../components/ButtonCategory';
// import ButtonLike from '../components/ButtonLike';
// import ButtonDislike from '../components/ButtonDislike';
import InputComment from '../components/InputComment';
import ListComment from '../components/ListComment';
import parse from 'html-react-parser';
import { getInitials } from '../utils';
import Initials from '../components/Initials';
import moment from 'moment';
import 'moment/locale/id';
import { commentThread } from '../states/comment/action';

function DetailPage() {
  const dispatch = useDispatch();
  const { thread = null } = useSelector((states) => states);
  const { id } = useParams();

  const submitComment = ({ comment }) => {
    dispatch(commentThread(id, comment));
  };

  useEffect(() => {
    dispatch(fetchThreadDetail(id));
  }, [id, dispatch]);

  if (!thread) {
    return null;
  }
  moment.locale('id');
  return (
    <div>
      <ButtonCategory category={thread.category} />
      <h1>{thread.title}</h1>
      <p style={{ marginTop: '1rem' }}>{parse(thread.body)}</p>
      <div className="thread-item-footer">
        <div className="thread-item-footer__list">
          <span>Dibuat oleh</span>
          &nbsp;&nbsp;&nbsp;
          <div className="thread-item-footer__list__1">
            <Initials
              className="medium-initial"
              initial={getInitials(thread.owner.name)}
            />
            {thread.owner.name}
          </div>
          &nbsp;&nbsp;&nbsp;<span>{moment(thread.createdAt).fromNow()}</span>
        </div>
      </div>
      <InputComment submitComment={submitComment} />
      {thread.comments.length ? (
        <ListComment comments={thread.comments} idThread={id} />
      ) : (
        ''
      )}
    </div>
  );
}

export default DetailPage;
