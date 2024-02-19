import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/features/counter/counterSlice';

export const Counter = () => {
    const {value} = useSelector(state => state.counter);
    const dispatch = useDispatch();
  return (
    <div>
        <div className="increment">
            <button className='border-2 bg-slate-500 text-white p-3' onClick={() => dispatch(increment())}>Increment</button>
            <p className='inline mx-3'>{value}</p>
            <button className='border-2 bg-slate-500 text-white p-3' onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    </div>
  )
}
