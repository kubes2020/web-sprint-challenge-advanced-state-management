import React from "react";
import axios from "axios";
import { fetchSmurfs } from "./smurfsActions";
import { connect } from "react-redux";


export const POST_SMURFS_START = "POST_SMURFS_START";
export const POST_SMURFS_SUCCESS = "POST_SMURFS_SUCCESS";
export const POST_SMURFS_FAILURE = "POST_SMURFS_FAILURE";
export const ADD_SMURFS = "ADD_SMURFS";

export const addSmurfs = (smurfObj) => (dispatch) => {
    dispatch({ type: POST_SMURFS_START })   
    axios
        .post("http://localhost:3333/smurfs", smurfObj)
        .then(res => {
            console.log("Post was succesful", res)
            dispatch({ type: POST_SMURFS_SUCCESS })
        })
        .catch(err => {
            console.log("Post error", err)
        }) 
}


//This is for adding smurfs to store directly
// export function addSmurfs(smurfsObj){
//     console.log("smurfsObj", smurfsObj)
//     return { type: ADD_SMURFS, payload: smurfsObj}    
// };


// export const addSmurfs = (smurfObj) => (dispatch) => {
//     dispatch({ type: ADD_SMURFS, payload: smurfObj})    
// }