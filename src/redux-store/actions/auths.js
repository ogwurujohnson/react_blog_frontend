import * as types from "./actionTypes";
import axios from "axios";
import { apiURL } from '../../utilities/urls';

export const register = user => dispatch => {
  dispatch({ type: types.REGISTER_REQUEST });
  axios
    .post(`${apiURL}/auth/register`, user)
    .then(res => {
      dispatch({ type: types.REGISTER_SUCCESS, payload: res.data.token, user: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: types.REGISTER_FAILURE });
    });
};

export const login = user => dispatch => {
  dispatch({ type: types.LOGIN_START })
  return axios
    .post(`${apiURL}/auth/login`, user)
    .then(res => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.token, user: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: types.LOGIN_FAILURE });
    });
}

export const verify = (token, id) => dispatch => {
  dispatch({ type: types.VERIFICATION_START })
  return axios
    .post(`${apiURL}/auth/verify/${id}/${token}`)
    .then(res => {
      dispatch({ type: types.VERIFICATION_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: types.VERIFICATION_FAILURE });
    });
}