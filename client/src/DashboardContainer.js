import React, { PropTypes } from 'react'
import request from 'superagent';
import Auth from './Auth'
import Dashboard from './Dashboard'

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    };
  }

  componentDidMount(){
    if (!Auth.isUserAuthenticated()) {
      this.context.router.replace('/login');
      return null;
    }
    var self = this;
    request
     .post('/api/dashboard')
    //  .set('Accept', 'application/json', 'Authorization': 'Bearer ' + Auth.getToken())
     .set({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + Auth.getToken()})
     .send({ token: Auth.getToken()})
     .end(function(err, res) {
       if (err || !res.ok) {
         console.log("get a error!!!!")
       }
       else {
         // success
         console.log(res.body)
        self.setState({
          username: res.body.username
        });

       }
     });
  }


  render () {


    return (
      <Dashboard username={this.state.username} />
    );
  }
}

DashboardContainer.contextTypes = {
  router: PropTypes.object.isRequired
};

export default DashboardContainer;
