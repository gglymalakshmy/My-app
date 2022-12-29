import React from 'react';
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';

function Login() {
  return (
    <div>
        
    <MDBInput label='Email input' id='typeEmail' type='email' />
    <MDBInput label='Password input' id='typePassword' type='password' />
    <MDBBtn>Login</MDBBtn>
    </div>
  )
}

export default Login;