import axios from "axios";
import { Types } from "./type";

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

export const addTodo = (data) => {
  return {
    type: Types.addTodo,
    payload: data,
  };
};

// Với những trường hợp trả về function ta sẽ sử dụng middleware để giải quyết vấn đề này
export const addTodoAsync = () => async (dispatch) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  dispatch(
    addTodo({
      name: res.data.title,
      id: Math.random(),
    })
  );
};

export const deleteTodo = (data) => {
  return {
    type: Types.deleteTodo,
    payload: data,
  };
};
