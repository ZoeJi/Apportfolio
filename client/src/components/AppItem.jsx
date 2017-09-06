import React, { Component } from 'react';
import { Link } from 'react-router';
import { Cell, Chip, Dialog, DialogTitle, DialogContent, DialogActions, Button, Grid } from 'react-mdl';
import AppDetails from '../AppDetails'

function truncate(string){
     if (string.length > 30)
        return string.substring(0,30)+'...';
     else
        return string;
};

class AppItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: '',
      openDialog: false
    };
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
    this.addModal = this.addModal.bind(this);
    this.truncate = this.truncate.bind(this);
  }

  addModal(){
    var itemEntry = (
        <Dialog className="modal" open={this.state.openDialog} onCancel={this.handleCloseDialog} style={{top: '100px', width: '60%'}}>
          <DialogContent>
            <Grid>
              <Cell col={2} tablet={3} phone={2} style={{ display: "block"}}>
                <img role="presentation" style={{ display: "inline"}} src={this.props.app.artworkUrl100} />
              </Cell>
              <Cell col={10} tablet={5} phone={2} style={{ display: "block"}}>
                <DialogTitle style={{display: "inline"}}>{this.props.app.trackName}</DialogTitle>
              </Cell>
            </Grid>

            <AppDetails trackId={this.props.app.trackId} />
          </DialogContent>
          <DialogActions >
            <Button type='button' onClick={this.handleCloseDialog}>Cancel</Button>
          </DialogActions>
        </Dialog>
    );
    this.setState({
      item: itemEntry,
      openDialog: true
    });

  }



  handleOpenDialog() {
    this.addModal();
    this.addModal();
  }

  handleCloseDialog() {
    var itemEntry = (
        <Dialog className="modal" open={this.state.openDialog} onCancel={this.handleCloseDialog} style={{top: '100px', width: '60%'}}>
          <DialogContent>
            <Grid>
              <Cell col={2} tablet={3} phone={2} style={{ display: "block"}}>
                <img role="presentation" style={{ display: "inline"}} src={this.props.app.artworkUrl100} />
              </Cell>
              <Cell col={10} tablet={5} phone={2} style={{ display: "block"}}>
                <DialogTitle style={{display: "inline"}}>{this.props.app.trackName}</DialogTitle>
              </Cell>
            </Grid>

            <AppDetails trackId={this.props.app.trackId} />
          </DialogContent>
          <DialogActions >
            <Button type='button' onClick={this.handleCloseDialog}>Cancel</Button>
          </DialogActions>
        </Dialog>
    );

    this.setState({
      item: ''
    });

    this.setState({
      openDialog: false
    });
  }


  truncate(string){
     if (string.length > 10)
        return string.substring(0,10)+'...';
     else
        return string;
  };


  render(){
    var appName = this.truncate(this.props.app.trackName);
    console.log(appName);
    return (
        <Cell col={3} tablet={3} phone={2} style={{ display: "block"}}>
          <img role="presentation" style={{ display: "block", cursor: "pointer", margin: "0 auto"}} src={this.props.app.artworkUrl100} onClick={this.handleOpenDialog}/>
          <Chip style={{color: "#2F4F4F", background: "#fafafa", margin: "0 auto", display: "table"}}> {appName} </Chip>

          {this.state.item}

        </Cell>
    );
  }

}

export default AppItem;
