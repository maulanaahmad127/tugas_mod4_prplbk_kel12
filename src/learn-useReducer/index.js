import React, { useReducer } from 'react';
import "./index.css";

const initialState = { count: 0 }

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        case 'reset':
            return { count: state.count = 0 }
        default:
            return { count: state.count }
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            Count: {state.count}
            <br />
            <br />
            <div className="ViewButton3">
                <button className="Button" onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            </div>
            <div className="ViewButton2">
                <button className="Button" onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
            </div>
            <div className="ViewButton1">
                <button className="Button" onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            </div>
        </div>

    );
};

export default Counter;