import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as counterActions from "../../redux/test/actions";

const TestRedux = () => {
  const dispatch = useDispatch();
  const counterState = useSelector((state) => state.counter.value);

  useEffect(() => {
    dispatch(counterActions.fetchApi());
  }, [dispatch]);

  const onClickIncrement = () => {
    dispatch(counterActions.increment(5));
  };

  const onClickDecrement = () => {
    dispatch(counterActions.decrement(5));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      Test Redux
      <h2>{counterState}</h2>
      <button onClick={onClickIncrement}>Increment</button>
      <button onClick={onClickDecrement}>decrement</button>
    </div>
  );
};

TestRedux.propTypes = {};

export default TestRedux;
