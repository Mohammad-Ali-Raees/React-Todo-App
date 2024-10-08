import React, { useReducer } from 'react'

const Counter1 = () => {

    const InitialState = 0;

    const Reducer = (state, action) => {
        if (action.type === "Increament") {
            if (state >= 10) {
                return state = 10
            } else {
                return state + 1
            }
        }
        if (action.type === "Decreament") {
            if (state <= 0) {
                return state = 0
            } else {
                return state - 1
            }
        }

    }

    const [state, dispatch] = useReducer(Reducer, InitialState)

    return (
        <div className="container">

            <button className='btn btn-success' onClick={() => { dispatch({ type: "Increament" }) }}>PLUS</button>
            <h3>{state}</h3>
            <button className='btn btn-danger' onClick={() => { dispatch({ type: "Decreament" }) }}>Minus</button>
       
        </div>
    )
}

export default Counter1