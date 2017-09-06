import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router';
import { Chip, Card, CardText, CardTitle, Layout, Drawer, Navigation, Header, Content, Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Auth from './Auth'
import request from 'superagent';


class DashboardAppItem extends Component {

  constructor(props) {
    super (props);
    this.state = { app: '' }
    this.truncate = this.truncate.bind(this)
  }

  truncate(string){
       if (string.length > 7)
          return string.substring(0,7)+'...';
       else
          return string;
  };

  componentDidMount() {
    var self = this;
    request
     .get('/api/app/' + this.props.id)
     .set({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + Auth.getToken()})
     .end(function(err, res) {
       if (err || !res.ok) {
         console.log('App not returned error', err);
       } else {
         var appEntry = (
           <Cell col={2} tablet={2} phone={2} style={{ display: "block"}}>
             <img style={{ display: "block"}} src={res.body.artworkUrl100} />
             <Chip style={{background: '#fff', color: '#483d8b' , display: "block"}}>{self.truncate(res.body.trackCensoredName)}</Chip>
           </Cell>
         );
         self.setState({app: appEntry});
       }
     });
  }


  render () {
    return(
      <div>{this.state.app}</div>
    )
  }
}

export default DashboardAppItem;
