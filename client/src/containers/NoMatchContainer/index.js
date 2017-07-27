// Simple example of a React "smart" component

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NoMatchComponent from '../../components/NoMatchComponent';
import * as actionCreators from '../../actions';


function select(state) {
  // Which part of the Redux global state does our component want to receive as props?
  return { data: state.appReducers };
}

class NoMatchContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    location: PropTypes.shape({
      state: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { dispatch, data, params } = this.props;
    const actions = bindActionCreators(actionCreators, dispatch);
    const location = this.props.location;
    return (
      <NoMatchComponent {...{ actions, data, location, params }} />
    );
  }
}

// Don't forget to actually use connect!
export default connect(select)(NoMatchContainer);
