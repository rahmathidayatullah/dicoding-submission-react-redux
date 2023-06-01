import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';

function loginPage() {
  const dispatch = useDispatch();
  const state = useSelector((states) => states);
  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  useEffect(() => {}, [dispatch, state]);

  return (
    <section className="container-login">
      <h1>Form Login</h1>
      <LoginInput login={onLogin} />
      <p>
        Don&apos;t have an account?
        &nbsp;
        <Link to="/register">Register</Link>
      </p>
    </section>
  );
}

export default loginPage;
