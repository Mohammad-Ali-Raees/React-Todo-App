import React, { useState } from 'react'

const ADD_Remove = () => {

    let [ADD_Component, Set_Component] = useState([]);

    let ADD_DATA =()=>{
       
    }

    return (


        <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <button type='button' className='btn btn-primary' onClick={ADD_DATA}>ADD</button>
            <div className="card" style={{ width: '18rem' }}>

                <div className="card-body">
                    <h5 className="card-title">Card title</h5>

                </div>
            </div>

        </div>
    )
}

export default ADD_Remove