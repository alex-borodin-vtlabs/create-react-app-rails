import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, Icon } from 'semantic-ui-react';

class SecondComponent extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  };
  render() {
    return (
      <Header as='h2' icon textAlign='center'>
        <Icon name='empire' circular />
        <Header.Content>
          404
        </Header.Content>
      </Header>
    );
  }
}

export default SecondComponent;
