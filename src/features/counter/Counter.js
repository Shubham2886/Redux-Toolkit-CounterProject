import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { increment, decrement, incrementByAmount, selectCount } from './counterSlice';

export function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState(2); // Initial value is set to 2

    const handleIncrementByAmount = () => {
        dispatch(incrementByAmount(incrementAmount)); // Dispatch the incrementByAmount action with the current incrementAmount value
    };

    return (
        <div>
            <div>
                <button
                    aria-label="Increment Value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement Value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
            </div>
            <div>
                <input
                    type="number"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(parseInt(e.target.value))}
                />
                <button onClick={handleIncrementByAmount}>Increment by Amount</button>
            </div>
        </div>
    );
}
