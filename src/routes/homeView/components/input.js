import React, { Component } from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('Search term: ' + this.input.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
      Name:
      <input type="text" ref={(input) => this.input = input} />
      </label>
      <input type="submit" value="Submit" />
      </form>
      );
  }
}

export default SearchForm;