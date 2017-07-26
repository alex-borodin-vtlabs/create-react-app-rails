import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HomeComponent extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.actions.callApi('example');
  }

  render() {
    return (
      <div>
        Home
      </div>
    );
  }
}

export default HomeComponent;
