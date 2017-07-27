import Immutable from 'immutable';
import * as c from '../constants';

export const initialState = Immutable.fromJS({
  isFetching: false,
  example: undefined,
});

export default function appReducers(state = initialState, action = null) {
  const { type, data, keyword } = action;
  switch (type) {

    case c.EXAMPLE: {
      return state.merge({
        example: data,
      });
    }
    case c.REQUEST_BEGIN: {
      return state.merge({
        isFetching: true,
      });
    }

    case c.REQUEST_SUCCESS: {
      // console.log(Immutable.fromJS(data));
      return state.merge({
        isFetching: false,
        [keyword]: Immutable.fromJS(data),
      });
    }

    case c.REQUEST_ERROR: {
      return state.merge({
        isFetching: false,
      });
    }

    default: {
      return state;
    }
  }
}
