import React, { PropTypes } from 'react'
import Auth from './Auth'

class Logout extends React.Component {
  render () {
    Auth.deauthenticateUser();
    this.context.router.replace('/');
    return null;
  }
}

Logout.contextTypes = {
  router: PropTypes.object.isRequired
};

export default Logout;
