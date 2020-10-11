
import { 
    FETCH_SMURFS_START, 
    FETCH_SMURFS_SUCCESS, 
    FETCH_SMURFS_FAILURE } from "../actions/smurfsActions";
import { ADD_SMURFS, POST_SMURFS_START, POST_SMURFS_SUCCESS, POST_SMURFS_FAILURE } from "../actions/addSmurfsActions";

    const initialState = {
        network: {
            isLoading: false,
            errors: "",
        },
        
        smurfs: []
    }
export const smurfsReducer = (state = initialState, action) => {
    console.log("action.payload!", action)
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
                    ...state.network, isLoading: false, errors: JSON.stringify(action.payload)}
            }

        case POST_SMURFS_START:
            return{
                ...state, network:{...state.network, isLoading: true}
            }

        case POST_SMURFS_SUCCESS:
            return{
                ...state, network:{...state.network, isLoading: false}
            }

        case POST_SMURFS_FAILURE:
            return{
                ...state, network:{
                    ...state.network, isLoading: false, errors: JSON.stringify(action.payload) }
            }
            
        //This is for updating store directly from input (no server post)
        // case ADD_SMURFS:
        //     return{
        //         ...state, smurfs: [...state.smurfs, action.payload] 
        //     }

        default:
            return state
    }
}





