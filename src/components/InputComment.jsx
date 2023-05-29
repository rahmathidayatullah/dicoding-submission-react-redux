import React from 'react';
import useInput from '../hooks/useInput';
import Button from './Button';
import { func } from 'prop-types';

function InputComment({ submitComment }) {
  const [comment, setComment, setValue] = useInput('');

  const submit = () => {
    submitComment({ comment, setComment });
    setValue('');
  };

  return (
    <div style={{ marginTop: '2.5rem' }}>
      <h3>Beri Komentar</h3>
      <textarea
        rows={4}
        className="form-control"
        type="text"
        value={comment}
        onChange={setComment}
        placeholder="Komentar"
      />
      <Button handleClick={submit}>Kirim</Button>
    </div>
  );
}

InputComment.propTypes = {
  submitComment: func.isRequired,
};

export default InputComment;
