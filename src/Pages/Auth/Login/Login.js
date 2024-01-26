import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Social from '../Social/Social';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../fiebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../RequireAuth/Loading';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
const navigate = useNavigate();
const location = useLocation();
let from = location.state?.from?.pathname || '/';
if(user){
  navigate(from, {replace: true});
}
if(loading){
  <p><Loading></Loading></p>
}
  const handleEmailBlur = e =>{
    setEmail(e.target.value);
  }  
  const handlePasswordBlur = e =>{
    setPassword(e.target.value);
  }  
const handleForm = e =>{
  e.preventDefault();
  signInWithEmailAndPassword(email, password)
}

const handleReset = async () =>{

  if(email){
    await sendPasswordResetEmail(email);
    
    toast('sent email')
   }
   else{
    toast('please enter your email')
   }
} 
  return (
        <div className='sign'>
        <h1 className='text-center'>Login</h1>
      <Form onSubmit={handleForm}>
<Form.Group  className="mb-3" controlId="formBasicEmail">
  <Form.Label>Email address</Form.Label>
  <Form.Control onBlur={handleEmailBlur}  type="email" placeholder="Enter email" required />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control onBlur={handlePasswordBlur}  type="password" placeholder="Password" required />
</Form.Group>
<p style={{color: 'red'}}>{error?.message}</p>
<div className="forget-password">
  <p>Forget password?<button onClick={handleReset} className='text-decoration-none btn btn-transparent text-primary'>Reset password</button></p>
</div>
<Button className='signup-button' variant="primary" type="submit">
  Login
</Button>
<p className='mt-4'>New in Spoclick? <Link to='/signup'>Create an account</Link></p>
</Form>

<div className="social text-center">
<Social></Social>
</div>
<ToastContainer />
  </div>

    );
};

export default Login;