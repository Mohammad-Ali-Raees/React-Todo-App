import React from 'react'
import placeholder from '../Img/Placeholder.jpg';
import {Link} from 'react-router-dom';
import "../App.css"


const ProductCard = ({category,title,price,description}) => {
  return (
    <div className='col-md-5' >
   
    <div className="card mt-3">
    <Link>
        <img src={!category.image ? placeholder: category.image} style={{width:"100%"}} />
        </Link>
        <div className="card-body">
            <div className="d-flex justify-content-between">
                <p className="small"><a href="#!" className="text-muted">{category.name}</a></p>
                <p className="small text-danger"><s>$1099</s></p>
            </div>
            <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0 text-dark">{title}</h5>
                <h5 className="text-dark mb-0">${price}</h5>                                                  
            </div>
            <div>
            <p className='text-dark'>{description}</p>
            <button type='button' className='btn btn-info btn-block'>ADD TO CART</button>
            </div>
            {/* <div className="d-flex justify-content-between mb-2">
                <p className="text-muted mb-0">Available: <span className="fw-bold">6</span></p>
                <div className="ms-auto text-warning">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                </div>
            </div> */}
        </div>
    </div>
   
</div>
  )
}

export default ProductCard