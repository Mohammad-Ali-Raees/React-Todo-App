import React from 'react'
import { useReducer } from 'react'

const Counter = () => {


    let initialState = 0;

    let reducer = (state,action)=>{
        if(action.type === 'Plus'){
            return state + 1
        }
        if(action.type === 'Minus'){
            return state - 1
        } 
        
   
    }



    let [state,dispatch] = useReducer(reducer,initialState)



  return (
   <div className='container'> 
    <div className='row justify-content-center'>
        <div className='col-md-6' style={{margin:"50px 0px"}}>
            <div className='form-group'>
                <button className='btn btn-danger' onClick={()=>{dispatch({type:"Minus"})}}>Minus</button>
               <h6>{state}</h6>
                <button className='btn btn-success' onClick={()=>{dispatch({type:"Plus"})}}>Plus</button>
            </div>
        </div>
    </div>
   </div>
  )
}

export default Counter