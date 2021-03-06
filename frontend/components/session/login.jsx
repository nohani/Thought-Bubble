import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../navbar/navbar';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
    // .then( () => this.props.history.push('/dashboard'))
  }


  renderErrors() {
    return (
      <ul class="session-errors">
        {this.props.errors.map((error, i) => {
          return <li key={i}>{error}</li>
      })}
      </ul>
    ) 
  }

  render() {
    return (
      <div>
        <NavBar />
       
      <div className="fullscreen"> 
        <div className="sess-sign-form">
          <div className="logo-thobu">Thought Bubble</div>
         {this.renderErrors()}
          <form className="form">
            <label htmlFor="email">Email </label>
            <input type="email"
                value={this.state.email}
                onChange={this.handleInput("email")}
                placeholder="Email"
                id="email"
              />
            
            <label htmlFor="password"> Password  </label>
            <input type="password"
                value={this.state.password}
                onChange={this.handleInput("password")}
                placeholder = "Password"
                id="password"
              />
          
            <button onClick={this.handleSubmit} className="sign-log">Login</button>
          </form>
          
          <button className="sign-log" onClick={this.props.demoLogin}>Demo Login</button>
        </div>
      </div> 
      </div>
    )
  }
}

export default Login;