import Immutable from 'immutable';
import * as c from '../constants';

export const initialState = Immutable.fromJS({
  example: false,
});

export default function appReducers(state = initialState, action = null) {
  const { type, data, keyword } = action;
  switch (type) {

    case c.EXAMPLE: {
      return state.merge({
        example: data,
      });
    }

    default: {
      return state;
    }
  }
}
