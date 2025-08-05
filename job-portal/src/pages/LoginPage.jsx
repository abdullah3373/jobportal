// src/pages/LoginPage.jsx
import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      // Hardcoded credentials check
      const isAdmin = values.email === 'admin@portal.com' && values.password === '123456';
      const isUser = values.email === 'user@portal.com' && values.password === '123456';

      if (isAdmin || isUser) {
        login(values.email);
        navigate(isAdmin ? '/admin/jobs' : '/jobs');
      } else {
        alert('Invalid credentials');
      }
    },
  });

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <h1>Login</h1>
        <input
          name="email"
          {...formik.getFieldProps('email')}
          placeholder="Email"
          className={formik.touched.email && formik.errors.email ? 'input-error' : ''}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error-message">{formik.errors.email}</div>
        ) : null}
        <input
          name="password"
          type="password"
          {...formik.getFieldProps('password')}
          placeholder="Password"
          className={formik.touched.password && formik.errors.password ? 'input-error' : ''}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="error-message">{formik.errors.password}</div>
        ) : null}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;