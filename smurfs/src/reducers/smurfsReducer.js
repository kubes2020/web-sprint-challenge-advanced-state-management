
import { 
    FETCH_SMURFS_START, 
    FETCH_SMURFS_SUCCESS, 
    FETCH_SMURFS_FAILURE } from "../actions/smurfsActions";
import { ADD_SMURFS } from "../actions/addSmurfsActions";

    const initialState = {
        network: {
            isLoading: false,
            erros: "",
        },
        
        smurfs: []
    }
export const smurfsReducer = (state = initialState, action) => {
    console.log("action.payload!", action.payload)
    switch(action.type){
        case FETCH_SMURFS_START:
            return{
                ...state, network:{...state.network, isLoading: true}
            }
            case FETCH_SMURFS_SUCCESS:
                return{
                    ...state, smurfs: action.payload,
                    network: {...state.network, isLoading: false}
                }

        case FETCH_SMURFS_FAILURE:
            return{
                ...state, network:{
                    ...state.network, isLoading: false, error: "you have an error!"}
            }

        case ADD_SMURFS:
            return{
                ...state, smurfs: [...state.smurfs, action.payload] 
            }

        default:
            return state
    }
}


// const initialState = {
//     network: {
//         isLoading: false,
//         erros: "",
//     },
    
//     smurfs: [
//         {name: "", age: "", height: "", id: ""}
//     ]
// }

// case FETCH_SMURFS_SUCCESS:
//             return{
//                 ...state, smurfs: [...state.smurfs, {
//                     name: action.payload.name,
//                     age: action.payload.age,
//                     height: action.payload.height,
//                     id: action.payload.height,
//                 } ]
//             }

// case FETCH_SMURFS_SUCCESS:
//                 return{
//                     ...state, smurfs: [...state.smurfs, action.payload.map(item =>(
//                         {name: item.name,
//                         age: item.age,
//                         height: item.height,
//                         id: item.id,
//                         }
//                     ))]
//                 }