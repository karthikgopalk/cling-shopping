import React from 'react';
import './Sign-Up.styles.scss';
import FormInput from '../Form-Input/Form-Input.component';
import CustomButton from '../Custom-Button/Custom-Button.component';
import { auth, createUserProfileDocument } from '../../Firebase/Firebase.utils';


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }
  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password != confirmPassword) {
      alert("passwords doesn't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  };
  handleChange = event => {
    const {name,value} = event.target;
    this.setState({[name]:value})
  }
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2>I don't have an account</h2>
        <span>Sign up with email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            name="email"
            type="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            onChange={this.handleChange}
            label="password"
            required
          />
          <FormInput
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={this.handleChange}
            label="confirm Password"
            required
          />
          <CustomButton type="submit">Sign up</CustomButton>
        </form>
      </div>
    );
  }
}
export default SignUp;
