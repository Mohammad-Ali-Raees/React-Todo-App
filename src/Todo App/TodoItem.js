import React from 'react'

const TodoItem = ({DeleteEvent, ID, Todo_Title, Todo_Description }) => {

  

  return (

    <div className="card">
      <div className='card-header'>
        <h2 className="card-title">{!Todo_Title ? "Lorem Ipsum" : Todo_Title}</h2>
      </div>

      <div className='card-body'>
        <h4 className="card-text">{!Todo_Description ? "Lorem Ipsum" : Todo_Description}</h4>
      </div>
      <div className='buttons'>
        <button type="button" className="btn btn-warning">EDIT</button>
        <button type="button" className="btn btn-danger ml-2 " onClick={DeleteEvent(ID)}>DELETE</button>
      </div>

    </div>


  )
}

export default TodoItem