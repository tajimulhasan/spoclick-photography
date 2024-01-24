import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Social from '../Social/Social';

const Login = () => {
    return (
        <div className='mt-4'>
        <h1 className='text-center'>Login</h1>
      <Form>
<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Email address</Form.Label>
  <Form.Control type="email" placeholder="Enter email" required />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control type="password" placeholder="Password" required />
</Form.Group>
<Button className='signup-button' variant="primary" type="submit">
  Login
</Button>
</Form><br /><br />
<div className="social text-center">
<Social></Social>
</div>
  </div>
    );
};

export default Login;