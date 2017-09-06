import React, { Component } from 'react';
import { Link } from 'react-router'
import './MainLayout.css';

class MainLayout extends Component {

  render() {
    return (
        <div className="MainLayout">
          <main>
            {this.props.children}
          </main>
        </div>
    );
  }
}

export default MainLayout;
