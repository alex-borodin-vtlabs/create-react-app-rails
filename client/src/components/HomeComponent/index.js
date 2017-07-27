import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, Icon, Button, Segment, Grid } from 'semantic-ui-react';

class HomeComponent extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  };

  render() {
    const icon = ['hand rock', 'hand paper', 'hand scissors', 'hand lizard', 'hand spock'];
    const iconValue = (this.props.data.get('example') === undefined) ? 'pointing up' : icon[this.props.data.get('example')];
    return (
      <Grid stretched centered>
        <Grid.Column stretched width="4">
          <Header as='h2' icon >
            <Icon name='rebel' circular />
            <Header.Content>
              Home
            </Header.Content>
          </Header>
          <Segment padded='very' textAlign="center">
              <Button
                size="massive"
                inverted color='green'
                circular icon={iconValue}
                onClick={() => {this.props.actions.callApi('example', 'GET', 'example')}}
              />
          </Segment>
        </Grid.Column>
      </Grid>);
    }
}

export default HomeComponent;
