import React from 'react';
import AppItem from './AppItem';
import { Grid } from 'react-mdl';

const AppSearchList = (props) => {

  const appItems = props.apps.map((icon) => {
    return <AppItem key={icon.id} app={icon} />
  });

  return (
    <Grid className="DashboardAppItem">{appItems}</Grid>
  );
};

export default AppSearchList;
