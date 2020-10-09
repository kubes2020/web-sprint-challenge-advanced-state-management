import React, { useState } from "react";
import {addSmurfs} from "../actions/addSmurfsActions";
import { connect } from "react-redux";

const Form = (props) => {
    const [formState, setFormState] = useState({
        name: "",
        age: "",
        height: "",
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

    return(
        <>
        <h2>Join The Village</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:
            <input name="name" id="name" type="text" value={formState.name} onChange={handleChange}></input>
            </label>
            <label htmlFor="age">Age:
            <input name="age" id="age" type="text" value={formState.age} onChange={handleChange}></input>
            </label>
            <label htmlFor="height">Height:
            <input name="height" id="height" type="text" value={formState.height} onChange={handleChange}></input>
            </label>
            <button onClick={()=>props.addSmurfs(formState)}>Submit</button>
        </form>
        </>     
    )
}

const mapStateToProps = (state) =>{
    return {
      
    }
  }
  export default connect(mapStateToProps, {addSmurfs})(Form)