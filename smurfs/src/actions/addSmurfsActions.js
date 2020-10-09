import React from "react";
export const ADD_SMURFS = "ADD_SMURFS";

export function addSmurfs(smurfsObj){
    console.log("smurfsObj", smurfsObj)
    return { type: ADD_SMURFS, payload: smurfsObj}    
};








// export const addSmurfs = (smurfObj) => (dispatch) => {
//     dispatch({ type: ADD_SMURFS, payload: smurfObj})    
// }