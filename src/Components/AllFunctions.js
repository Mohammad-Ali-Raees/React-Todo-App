
export const InitialState = {

    fname: "",
    lname: "",
    tags: [],
    ChangeSelect: ""

};

export const reducer = (state, action) => {

    switch (action.type) {
        case "InputText":
            return {
                ...state,
                [action.payload.name]: action.payload.value
            };


        case "ChangeSelectOption":
            return {
                ...state,
                ChangeSelect: action.payload
            };

            case "GetAllData":
                return {
                    ...state,
                    tags: [...state.tags, action.payload]
                };

               
     

        default:
            return state;
    }

};

