/* list single app search result by ID */

import React, { Component } from 'react';
import { Link } from 'react-router';
import request from 'superagent';
import ScrshotList from './components/ScrshotList'
import Auth from './Auth'
import { Cell, Chip, Dialog, DialogTitle, DialogContent, DialogActions, Button } from 'react-mdl';
import TagBox from './TagBox'

class AppDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { app: '' }
  }

  componentDidMount() {
    var self = this;
    request
     .get('/api/app/' + this.props.trackId)
     .set({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + Auth.getToken()})
     .end(function(err, res) {
       if (err || !res.ok) {
         console.log('App not returned error', err);
       } else {
         var appEntry = (
            <div className="app">
              <DialogTitle>{res.body.trackCensoredNam}</DialogTitle>
              <ScrshotList scrshots={res.body.screenshotUrls} />
            </div>
         );
         self.setState({app: appEntry});
       }
     });
  }

  render() {
    return (
      <div>
        {this.state.app}

        <TagBox appId={this.props.trackId} />

      </div>
    );
  }
}

export default AppDetails;
