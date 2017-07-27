// Simple example of a React "smart" component

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import LoadeComponent from '../../components/LoaderComponent';
import * as actionCreators from '../../actions';


function select(state) {
  // Which part of the Redux global state does our component want to receive as props?
  return { data: state.appReducers };
}

class LoaderContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
  };

  render() {
    const { dispatch, data, params } = this.props;
    const actions = bindActionCreators(actionCreators, dispatch);
    return (
      <LoadeComponent {...{ actions, data, params }} />
    );
  }
}

// Don't forget to actually use connect!
export default connect(select)(LoaderContainer);
