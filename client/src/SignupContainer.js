import React, { PropTypes, Component } from 'react';
import SignUpForm from './SignUpForm.js';
import request from 'superagent';
import Auth from './Auth';

class SignupContainer extends Component {
    constructor(props, context) {
    super(props, context);

    // set the initial component state
    this.state = {
      errors: {},
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
     .post('/auth/signup')
     .set('Accept', 'application/json')
     .send({ username: this.state.user.username, password: this.state.user.password})
     .end(function(err, res) {
       if (err || !res.ok) {
         console.log("res boday", res.body)
         const errors = res.body.errors;
         errors.summary = res.body.message;
         self.setState({
           errors
         });
       } else {
         // success
        self.setState({
          errors:{}
        });
        // make a redirect
        self.context.router.replace('/login');
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
      <SignUpForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }
}

SignupContainer.contextTypes = {
  router: PropTypes.object.isRequired
};

export default SignupContainer;
