/* eslint-disable import/prefer-default-export */

import * as c from '../constants';

const apiUrl = '/api/v1/';

export const example = (data) => ({
  type: c.REQUEST_SUCCESS,
  data,
});
