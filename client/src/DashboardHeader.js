import React, { Component, PropTypes } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent, Icon, FABButton } from 'react-mdl';

class DashboardHeader extends Component {
  render () {
    return(
      <Grid className="DashboardHeader" style={{background: "#ADD8E6"}}>
          <Cell col={4} tablet={2} phone={4}></Cell>
          <Cell col={4} tablet={4} phone={4}>
              <span style={{margin:"0 auto", textAlign: "center", display: "block", color: "#808080"}}>
                <FABButton style={{background: "#808080"}}>
                    <Icon name="person" style={{color: "#fff"}}/>
                </FABButton>

                <h3>{this.props.username}</h3>
              </span>


          </Cell>
          <Cell col={4} tablet={2} phone={4}></Cell>
      </Grid>
    )

  }
}

export default DashboardHeader;
