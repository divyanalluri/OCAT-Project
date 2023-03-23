import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UserService } from '../../services/UserService';
import './login.scss';

export const Login = () => {
  const { handleSubmit, register } = useForm();
  // const [ isLoggedIn, setLogin ] = useState(false);

  const onLogin = async (data) => {
    console.log(await UserService.login(data));
    // setLogin(await UserService.login(data));
  };

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
            {...register(`username`)}
          />
        </div>
        <div className="form-group">
          <label className="font-weight-bold" htmlFor="passwd">Password</label>
          <input
            id="passwd"
            type="password"
            className="form-control"
            placeholder="Enter your password"
            {...register(`password`)}
          />
        </div>
        <Button variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
    </div>
  );
};
