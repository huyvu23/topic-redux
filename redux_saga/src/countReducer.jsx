import { Types } from "./type";

const initialState = {
  count: 1,
};

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.increase:
      return { count: (state.count += action.payload) };
    case Types.decrease:
      return { count: (state.count -= action.payload) };
    default:
      return state;
  }
};
