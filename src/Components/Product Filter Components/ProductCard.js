import React from 'react'
import placeholder from '../Imgs/1.jpg'
const ProductCard = ({id,image,title,description,price}) => {
    return (
        <div className='col-md-6' key={id}>
            <div className="card" style={{ padding: "30px", display: "flex", justifyContent: "center", alignItems: "center", height: "550px", marginBottom: "20px" }}>
                <img src={!image ? placeholder : image} style={{ width: "50%" }} />
                <div className="card-body" style={{ textAlign: "center" }}>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{`${description.slice(0, 100)}...`}</p>
                    <h3>${price}</h3>
                    <a href="#" className="btn btn-primary btn-block">Add To Cart</a>
                </div>
            </div>

        </div>
    )
}

export default ProductCard