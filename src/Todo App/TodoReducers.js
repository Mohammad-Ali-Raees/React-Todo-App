import {Actions} from './Actions';

export const InitialState = {
    AllTodos: [],
    Title: '',
    Description: ''

}

export const reducer = (state, action) => {

    switch (action.type) {

        case Actions.CLEAR_INPUT:
            return{
                ...state,
                Title: '',
                Description:''
            }

        case Actions.CHANGE_HANDLE_EVENT:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }

        case Actions.ADD_TODO:
            let NewTodo = {
                ID: new Date().getMilliseconds(),
                Todo_Title: action.payload.Todo_Title,
                Todo_Description: action.payload.Todo_Description
            }
            return {
                AllTodos: [...state.AllTodos, NewTodo],
              
            }

        case Actions.DELETE_TODO:
            let oldTodo = state.AllTodos.filter(elem => elem.ID !== action.payload)
            return {
                ...state,
                AllTodos: oldTodo
            }
            
            case Actions.UPDATE_TODO:
                let New_Updated_Todo = {
                    ID: new Date().getMilliseconds(),
                    Todo_Title: action.payload.Todo_Title,
                    Todo_Description: action.payload.Todo_Description
                }
              
                state.AllTodos.splice(action.payload.Todo_ID,1,New_Updated_Todo)
                return {
                 ...state
                  
                }


        default:
            return state;
    }

}