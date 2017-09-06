/* list search results by name */

import React, { Component } from 'react';
import { Link } from 'react-router'
import request from 'superagent';
import { Layout, Drawer, Navigation, Header, Content, Grid, Cell, Card, CardTitle, CardText } from 'react-mdl';

class RootContainer extends Component {

  render() {
    return (
      <div style={{height: '500px', position: 'relative'}}>
          <Layout style={{background: 'url(https://s-media-cache-ak0.pinimg.com/originals/0b/66/cb/0b66cba7780a8226a2b00936074b8c84.jpg) center / cover'}}>
              <Header transparent title="Title" style={{color: 'white'}}>
                  <Navigation>
                      <Link to={'/login'}><b>Log in</b></Link>
                      <Link to={'/signup'}><b>Sign up</b></Link>
                  </Navigation>
              </Header>

              <Drawer title="Title">
                  <Navigation>
                      <Link to={'/'}>Home</Link>
                      <Link to={'/login'}>Log in</Link>
                      <Link to={'/signup'}>Sign up</Link>
                  </Navigation>
              </Drawer>
              <Content>
                <Grid>
                  <Cell col={2}></Cell>
                  <Cell col={8}>
                    <div className="hometitle">Collect your favorite iOS APPs here.</div>
                  </Cell>
                  <Cell col={2}></Cell>
                </Grid>
              </Content>
          </Layout>
      </div>
    );
  }

}

export default RootContainer;
