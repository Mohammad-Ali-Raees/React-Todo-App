
const InitialState = {

    ALL_API_DATA :[],
   PAGINATION : 1

}


const Reducer = (state,action)=>{
    console.log(state.PAGINATION)
    switch (action.type) {
        case "GET_ALL_API_DATA":
        return{
            ...state,
            ALL_API_DATA:action.payload
        }
        case "NEXT_PAGE":
        return{
            ...state,
            PAGINATION: state.PAGINATION + 1
        }

        case "PREVIOUS_PAGE":
            return{
                ...state,
                PAGINATION: state.PAGINATION - 1
            }

               
        default:
          return state;
    }

}

export {InitialState,Reducer};