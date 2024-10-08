import { useReducer } from "react";


const NewUpdatedCounter = () => {


    let InitialState = 0;

    const reducer = (state, action) => {
        switch (action.type) {
            case "Increament":
                if (state >= 10) {
                    return state = 9
                } else {
                    return state + 1
                }

            case "Decreament":
                if (state <= 1) {
                    return state = 1
                } else {
                    return state - 1
                }


            default:
                return state;
        }
    }


    let [state, dispatch] = useReducer(reducer, InitialState)


    return (
        <div className="container">

            <button className='btn btn-success' onClick={() => { dispatch({ type: "Increament" }) }}  >PLUS</button>
            <h3>{state}</h3>
            <button className='btn btn-danger' onClick={() => { dispatch({ type: "Decreament" }) }} >Minus</button>
        </div>
    )
}

export default NewUpdatedCounter;