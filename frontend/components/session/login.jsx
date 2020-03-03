import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
    .then( () => this.props.history.push('/dashboard'))
  }

  render() {
    return (
      <div className="sess-sign-form">
        <h2>Login</h2>
        <form>
          <label>
            Email 
          <input type="email"
              value={this.state.email}
              onChange={this.handleInput("email")}
            />
          </label>
          <label>
            Password
          <input type="password"
              value={this.state.password}
              onChange={this.handleInput("password")}
            />
          </label>
          <button onClick={this.handleSubmit}>Login</button>
        </form>
        <Link to="/signup">Sign Up</Link>
        <button onClick={this.props.demoLogin}>Demo Login</button>
      </div>
    )
  }
}

export default Login;