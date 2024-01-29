import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './SignUp.css';
import Social from '../Social/Social';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../fiebase.init';
const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [error, setError] = useState('');
  const [agree, setAgree] = useState(false);
  const [
    createUserWithEmailAndPassword,
    user,
    error1,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
  const [updateProfile] = useUpdateProfile(auth);
  const navigate = useNavigate();
if(user){
 navigate('/home');
}
  const handleName = e =>{
    setName(e.target.value);
  }
  const handleEmail = e =>{
    setEmail(e.target.value);
  }
  const handlePassword = e =>{
    setPassword(e.target.value);
  }
  const handleConfirmPass = e =>{
    setConfPassword(e.target.value);
  }
  const hadleSubmit = async(event) =>{
    event.preventDefault();
if(password !== confPassword){
setError('Confirm password does not match with password')
}
if(password.length < 6){
  setError('Password must be at least 6 characters')
}

   await createUserWithEmailAndPassword(email, password);
   const success = await updateProfile({ displayName: name});
 if (success) {
   console.log('Updated profile');

 }
  }
    return (
        <div className='sign'>
              <h1 className='text-center'>Signup</h1>
            <Form onSubmit={hadleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter your name</Form.Label>
        <Form.Control onBlur={handleName} type="text" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasic Password">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control onBlur={handleConfirmPass} type="password" placeholder="Confirm Password" required/>
      </Form.Group>
      <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
        <Form.Check onClick={() => setAgree(!agree)} type="checkbox" name='terms'/>
        <label htmlFor="terms" className={`ps-2 ${agree ? '' : 'text-danger'}`}>Accept Spoclick terms and condition?</label>
      </Form.Group>
      <p>{error1?.message}</p>
      <p style={{color: 'red'}}>{error}</p>
      <Button disabled={!agree} className='signup-button' variant="primary" type="submit">
        Signup
      </Button>
      <p className='mt-4'>Already have an account? <Link to='/login'>Login</Link></p>
    </Form>
   <div className="social text-center">
   <Social></Social>
   </div>
        </div>
    );
};

export default SignUp;