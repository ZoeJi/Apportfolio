import React from 'react';
import ReactDOM from 'react-dom';
import AppSearchList from './components/AppSearchList';
import SearchBar from './components/SearchBar';
import request from 'superagent';
import Auth from './Auth'

class Search extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      apps: []
    }
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  handleTermChange(term) {
    console.log(term);
    var self = this;
    request
     .get( '/api/search/' + term )
     .set({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + Auth.getToken()})
     .end( function(err, res) {
       if (err || !res.ok) {
         console.log('search error');
       } else {
         self.setState({ apps: res.body.results })
       }
     });

  }

  render() {
    return (
      <div>
        <SearchBar onTermChange={this.handleTermChange} />
        <AppSearchList apps={this.state.apps} />
      </div>
    );
  }
}

export default Search;
