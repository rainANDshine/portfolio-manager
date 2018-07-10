import React from 'react';
import { withRouter } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

const inputStyle = {
  width: '80%',
  padding: '5px 20px',
  borderRadius: '6px',
  marginTop: '10px',
};

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
    //event.preventDefault();
    const symbol = this.state.value.toUpperCase();
    this.props.history.push(`/quote?symbol=${symbol}`);
    this.props.search(symbol);
    this.setState({ value: '' });
  }

  render() {
    return (
      <React.Fragment>
        <input style={inputStyle} type="text" value={this.state.value} onChange={this.handleChange} />
        <Icon color='blue' size='masive' name='search' circular onClick={this.handleSubmit}/>
      </React.Fragment>
    )
  }
}

export default withRouter(SearchBar);
