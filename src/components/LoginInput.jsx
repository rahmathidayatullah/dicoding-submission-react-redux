import React from 'react';
import { func } from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Button from './Button';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Required'),
});

function LoginInput({ login }) {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        const { email, password } = values;
        login({ email, password });
      }}
    >
      {({ errors, touched }) => (
        <Form className="login-input">
          <Field name="email" className="form-control" placeholder="Email" />
          {errors.email && touched.email ? (
            <div>{errors.email}</div>
          ) : null}
          <Field name="password" className="form-control" placeholder="Password" />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
          <Button type="submit">Login</Button>
        </Form>
      )}
    </Formik>
  );
}

LoginInput.propTypes = {
  login: func.isRequired,
};

export default LoginInput;
