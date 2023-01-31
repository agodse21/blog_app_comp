import * as types from "./ActionTypes";
const intialState = {
  blogs: [],
  isLoading: false,
  isAdmin: false,
  isUser: false,
};
export const reducer = (state = intialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.ADMIN_LOGIN_SUCCESS: {
      return {
        ...state,
        isAdmin: true,
        isUser: false,
      };
    }
    case types.USER_LOGIN_SUCCESS: {
      return {
        ...state,
        isUser: true,
        isAdmin: false,
      };
    }
    case types.GET_ALL_BLOGS_SUCCESS: {
      return {
        ...state,
        blogs: payload,
      };
    }
    default:
      return state;
  }
};
