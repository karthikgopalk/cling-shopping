import React from 'react';
import './Sign-In.styles.scss';
import FormInput from '../Form-Input/Form-Input.component';
import CustomButton from '../Custom-Button/Custom-Button.component';
import { auth,signInWithGoogle } from '../../Firebase/Firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
  handleSubmit = async event => {
    event.preventDefault();
    const {email,password} = this.state;
    try{
      await auth.signInWithEmailAndPassword(email,password);
      this.setState({ email: '', password: '' });
    }catch(error){
      console.error(error);
      alert("User Not Found");
    }
  };
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            value={this.state.email}
            type="email"
            handleChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            name="password"
            value={this.state.password}
            type="password"
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className='buttons'>
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with google
          </CustomButton>
          </div>
         
        </form>
      </div>
    );
  }
}
export default SignIn;
