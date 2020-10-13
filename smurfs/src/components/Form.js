import React, { useState } from "react";
import {addSmurfs} from "../actions/addSmurfsActions";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions/smurfsActions";

const Form = (props) => {
    const [formState, setFormState] = useState({
        name: "",
        age: "",
        height: "",
        id: Date.now(),
    })

    const handleChange = (e) => {
        e.persist()
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        setFormState({
            name: "",
            age: "",
            height: "",
        })
    }

    const handleOnClick = () => {
        //take smurfs from locale state, then in actions do axios.post
        props.addSmurfs(formState);
        //triggers another axios.get call to render all smurfs from server
        props.fetchSmurfs()
    }

    return(
        <>
        <h2>Join The Village</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:
            <input name="name" id="name" type="text" value={formState.name} onChange={handleChange}></input>
            </label><br/>
            <label htmlFor="age">Age:
            <input name="age" id="age" type="text" value={formState.age} onChange={handleChange}></input>
            </label><br/>
            <label htmlFor="height">Height:
            <input name="height" id="height" type="text" value={formState.height} onChange={handleChange}></input>
            </label><br/>
            <button onClick={handleOnClick}>Submit</button>

        </form>
        </>     
    )
}

// const mapStateToProps = (state) =>{
//     return {  
//     }
//   }
  export default connect(null, {addSmurfs, fetchSmurfs})(Form)