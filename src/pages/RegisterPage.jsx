import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { statusRegister: { status } } = useSelector((states) => states.authUser);

  const onRegister = (name, email, password) => {
    dispatch(asyncRegisterUser(name, email, password));
  };

  useEffect(() => {
    if (status === 'success') {
      navigate('/login');
    }
    return (() => {
      dispatch({
        type: 'RESET_STATUS_REGISTER',
      });
    });
  }, [status]);

  return (
    <section className="container-register">
      <article>
        <h2>Create your account</h2>
        <RegisterInput register={onRegister} />
        <p>
          Already have an account?
          <Link to="/login">Login</Link>
        </p>
      </article>
    </section>
  );
}

export default RegisterPage;
