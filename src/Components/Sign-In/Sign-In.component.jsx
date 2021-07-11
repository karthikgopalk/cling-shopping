import React from 'react';
import './Sign-In.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    this.setstate({ email: '', password: '' });
  };
  handleChange = event => {
    const { value, name } = event.target;
    this.setstate({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onClick={this.handleSubmit}>
          <input name="email" value={this.state.email} type="email" required />
          <label>Email</label>
          <input
            name="password"
            value={this.state.password}
            type="password"
            onChange={this.handleChange}
            required
          />
          <label>password</label>
          <input type="submit" value="submit form" />
        </form>
      </div>
    );
  }
}
export default SignIn;
