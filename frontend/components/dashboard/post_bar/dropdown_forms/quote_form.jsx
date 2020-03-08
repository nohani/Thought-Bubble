import React from 'react';

export default class QuoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropdown: false,
      quote: "",
      source: "",
      post_type: "quote"
    }

    this.handleClick = this.handleClick.bind(this);
    this.toggleStateBoolean = this.toggleStateBoolean.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleClick(e) {
    e.preventDefault();
    if (this.state.showDropdown === false) {
      this.setState({ showDropdown: true });
    }
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    }
  }

  toggleStateBoolean() {
    if (this.state.showDropdown === true) {
      this.setState({ showDropdown: false });
    }
  }

  handleSubmit() {
    const { quote, source, post_type } = this.state;
    this.props.createPost({
      quote,
      source,
      post_type
    });
    this.toggleStateBoolean();
  }


  render() {
    return (
      <div className={this.state.showDropdown ? "post-form-container expand-quote" : "post-show-container"}
>
        <div onClick={this.handleClick} className="post-bar-icons pbi-quote">
          <i className="fas fa-quote-right"></i>
          <span className="post-bar-text">Quote</span>
        </div>
        <div className={this.state.showDropdown ? "post-form-quote show" : "post-form-quote"}>
          <form onSubmit={this.handleSubmit}>

            <label htmlFor="quote">Quote</label>
            <textarea id="quote" value={this.state.quote} onChange={this.update('quote')} placeholder="Quote"/>

            <label htmlFor="source">Source</label>
            <input type="text" id="source" value={this.state.source} onChange={this.update('source')} placeholder="Source"/>

            <input type="submit" value="Post" />
          </form>
          <button className="close-button" onClick={() => this.toggleStateBoolean()}>Close</button>
        </div>
      </div>
    )
  }
}