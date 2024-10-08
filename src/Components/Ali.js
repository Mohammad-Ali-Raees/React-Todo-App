import React from 'react'
import { useParams } from 'react-router-dom'

const Ali = () => {

    let myParams = useParams();
    let { name } = myParams;
    console.log(name);
    return (
        <div>Ali {name} </div>
    )
}

export default Ali