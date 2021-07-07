import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";

export const fetchSmurfs = (url="http://localhost:3333/smurfs") => dispatch => {
    dispatch({type: FETCH_SMURFS_START })
    axios
        .get(url)
        .then(res =>{
            console.log("Getting data from res", res.data)
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log("Error getting data from res", err)
            dispatch({ type: FETCH_SMURFS_FAILURE, payload: err })
        })
}