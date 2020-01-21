import {
  GET_ALL_ARTICLES_START,
  GET_ALL_ARTICLES_SUCCESS,
  GET_ALL_ARTICLES_FAIL
} from "./types";
import { apiURL } from '../../utilities/urls';

import { axiosWithAuth } from "../../utilities/axios/index";

export const getArticleFeed = () => async dispatch => {
  dispatch({ type: GET_ALL_ARTICLES_START });
  try {
    const response = await axiosWithAuth()
      .get(`${apiURL}/articles`);
    dispatch({ type: GET_ALL_ARTICLES_SUCCESS, payload: response.data });
  }
  catch (err) {
    console.log(err);
    dispatch({ type: GET_ALL_ARTICLES_FAIL });
  }
};
