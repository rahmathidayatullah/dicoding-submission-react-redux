import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Button from './Button';

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Required'),
});

function RegisterInput({ register }) {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={RegisterSchema}
      onSubmit={(values) => {
        const { name, email, password } = values;
        register(name, email, password);
      }}
    >
      {({ errors, touched }) => (
        <Form className="register-input">
          <Field name="name" className="form-control" placeholder="Name" />
          {errors.name && touched.name ? (
            <div>{errors.name}</div>
          ) : null}
          <Field name="email" className="form-control" placeholder="Email" />
          {errors.email && touched.email ? (
            <div>{errors.email}</div>
          ) : null}
          <Field name="password" className="form-control" placeholder="Password" />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
          <Button type="submit">Register</Button>
        </Form>
      )}
    </Formik>

  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
