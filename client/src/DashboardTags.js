import React, { Component, PropTypes } from 'react'
import { Layout, Drawer, Navigation, Header, Content, Grid, Chip, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class DashboardTags extends Component {
  render () {
    return(
      <Grid shadow={0} style={{width: '100%', margin: 'auto'}} className="DashboardTags">

          <Cell col={3} tablet={1} phone={0}></Cell>
          <Cell col={6} tablet={6} phone={4}>
            <h5 style={{color: "#2F4F4F"}}>Your tags</h5>
            <Chip onClick={e => { alert('Clicked!'); }}>Button Chip</Chip>
            <Chip onClick={e => { alert('Clicked!'); }}>Button Chip</Chip>
            <Chip onClick={e => { alert('Clicked!'); }}>Button Chip</Chip>
            <Chip onClick={e => { alert('Clicked!'); }}>Button Chip</Chip>
            <Chip onClick={e => { alert('Clicked!'); }}>Button Chip</Chip>
            <Chip onClick={e => { alert('Clicked!'); }}>Button Chip</Chip>
          </Cell>
          <Cell col={3} tablet={1} phone={0}></Cell>

      </Grid>
    );
  }
}

export default DashboardTags;
