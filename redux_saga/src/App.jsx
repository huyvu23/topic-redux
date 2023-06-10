import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getListPost, incrementCounter, decrementCounter } from "./action";

function App() {
  const dispatch = useDispatch();

  const post = useSelector((state) => state.post.posts);
  // console.log("post:", post);

  const valueCount = useSelector((state) => state.counter.count);

  const handleIncrease = () => {
    dispatch(incrementCounter(5));
  };
  const handleDecrease = () => {
    dispatch(decrementCounter(5));
  };

  // useEffect(() => {
  //   dispatch(getListPost());
  // }, []);
  return (
    <>
      <div>{valueCount}</div>
      <button onClick={handleIncrease}>Increment</button>
      <button onClick={handleDecrease}>Decrement</button>
    </>
  );
}

export default App;
