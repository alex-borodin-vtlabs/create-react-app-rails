import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HomeComponent extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div>
        Home
      </div>
    );
  }
}

export default HomeComponent;
