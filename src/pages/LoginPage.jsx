import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';

function loginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authUser: { userAuth = null } } = useSelector(
    (states) => states,
  );
  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  useEffect(() => {
    if (userAuth !== null) {
      navigate('/');
    }
  }, [userAuth]);

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
