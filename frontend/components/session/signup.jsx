import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username:'',
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
    this.props.createNewUser(this.state)
      //.then( () => this.props.history.push('/dashboard'))
  }

  render() {
    return (
    <div className="sess-sign-form">
      <h2>Sign Up</h2>
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
        <label>
          Username
        <input type="username"
            value={this.state.username}
            onChange={this.handleInput("username")}
          />
        </label>
        <button onClick={this.handleSubmit}>Sign Up</button>
      </form>
      <Link to="/login">Login</Link>
      <button onClick={this.props.demoLogin}>Demo Login</button>
    </div>
    )
  }
}

export default Signup;