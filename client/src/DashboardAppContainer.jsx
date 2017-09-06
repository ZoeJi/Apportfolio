import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router';
import { Grid, Cell } from 'react-mdl';
import DashboardAppItem from './DashboardAppItem'

const DashboardAppContainer = (props) => {

  const appItems = props.apps.map((appId) => {
    return (
      <DashboardAppItem key={appId.id} id={appId}/>
    )
  });

  return (
    <div style={{width: '80%', margin: 'auto'}}>
      <Grid className="DashboardAppItem">
        {appItems}
      </Grid>
    </div>
  )

};

export default DashboardAppContainer;
