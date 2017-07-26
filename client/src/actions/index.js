/* eslint-disable import/prefer-default-export */

import * as c from '../constants';

const apiUrl = '/api/v0/';

export const example = (data) => ({
  type: c.EXAMPLE,
  data,
});

export const requestBegin = () => ({
  type: c.REQUEST_BEGIN,
});

export const requestSuccess = (data, keyword) => ({
  type: c.REQUEST_SUCCESS,
  data,
  keyword,
});

export const requestError = (data, keyword) => ({
  type: c.REQUEST_ERROR,
  data,
  keyword,
});

export const callApi = ((fetchUrl,
  method = 'GET',
  keyword =' apiResponse',
  data = {},
  success,
  error) => (dispatch) => {
  dispatch(requestBegin());
  let body = (method === 'GET') ? undefined : JSON.stringify(data);
  return fetch(apiUrl + fetchUrl, {
    method,
    body,
  })
  .then(checkStatus)
  .then(parseJSON)
  .then(function(data) {
    console.log('request succeeded with JSON response', data)
  }).catch(function(error) {
    console.log('request failed', error)
  })

});

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}
