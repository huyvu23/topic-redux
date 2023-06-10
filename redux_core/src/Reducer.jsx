import { Types } from "./type";

const initialState = {
  count: 1,
};

//  thằng reducer trả về cái gì thì hàm getState nhận được cái đó
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.increase: {
      return { count: (state.count += action.payload) };
    }

    case Types.decrease: {
      return { count: (state.count -= action.payload) };
    }
    default:
      return state;
  }
};
