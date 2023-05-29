import React from 'react';
import { func } from 'prop-types';
import useInput from '../hooks/useInput';
import Button from './Button';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="login-input">
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
      <Button handleClick={() => login({ email, password })}>Login</Button>
    </form>
  );
}

LoginInput.propTypes = {
  login: func.isRequired,
};

export default LoginInput;
