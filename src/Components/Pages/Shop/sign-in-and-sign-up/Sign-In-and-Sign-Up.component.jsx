import React from 'react';
import './Sign-In-and-Sign-Up.styles.scss';
import SignIn from '../../../Sign-In/Sign-In.component';
import SignUp from '../../../Sign-Up/Sign-Up.component'

const SignInAndSignUp = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn/>
    <SignUp/>
  </div>
);
export default SignInAndSignUp;