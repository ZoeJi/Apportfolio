import React from 'react';
import TagItem from './TagItem';
import { Grid } from 'react-mdl'

const TagList = (props) => {

  const tagItems = props.tags.map((tagText) => {
    return <TagItem key={tagText.id} text={tagText} trackId={props.trackId} />
  });

  return (
    <Grid>{tagItems}</Grid>
  );
};

export default TagList;
