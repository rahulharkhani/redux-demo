import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, changeName } from './counterSlice';

export const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const name = useSelector((state) => state.counter.name);
    const dispatch = useDispatch();
    const handleChange = (event) => {
        // 👇 Get input value from "event"
        let name = event.target.value;
        dispatch(changeName(name ? name : 'default'))
    };
    return (
        <>
            <h3>Count {count} Name: {name}</h3>
            <input type="text" onChange={handleChange} />
            <button aria-label="Increment value" onClick={() => dispatch(increment())}>Increment</button>
            <button aria-label="Increment by value" onClick={() => dispatch(incrementByAmount(50))}>Increment by value</button>
            <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>Decrement</button>
        </>
    )
}
