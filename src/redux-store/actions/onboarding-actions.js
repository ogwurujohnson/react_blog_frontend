import {
  GET_ALL_TAGS_START,
  GET_ALL_TAGS_SUCCESS,
  GET_ALL_TAGS_FAIL,
  GET_USERS_TO_FOLLOW_START,
  GET_USERS_TO_FOLLOW_SUCCESS,
  GET_USERS_TO_FOLLOW_FAIL
} from "./types";

import axios from "axios";
import { axiosWithAuth } from "../../utilities/axios/index";

export const getTags = () => async dispatch => {
  dispatch({ type: GET_ALL_TAGS_START });
  try {
    const response = await axios.get(`http://localhost:5000/api/articles/tags`);
    dispatch({ type: GET_ALL_TAGS_SUCCESS, payload: response.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_ALL_TAGS_FAIL });
  }
};

export const getUsersToFollow = () => async dispatch => {
  dispatch({ type: GET_USERS_TO_FOLLOW_START });
  try {
    const response = await axiosWithAuth().get(
      `http://localhost:5000/api/follows/potential`
    );
    console.log(response);
    dispatch({ type: GET_USERS_TO_FOLLOW_SUCCESS, payload: response.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_USERS_TO_FOLLOW_FAIL });
  }
};