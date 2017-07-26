import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomeContainer from '../containers/HomeContainer';
import SecondContainer from '../containers/SecondContainer';
import NoMatchContainer from '../containers/NoMatchContainer';

class Layout extends Component {
  render() {
    return (
      <div>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/second">Second</NavLink>
        </div>
          <Switch>
            <Route path="/" exact component={HomeContainer}  />
            <Route path="/second" component={SecondContainer}  />
            <Route component={NoMatchContainer}  />
          </Switch>
      </div>
    );
  }
}

export default Layout;
