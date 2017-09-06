/* list single app search result by ID */

import React, { Component } from 'react';
import { Link } from 'react-router';
import request from 'superagent';

var appPage = {
  textAlign:'left',
}

var appPageUl = {
  listStyleType: 'none'
}

class App extends Component {
  constructor() {
    super();
    this.state = { app: '' }
  }

  componentDidMount() {
    var self = this;
    request
     .get('/api/app/' + this.props.location.query.trackId)
     .set('Accept', 'application/json')
     .end(function(err, res) {
       if (err || !res.ok) {
         console.log('App not returned error', err);
       } else {
         var appEntry = (
            <div style={appPage} className="app">
              <img src={res.body.artworkUrl60}></img>
              <ul style={appPageUl}>
                <li>Title: {res.body.trackCensoredName}</li>
                <li><Link to='/'>Back</Link></li>
              </ul>
            </div>
         );
         self.setState({app: appEntry});
       }
     });
  }

  render() {
    return (
      <div>{this.state.app}</div>
    );
  }
}

export default App;
