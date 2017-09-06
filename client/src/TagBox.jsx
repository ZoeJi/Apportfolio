import React from 'react';
import ReactDOM from 'react-dom';
import AppSearchList from './components/AppSearchList';
import SearchBar from './components/SearchBar';
import request from 'superagent';
import Auth from './Auth'
import TagInput from './components/TagInput'
import TagList from './components/TagList'

class TagBox extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      tags: []
    }
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  componentDidMount() {
    var self = this;
    request
     .post('/api/get-tags')
     .set({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + Auth.getToken()})
     .send({ appId: this.props.appId })
     .end(function(err, res) {
       if (err || !res.ok) {
         console.log('App not returned error', err);
       } else {
         const existingTags = []
         for (var i = 0; i < Object.keys(res.body).length; i++) {
           existingTags.push(res.body[i].tag);
         }
         self.setState({ tags: existingTags })
       }
     });
  }

  handleTermChange(term) {
    console.log(term);
    var self = this;
    request
     .post( '/api/add-tag')
     .set({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + Auth.getToken()})
     .send({ tag: term, appId: this.props.appId })
     .end( function(err, res) {
       if (err || !res.ok) {
         console.log('Error adding tag');
       } else {
         const newTags = self.state.tags
         newTags.push(term)
         self.setState({ tags: newTags })
       }
     });
  }

  render() {
    return (
      <div>
        <TagInput onTermChange={this.handleTermChange} />
        <TagList tags={this.state.tags} trackId={this.props.appId} />
      </div>
    );
  }
}

export default TagBox;
