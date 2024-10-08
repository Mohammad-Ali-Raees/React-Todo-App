import React, { useReducer } from 'react'
import { PostActionTypes } from './functions/reducerFunctions';

const Counter3 = () => {

  let InitialState = 0;

  let Reducer = (state, action) => {
console.log(state,action)
    switch (action.type) {
      case PostActionTypes.Increament:
      if(state >= 10){
        return state = 10;
      }else{
        return state + 1;
      }

      case PostActionTypes.Decreament:
        if(state <= 1){
          return state = 1;
        }else{
          return state - 1;
        }

      default:
        return state;
    }

  }


  let [state, dispatch] = useReducer(Reducer, InitialState);


  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-6' style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <button className='btn btn-success' onClick={() => { dispatch({ type: "Increament" }) }} >PLUS</button>
          <h3 style={{margin:"20px"}}>{state}</h3>
          <button className='btn btn-danger' onClick={() => { dispatch({ type: "Decreament" }) }} >Minus</button>

        </div>
      </div>
    </div>
  )
}

export default Counter3