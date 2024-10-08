import React, { useReducer, useRef, useState } from 'react'
import { InitialState, reducer } from './TodoReducers';
import {Actions} from './Actions';


const Todo = () => {

    document.body.style.background = "#34495e"
    let [state, dispatch] = useReducer(reducer, InitialState)
    let EditRef = useRef();
    let Title = useRef();
    let Desc = useRef();
    let [Get_ID, SetID] = useState(null)
    


    const HandleEvent = (e) => {

        dispatch({
            type: Actions.CHANGE_HANDLE_EVENT, payload: {
                name: e.target.name,
                value: e.target.value
            }
        })

    }

    const AddTodo = (e) => {
        e.preventDefault();
        if (EditRef.current.innerText === "ADD-TODO") {
            dispatch({
                type: Actions.ADD_TODO, payload: {
                    Todo_Title: state.Title,
                    Todo_Description: state.Description
                }
            })
            dispatch({type:Actions.CLEAR_INPUT});
        }
        else {
            dispatch({
                type: Actions.UPDATE_TODO, payload: {
                    Todo_ID: Get_ID,
                    Todo_Title: state.Title,
                    Todo_Description: state.Description
                }
            })
            dispatch({type:Actions.CLEAR_INPUT});
            EditRef.current.innerText = "ADD-TODO"
            EditRef.current.style.background = "#0069d9"
            EditRef.current.style.border = "#0069d9"
        }


    }

    const DeleteEvent = (index) => {
        dispatch({ type: Actions.DELETE_TODO, payload: index })
    }


    const EditEvent = (ID) => {

        state.AllTodos.filter((elem, index) => {
            if (elem.ID === ID) {
                console.log(elem)
                EditRef.current.innerText = "UPDATE-TODO"
                EditRef.current.style.background = "#f1c40f"
                EditRef.current.style.border = "#f1c40f"
                state.Title = elem.Todo_Title
                state.Description = elem.Todo_Description
                SetID(index)
            }
        })


    }


    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-6' style={{ margin: "20px 0px" }}>
                    <input type='text' className='form-control ' ref={Title}  placeholder='Enter Title' name='Title' onChange={HandleEvent} value={state.Title} />
                    <textarea className="form-control mt-2 " ref={Desc} placeholder='Enter Description' name='Description' onChange={HandleEvent} value={state.Description} rows="3"></textarea>
                    <button type="submit" ref={EditRef} className="btn btn-primary btn-block mt-2" onClick={AddTodo}>ADD-TODO</button>
                </div>

                <div className='col-md-12'>
                    <h4 className='text-center text-light'>Total Todos = {state.AllTodos.length}</h4>
                    {
                        state.AllTodos.map((elem) => {
                            return (
                                <div className='card' key={elem.ID}>
                                    <div className='card-header'>
                                        <h2>{!elem.Todo_Title ? "Lorem Ipsum" : elem.Todo_Title}</h2>
                                    </div>
                                    <div className='card-body'>
                                        <h5>{!elem.Todo_Description ? "Lorem Ipsum" : elem.Todo_Description}</h5>
                                    </div>
                                    <div className='card-header'>
                                        <button type="button" className="btn btn-warning" onClick={() => { EditEvent(elem.ID) }}>EDIT</button>
                                        <button type="button" className="btn btn-danger ml-2 " onClick={() => { DeleteEvent(elem.ID) }}>DELETE</button>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Todo