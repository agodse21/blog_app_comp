import * as types from "./ActionTypes";
import axios from "axios";

export const createBlog = (payload) => (dispatch) => {
  return axios
    .post("http://localhost:5000/createblog", payload)
    .then((res) => {
      return res.data.msg;
    })
    .catch((e) => console.log(e));
};

export const getBlogs = (payload) => (dispatch) => {
  dispatch({ type: types.GET_ALL_BLOGS_REQUEST });
  return axios
    .get("http://localhost:5000/getblogs")
    .then((res) => {
      return dispatch({ type: types.GET_ALL_BLOGS_SUCCESS, payload: res.data });
    })
    .catch((e) => {
      return dispatch({ type: types.GET_ALL_BLOGS_FAILURE, payload: e });
    });
};

export const updateBlog = (payload) => (dispatch) => {
  dispatch({ type: types.GET_ALL_BLOGS_REQUEST });
  return axios
    .get("http://localhost:5000/getblogs")
    .then((res) => {
      return dispatch({ type: types.GET_ALL_BLOGS_SUCCESS, payload: res.data });
    })
    .catch((e) => {
      return dispatch({ type: types.GET_ALL_BLOGS_FAILURE, payload: e });
    });
};
