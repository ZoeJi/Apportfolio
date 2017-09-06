import React from 'react';
import { Textfield } from 'react-mdl';

class SearchBar extends React.Component {

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
      <div className="search">
        <Textfield
            onKeyPress={event => this.handleKeyPress(event)}
            name="search"
            label="Search"
            floatingLabel
            style={{width: '100%'}}
        />
      </div>
    );
  }
}

export default SearchBar;
