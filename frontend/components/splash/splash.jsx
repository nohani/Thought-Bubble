import React from 'react';
import { Link } from 'react-router-dom';

export default class Splash extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }

  handleSubmit(field) {
    this.props.history.push(`/${field}`);
  }

  handleDemoSubmit() {
   this.props.demoLogin()
      // .then(this.props.history.push('/dashboard'))
  }

  render() {
    return (
      <div className="fullscreen">
        <div className="single-letter"><Link to="/dashboard">t</Link></div>
        <div className="container">
          <div className="logo-thobu">Thought Bubble</div>
          <ul className="splash-list">
            <button className="main-buttons" onClick={() => this.handleSubmit("signup")}>Get Started</button>
            <button className="main-buttons-white" onClick={() => this.handleSubmit("login")}>Login</button>
            <button className="main-buttons" onClick={() => this.handleDemoSubmit()}>Demo Login</button>
          </ul>
        </div>
      </div>
    )
  }
}