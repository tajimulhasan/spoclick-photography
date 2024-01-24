import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './SignUp.css';
import Social from '../Social/Social';

const SignUp = () => {
    return (
        <div className='mt-4'>
              <h1 className='text-center'>Signup</h1>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter your name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button className='signup-button' variant="primary" type="submit">
        Signup
      </Button>
    </Form><br /><br />
   <div className="social text-center">
   <Social></Social>
   </div>
        </div>
    );
};

export default SignUp;