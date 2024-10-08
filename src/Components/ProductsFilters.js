import React, { useEffect, useReducer } from 'react'

import ProductCard from './Product Filter Components/ProductCard'
const ProductsFilters = () => {


    let InitialState = {
        ALL_API_DATA: [],
        Product_Categories: []
    }

    let Reducer = (state, action) => {
        switch (action.type) {
            case "API_DATA":
                return {
                    ...state,
                    ALL_API_DATA: action.payload
                }

            case "PRODUCT_CATEGORIES":
                return {
                    ...state,
                    Product_Categories: action.payload
                }



            default:
                return state;
        }
    }


    let [state, dispatch] = useReducer(Reducer, InitialState);


    const GetAllData = async () => {

        let data = await fetch(`https://fakestoreapi.com/products`);
        let response = await data.json();
        dispatch({ type: "API_DATA", payload: response });

        let categories = [...new Set(response.map(elem => elem.category)), "ALL"]
        dispatch({ type: "PRODUCT_CATEGORIES", payload: categories });


    }

    const CategoryShow = (e) => {
        state.ALL_API_DATA.filter(elem => {
            if (elem == e) {
                return console.log(e);
            }
        })
    }

    useEffect(() => {
        GetAllData();

    }, [])


    return (
        <div className='container'>
            <div className='row justify-content-center' style={{ marginTop: "30px" }}>
                <div className='col-md-4'>
                    <div className='category'>
                        <h5>Categories</h5>
                        {

                            state.Product_Categories.map((elem, index) => {

                                return (
                                    <div key={index} >
                                        <button type='button' className='btn btn-success mb-2' onClick={() => { CategoryShow(elem) }}>{elem}</button><br />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='col-md-8'>
                    <div className='row'>
                        {
                            state.ALL_API_DATA.map((elem) => {
                                return (

                                 
                                   <ProductCard id={elem.id} image={elem.image} title={elem.title} description={elem.description} price={elem.price} />
                                  

                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsFilters