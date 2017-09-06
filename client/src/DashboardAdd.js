import React, { Component, PropTypes } from 'react'
import { Layout, Textfield, Drawer, Navigation, Header, Content, FABButton, Dialog, Button, DialogTitle, DialogContent, DialogActions, Icon, Grid, Cell} from 'react-mdl';
import Search from './Search'

class DashboardAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  handleOpenDialog() {
    this.setState({
      openDialog: true
    });
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false
    });
  }

  render () {
    return(
      <Grid className="DashboardHeader" style={{background: "#ADD8E6"}}>
          <Cell col={8} tablet={5} phone={2}></Cell>
          <Cell col={1} tablet={1} phone={1}>

            <FABButton colored ripple onClick={this.handleOpenDialog}>
                <Icon name="add" />
            </FABButton>

            <Dialog className="modal" open={this.state.openDialog} onCancel={this.handleCloseDialog} style={{top: '100px', width: '60%'}}>
              <DialogTitle>Add an APP in your collection</DialogTitle>
              <DialogContent>
                <Search />
              </DialogContent>
              <DialogActions >
                <Button type='button' onClick={this.handleCloseDialog}>Cancel</Button>
              </DialogActions>
            </Dialog>

          </Cell>
          <Cell col={3} tablet={2} phone={1}></Cell>
      </Grid>
    );
  }
}

export default DashboardAdd;
