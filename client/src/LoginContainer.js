import React, { PropTypes, Component } from 'react';
import LoginForm from './LoginForm.js';
import Auth from './Auth';
import request from 'superagent';

class LoginContainer extends Component {
  constructor(props){
    super(props);

    const storedMessage = localStorage.getItem('successMessage');
    let successMessage = '';

    if (storedMessage) {
      successMessage = storedMessage;
      localStorage.removeItem('successMessage');
    }

    // set the initial component state
    this.state = {
      errors: {},
      successMessage,
      user: {
        username: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  processForm(event) {
    var self = this;
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    request
     .post('/auth/login')
     .set('Accept', 'application/json')
     .send({ username: this.state.user.username, password: this.state.user.password})
     .end(function(err, res) {
       if (err || !res.ok) {
         console.log("res boday", res.body)
         const errors = new Error();
         errors.username = res.body.message;
         errors.password = res.body.message;
         console.log("errors summary", res.body.message)
         self.setState({
           errors
         });
       } else {

        // change the component-container state
        self.setState({
          errors:{}
        });
        // save the token
        console.log(res.body.token)
        Auth.authenticateUser(res.body.token);

        // change the current URL to /
        self.context.router.replace('/dashboard');
       }
     });

  }

  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  componentDidMount(){
    if (Auth.isUserAuthenticated()) {
      this.context.router.replace('/dashboard');
      return null;
    }
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        successMessage={this.state.successMessage}
        user={this.state.user}
      />
    );
  }
}

LoginContainer.contextTypes = {
  router: PropTypes.object.isRequired
};

export default LoginContainer;
