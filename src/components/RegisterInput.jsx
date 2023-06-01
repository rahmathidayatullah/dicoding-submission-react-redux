import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import Button from './Button';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="register-input">
      <input
        className="form-control"
        type="text"
        value={name}
        onChange={onNameChange}
        placeholder="Name"
      />
      <input
        className="form-control"
        type="text"
        value={email}
        onChange={onEmailChange}
        placeholder="Email"
      />
      <input
        className="form-control"
        type="password"
        value={password}
        onChange={onPasswordChange}
        placeholder="Password"
      />
      <Button handleClick={() => register(name, email, password)}>
        Register
      </Button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
