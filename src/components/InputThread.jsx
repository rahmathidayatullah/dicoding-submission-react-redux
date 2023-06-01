import React from 'react';
import { func } from 'prop-types';
import Button from './Button';
import useInput from '../hooks/useInput';

function InputThread({ addThread }) {
  const [title, setTitle] = useInput('');
  const [category, setCategory] = useInput('');
  const [content, setContent] = useInput('');

  const submit = () => {
    addThread(title, content, category);
  };

  return (
    <div className="add-thread__form">
      <input
        className="form-control"
        type="text"
        placeholder="Judul"
        value={title}
        onChange={setTitle}
      />
      <input
        className="form-control"
        type="text"
        value={category}
        onChange={setCategory}
        placeholder="Kategori"
      />
      <textarea
        rows={4}
        className="form-control"
        type="text"
        value={content}
        onChange={setContent}
        placeholder="Isi"
      />
      <Button handleClick={submit}>Buat</Button>
    </div>
  );
}

InputThread.propTypes = {
  addThread: func.isRequired,
};

export default InputThread;
