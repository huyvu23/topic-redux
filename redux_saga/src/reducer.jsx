import { Types } from "./type";

const initialState = {
  load: false,
  posts: [],
};

//  thằng reducer trả về cái gì thì hàm getState nhận được cái đó
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.getListPost:
      return {
        ...state,
        load: true,
      };
    case Types.getListPostSuccess:
      return {
        ...state,
        load: false,
        posts: action?.payload?.data,
      };
    default:
      return state;
  }
};
