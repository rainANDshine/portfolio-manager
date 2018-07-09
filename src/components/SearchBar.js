import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
  state ={
    value: '',
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.history.push(`/quote?symbol=${this.state.value}`);
    this.props.search(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Search" />
      </form>
    )
  }
}

export default withRouter(SearchBar);
