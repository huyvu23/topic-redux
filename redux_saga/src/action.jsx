import { Types } from "./type";

export const getListPost = (payload) => {
  return {
    type: Types.getListPost,
    payload,
  };
};

export const getListPostSuccess = (payload) => {
  return {
    type: Types.getListPostSuccess,
    payload,
  };
};

export const incrementCounter = (data) => {
  return {
    type: Types.increase,
    payload: data,
  };
};

export const decrementCounter = (data) => {
  return {
    type: Types.decrease,
    payload: data,
  };
};
