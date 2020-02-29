import React, { Component } from 'react'
import { SignUpLink } from './SignUp'
import { PasswordForgetLink } from './Account/PasswordForget'
import { withFirebase } from './Firebase'
import './Home.css'
import './LogIn.css'


const LogInPage = ({ history }) => (
    <div>
      <h1>Log in</h1>
      <LogInForm history={history} />
      <PasswordForgetLink />
      <SignUpLink />
    </div>
  )
  const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
  }
  class LogInFormBase extends Component {
    constructor(props) {
      super(props);
      this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {
      event.preventDefault();
      const { email, password } = this.state;
      this.props.firebase
        .doLogInWithEmailAndPassword(email, password)
        .then(() => {
          this.setState({ ...INITIAL_STATE });
          this.props.history.push('/') 
        })
      .catch(error => {
          this.setState({ error });
        });
    };
    onChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };
    render() {
      const { email, password, error } = this.state;
      const isInvalid = password === '' || email === '';
      return (
        <div className="logInContainer" >
          <form onSubmit={this.onSubmit} className="logInForm">
            <input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
              className="logInInput"
            />
            <input
              name="password"
              value={password}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
              className="logInInput"
            />
            <button disabled={isInvalid} type="submit">
              Sign In
            </button>
            {error && <p>{error.message}</p>}
          </form>
        </div>
      );
    }
  }

  const LogInForm = withFirebase(LogInFormBase)
  export default LogInPage;
  export { LogInForm };