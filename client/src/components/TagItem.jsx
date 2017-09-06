import React, { Component } from 'react';
import { Link } from 'react-router';
import { Chip } from 'react-mdl';
import request from 'superagent';
import Auth from '../Auth'

class TagItem extends Component {
  constructor(props) {
    super(props);
    this.removeTag = this.removeTag.bind(this)
    this.state = {
      tags: ''
    }
  }

  componentDidMount() {
    var self = this;
    var originalTag = (
      <Chip onClose={ this.removeTag }>{this.props.text}</Chip>
    )
    self.setState({tags: originalTag})
  }

  removeTag() {
    var self = this;
    request
     .post('/api/delete-tag')
     .set({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + Auth.getToken()})
     .send({
       appId : this.props.trackId,
       tag : this.props.text
     })
     .end(function(err, res) {
       if (err || !res.ok) {
         console.log('App not returned error', err);
       } else {
         self.setState({tags : ''})
       }
     });
  }

  render() {return (
    <div>
      {this.state.tags}
    </div>
  )}

}

export default TagItem;
