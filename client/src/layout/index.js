import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import { Menu, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import HomeContainer from '../containers/HomeContainer';
import SecondContainer from '../containers/SecondContainer';
import NoMatchContainer from '../containers/NoMatchContainer';
import LoaderContainer from '../containers/LoaderContainer';
import './styles.css';

class Layout extends Component {
  render() {
    return (
      <div className="main">
        <Menu inverted fixed="top">
          <Container>
            <Menu.Item as={NavLink} to="/" exact>Home</Menu.Item>
            <Menu.Item as={NavLink} to="/second">Second</Menu.Item>
            <Menu.Item as={NavLink} to="/404">404</Menu.Item>
          </Container>
        </Menu>
        <Container className="main-container">
          <Switch>
            <Route path="/" exact component={HomeContainer}  />
            <Route path="/second" component={SecondContainer}  />
            <Route component={NoMatchContainer}  />
          </Switch>
        </Container>
        <LoaderContainer />
      </div>
    );
  }
}

export default Layout;
