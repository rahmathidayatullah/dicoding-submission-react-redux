import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import InputThread from '../components/InputThread';
import { createThread } from '../states/threads/action';

function AddThreadPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    threads: { successCreate },
  } = useSelector((states) => states);

  const addThread = (title, content, category) => {
    dispatch(createThread(title, content, category));
  };

  useEffect(() => {
    if (successCreate) {
      navigate('/');
      dispatch({
        type: 'RESET_STATUS',
      });
    }
  }, [dispatch, successCreate]);

  return (
    <section className="add-thread">
      <h2 className="add-thread__title">Buat Diskusi Baru</h2>
      <InputThread addThread={addThread} />
    </section>
  );
}

export default AddThreadPage;
