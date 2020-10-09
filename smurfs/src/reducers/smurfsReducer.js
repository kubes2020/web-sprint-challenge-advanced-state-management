
import { 
    FETCH_SMURFS_START, 
    FETCH_SMURFS_SUCCESS, 
    FETCH_SMURFS_FAILURE } from "../actions/smurfsActions";

const initialState = {
    network: {
        isLoading: false,
        erros: "",
    },
    
    smurfs: [
        {name: "", age: "", height: "", id: ""}
    ]


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
                ...state, smurfs: [...state.smurfs, ]
            }
        default:
            return state
    }
}