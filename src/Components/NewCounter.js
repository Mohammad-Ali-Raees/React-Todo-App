import React, { useReducer } from 'react'

const NewCounter = () => {
    let InitialState = 0;

    let reducer = (state, action) => {
        switch (action.type) {
            case "Increament":
                if (state >= 10) {
                    state = 1
                } else {
                    return state + 1;
                }
            case "Decrement":
                if (state <= 0) {
                    state = 1
                } else {
                    return state - 1;
                }

            default:
                return state;
        }
    }



    let [state, dispatch] = useReducer(reducer, InitialState);

    return (
        <div className="container">

            <button className='btn btn-success' onClick={() => { dispatch({ type: "Increament" }) }} >PLUS</button>
            <h3>{state}</h3>
            <button className='btn btn-danger' onClick={() => { dispatch({ type: "Decrement" }) }}>Minus</button>
        </div>
    )
}

export default NewCounter