import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Layout, Drawer, Navigation, Header, Content, Grid } from 'react-mdl';
import DashboardHeader from './DashboardHeader'
import DashboardTags from './DashboardTags'
import DashboardAdd from './DashboardAdd'
import DashboardAppContainer from './DashboardAppContainer'
import Auth from './Auth'
import request from 'superagent';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = { apps: [] }
  }

  componentDidMount() {
    console.log("got here!")
    var self = this;
    request
     .get('/api/get-all-apps')
     .set({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + Auth.getToken()})
     .end(function(err, res) {
       if (err || !res.ok) {
         console.log('App not returned error', err);
       } else {
         console.log(res.body)
         const userApps = []
         for (var i = 0; i < Object.keys(res.body).length; i++) {
           userApps.push(res.body[i].appId);
           console.log(res.body[i].appId)
         }
         self.setState({ apps: userApps })
       }
     });
  }


  render () {
    return (
      <Layout fixedHeader>
          <Header title={<span><span style={{ color: '#ddd' }}></span><strong>Beapp</strong></span>}>
              <Navigation>
                  <Link to={'/logout'}>Log out</Link>
              </Navigation>
          </Header>
          <Drawer title="Title">
              <Navigation>
                  <Link to={'/logout'}>Log out</Link>
              </Navigation>
          </Drawer>
          <Content className="mycontent">
              <DashboardHeader username={this.props.username}/>
              <DashboardAdd />
              <DashboardAppContainer apps={this.state.apps}/>
          </Content>
      </Layout>
    );
  }
}

export default Dashboard;
