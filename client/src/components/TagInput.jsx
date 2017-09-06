import React from 'react';
import { Textfield } from 'react-mdl';


class TagInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = { term: '' }
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onTermChange(term);
  }

  handleKeyPress(e) {

    if (e.key === 'Enter') {
      this.onInputChange(e.target.value)
    }

  }

  render() {
    return (
      <div className="tag-input">
        <h5 style={{color: "#483d8b"}}>Add tags: </h5>
        <Textfield
            onKeyPress={event => this.handleKeyPress(event)}
            name="addTag"
            label="Add a tag to add this APP to your collection"
            floatingLabel
            style={{width: '100%'}}
        />
      </div>
    );
  }
}

export default TagInput;
