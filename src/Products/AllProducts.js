import React, { useEffect } from 'react'
import { useReducer } from 'react'
import { Reducer, InitialState } from './Reducer';
import ProductCard from './ProductCard';


const AllProducts = () => {



    const [state, dispatch] = useReducer(Reducer, InitialState);


    const GetlAllData = async (API) => {
        const API_Data = await fetch(API);
        const response = await API_Data.json();
        dispatch({ type: "GET_ALL_API_DATA", payload: response });
    }


    const NextPage = ()=>{
        GetlAllData(`https://api.escuelajs.co/api/v1/products?offset=${state.PAGINATION}&limit=10`);
        dispatch({type:"NEXT_PAGE"})

    }

    const PreviousPage = ()=>{
        GetlAllData(`https://api.escuelajs.co/api/v1/products?offset=${state.PAGINATION}&limit=10`);
        dispatch({type:"PREVIOUS_PAGE"})
    }



    useEffect(() => {
        GetlAllData('https://api.escuelajs.co/api/v1/products?offset=0&limit=10');
    }, [])



    return (
        <section >
            <div className="container py-5">
                <div className="row">

                    <div className="col-md-4">

                    </div>

                    <div className='col-md-8'>
                        <div className='row'>
                            {
                                state.ALL_API_DATA.map((elem) => {

                                    return (
                                        <ProductCard key={elem.id} category={elem.category} title={elem.title} price={elem.price} description={elem.description} />
                                    )
                                })
                            }


                        </div>
                        <div className='buttons_pagination mt-4'>
                            <button type='button' className='btn btn-sm btn-danger' style={{ float: "left" }} onClick={PreviousPage} >Privious</button>
                            <button type='button' className='btn btn-sm btn-info' style={{ float: "right" }} onClick={NextPage}>Next</button>
                        </div>

                    </div>

                </div>
            </div>
        </section>


    )
}

export default AllProducts