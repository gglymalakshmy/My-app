import React from 'react';
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
function Register() {
  return (
    <div>
        <MDBInput label='First Name' id='typeFname' type='fname' />
        <MDBInput label='First Name' id='typeLname' type='lname' />
        <MDBInput label='Email input' id='typeEmail' type='email' />
        <MDBInput label='Password input' id='typePassword' type='password' />
        <MDBInput label='Phone number input' id='typePhone' type='tel' />
        <MDBBtn>Sign Up</MDBBtn>
        <MDBBtn>Cancel</MDBBtn>
    </div>
  )
}

export default Register