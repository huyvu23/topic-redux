import "./App.css";
import {
  decrementCounter,
  incrementCounter,
  addTodo as addTodoAction,
  deleteTodo as deleteTodoAction,
  addTodoAsync,
} from "./Action";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count.count);
  const todos = useSelector((state) => state.todos.todos);
  const [name, setName] = useState("");
  const handleIncrease = () => {
    dispatch(incrementCounter(5));
  };
  const handleDecrease = () => {
    dispatch(decrementCounter(5));
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const addTodo = () => {
    dispatch(addTodoAsync());
  };

  const deleteTodo = (id) => {
    dispatch(deleteTodoAction(id));
  };
  return (
    <>
      <section>{count}</section>
      <button onClick={handleIncrease}>Increment</button>
      <button onClick={handleDecrease}>Decrement</button>
      <div>
        <input type="text" value={name} onChange={handleChange} />
        <button onClick={addTodo}>add</button>
        <button onClick={deleteTodo}>delete</button>
      </div>
      {todos.map((item) => {
        return (
          <>
            <div>
              {item.name}
              <span onClick={() => deleteTodo(item.id)}>X</span>
            </div>
          </>
        );
      })}
    </>
  );
}

export default App;
