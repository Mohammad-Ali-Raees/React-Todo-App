import React, { useReducer, useRef } from 'react'
import { reducer, InitialState } from './AllFunctions';

const Different = () => {

    const [state, dispatch] = useReducer(reducer, InitialState)
    
let TagsRef = useRef();
    let EventHandler = (e) => {
        let value = e.target.value;
        let name = e.target.name;

        dispatch({ type: "InputText", payload: { name, value } });
    }

    let ChangeSelect = (e) => {
        dispatch({ type: "ChangeSelectOption", payload: e.target.value });

    }

    let GetData = ()=>{
        let data = TagsRef.current.value.split(",");
       
            dispatch({type:"GetAllData", payload:data });   
    }

 




    return (
        <div className='container' style={{ marginTop: "100px" }}>
            <div className='row '>
                <p>{state.ChangeSelect}</p>
                <div className='col-md-5'>
                    <input type="text" className='form-control form-control-sm' placeholder='Enter First Name' name='fname' onChange={EventHandler} />
                    <br />
                    <input type="text" className='form-control form-control-sm' placeholder='Enter First Name' name='lname' onChange={EventHandler} />
                </div>

                <div className='col-md-5'>
                    <select className="form-select" onChange={ChangeSelect} name="ChangeSelect">
                        <option selected>Open this select menu</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="UK">UK</option>
                    </select>


                </div>


                <div className='col-md-5'>
                    <br/>
                    <div className="form-floating">
                        <textarea className="form-control" ref={TagsRef} onChange={EventHandler}  placeholder="Leave a comment here"  />
                      <button type='button' className='btn btn-sm btn-primary' onClick={GetData}>Get Data</button>
                    </div>



                </div>
                {
                     !state.tags  ? "<h3>No Tags Avaialable </h3>" : 
                    state.tags.map((elem)=>{
                        return(
                           <div style={{padding:"10px",height:"auto",border:"1px solid black", margin:"10px", borderRadius:"10px"}} key={elem}>
                            <p className='text-center' >{elem}</p>
                            {/* <button type='button' className='btn btn-sm btn-danger' onClick={ dispatch({type:"RemoveData",payload:elem})}>Remove</button> */}
                           </div>
                        )
                    })
                  
                }
            </div>
        </div>
    )
}

export default Different