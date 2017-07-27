import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dimmer,  Loader } from 'semantic-ui-react';

class LoaderComponent extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Dimmer
        active={this.props.data.get('isFetching')}
        page
      >
        <Loader>Loading</Loader>
      </Dimmer>
    );
  }
}

export default LoaderComponent;
