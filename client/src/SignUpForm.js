import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router'
import { Layout, Header, Navigation, Drawer, Content, Card, CardTitle, CardActions, Button, CardText, Grid, Cell, Textfield} from 'react-mdl';

class SignUpForm extends Component {

  render(){
    return(
      <Layout fixedHeader>
          <Header title={<span><span style={{ color: '#ddd' }}></span><strong>Beapp</strong></span>}>
              <Navigation>
                  <Link to={'/login'}>Log in</Link>
              </Navigation>
          </Header>
          <Drawer title="Title">
              <Navigation>
                  <Link to={'/login'}>Log in</Link>
              </Navigation>
          </Drawer>
          <Content className="mycontent">
            <Grid>
             <Cell col={4}></Cell>
             <Cell col={4}>
               <Card shadow={0} style={{textAlign: 'center'}}>
                 <CardTitle expand style={{color: '#fff', background: 'bottom #46B6AC'}}>Create an account</CardTitle>
                 <form action="/" onSubmit={this.props.onSubmit}>
                   <Textfield
                       name="username"
                       onChange={this.props.onChange}
                       error={this.props.errors.username}
                       value={this.props.user.username}
                       label="Username"
                       floatingLabel
                       style={{width: '200px'}}
                   />
                   <Textfield
                       name="password"
                       type="password"
                       onChange={this.props.onChange}
                       error={this.props.errors.password}
                       value={this.props.user.password}
                       label="Password"
                       floatingLabel
                       style={{width: '200px'}}
                   />

                   <CardText>
                     {this.props.errors && <p className="error-message" style={{color: 'red'}}>{this.props.errors.summary}</p>}
                   </CardText>

                   <CardActions border>
                       <Button raised colored type="submit">Sign up</Button>
                       <CardText>
                           Already have an account? <Link to={'/login'}>Log in</Link>
                       </CardText>
                   </CardActions>

                 </form>
               </Card>
             </Cell>
             <Cell col={4}></Cell>
           </Grid>
          </Content>
      </Layout>

    );
  }
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;
