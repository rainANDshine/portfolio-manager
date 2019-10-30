import React from 'react';
import { Redirect } from 'react-router-dom';
import AuthAdapter from '../adapters/AuthAdapter';

function withAuth(WrappedComponent) {
  return class extends React.Component {
    render() {
      return AuthAdapter.loggedIn() ? <Redirect to='/' /> : <WrappedComponent {...this.props} />
    }
  }
}

export default withAuth;