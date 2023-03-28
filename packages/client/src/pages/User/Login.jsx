import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { UserService } from '../../services/UserService';
import './login.scss';

export const Login = () => {
  const { formState: { errors }, handleSubmit, register } = useForm();
  const [ isLoggedIn, setLogin ] = useState(Cookies.get(`isLoggedIn`));

  const onLogin = async (data) => {
    // eslint-disable-next-line no-console
    console.log(await UserService.login(data));
    // TODO: need to necessary changes.
    Cookies.set(`isLoggedIn`, true);
    setLogin(true);
  };
  if (!isLoggedIn) {
    return (
      <div className="login-form d-flex align-items-center justify-content-center">
        <Form onSubmit={handleSubmit(onLogin)}>
          <h5>Please Login to your account</h5>
          <div className="form-group">
            <label className="font-weight-bold" htmlFor="user-name">User Name</label>
            <input
              id="user-name"
              type="text"
              placeholder="Enter your User Name"
              className="form-control"
              {...register(`username`, { required: true })}
            />
            {errors.username?.type === `required` && <p className="error" role="alert"> * User Name is required</p>}
          </div>
          <div className="form-group">
            <label className="font-weight-bold" htmlFor="passwd">Password</label>
            <input
              id="passwd"
              type="password"
              className="form-control"
              placeholder="Enter your password"
              {...register(`password`, { required: true })}
            />
            {errors.password?.type === `required` && <p className="error" role="alert"> * Password is required</p>}
          </div>
          <Button variant="primary" type="submit">
            Sign In
          </Button>
        </Form>
      </div>
    );
  }
  return (
    <Navigate replace to="/" />
  );
};
