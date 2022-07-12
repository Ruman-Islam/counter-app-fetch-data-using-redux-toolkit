import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByValue, reset } from '../counter/counterSlice';

const CounterView = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => dispatch(incrementByValue(5))}>Increment with 5</button>
        </div>
    );
};

export default CounterView;