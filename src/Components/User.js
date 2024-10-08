import React, { useEffect, useReducer, useState } from 'react'
import "../Styling/productCard.css";
const User = () => {
  const InitialState = {
    AllUsersData: [],
  }


  const Reducer = (state, action) => {

    

    switch (action.type) {
      case "Success":
        return {
          ...state,
          AllUsersData: action.payload

        }

      case "FilterProducts":
        return {
          ...state,
          AllUsersData: action.payload
        }

      default:
        return state;
    }
  }


  const [state, dispatch] = useReducer(Reducer, InitialState);
  let { AllUsersData } = state
  let [GetCategory,SetCategory] = useState([])
  let Categories = [...new Set(GetCategory.map(elem => { return elem.category })), "ALL"]


  let GetData = async () => {
    let Users = await fetch(`https://fakestoreapi.com/products?limit=30`);
    let data = await Users.json();
    dispatch({ type: "Success", payload: data });
   SetCategory(data);
  }


  let FilterHandle = (name) => {
    // let FilterData = state.AllUsersData.filter(elem => {
    //   return elem.category === name;
    // })
   
    let FilterItems = state.AllUsersData.filter((elem) => {
      if (elem.category === name) {
          return elem;
      }
  })
  console.log(FilterItems)
  dispatch({ type: "FilterProducts", payload: FilterItems });
  }

  useEffect(() => {
    GetData();
  }, [])


  return (
    <div className='container'>
      <div className='row justify-content-center' style={{ margin: "30px 0px" }}>

        <div className='col-md-12'>
        
        {
          Categories.map((elem)=>{
            return(
              <>&nbsp;
                  <button className="btn btn-success" type="button" onClick={() => { FilterHandle(elem) }}>{elem}</button>
              </>
            )
          })
        }
          
         

        </div>


        {
          AllUsersData.map((elem) => {
            return (
              <div className='col-md-4' key={elem.id}>
                <div className="product">

                  <img className="product__image" src={elem.image} />
                  <h1 className="product__title">{elem.title.slice(0, 20)}</h1>
                  <p>Category: {elem.category.toUpperCase()}</p>
                  <hr />
                  <p>{elem.description.slice(0, 122)}..</p>
                  <h5 className="product__price">{elem.price}</h5>
                  <a href="#" className=" btn btn-primary btn-md">Buy Now</a>
                </div>

              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default User